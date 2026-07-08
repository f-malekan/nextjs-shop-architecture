"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BaseInput from "../BaseComponents/BaseInput";
import BaseSelect from "../BaseComponents/BaseSelect";
import * as z from "zod";
import BaseTextarea from "../BaseComponents/BaseTextArea";
import BaseCheckBox from "../BaseComponents/BaseCheckBox";
import BaseButton from "../BaseComponents/BaseButton";
import { saveAddress } from "@/app/actions/dashboardActions/userAddressesActions";
import { iranCities } from "@/constants";
import BaseMessage from "../BaseComponents/BaseMessage";
import { useState } from "react";
import { AddressType } from "@/types";
import { addressSchema } from "@/validations";

interface Props {
  initialData?: AddressType;
  onSuccess?: () => void;
}

const provinces = iranCities.map((i) => i.name);

type AdressFormDataType = z.infer<typeof addressSchema>;

const defaultEmptyValues: AdressFormDataType = {
  title: "",
  receiverName: "",
  phoneNumber: "",
  province: "",
  city: "",
  fullAddress: "",
  postalCode: "",
  isDefault: false,
};

const AddressForm = ({ initialData, onSuccess }: Props) => {
  const isEditMode = !!initialData;
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdressFormDataType>({
    resolver: zodResolver(addressSchema),
    defaultValues: initialData
      ? {
          title: initialData.title,
          receiverName: initialData.receiverName || "",
          phoneNumber: initialData.phoneNumber || "",
          province: initialData.province,
          city: initialData.city,
          fullAddress: initialData.fullAddress,
          postalCode: initialData.postalCode,
          isDefault: initialData.isDefault,
        }
      : defaultEmptyValues,
  });

  const selectedProvince = useWatch({
    control,
    name: "province",
  });

  const availableCities =
    iranCities.find((p) => p.name === selectedProvince)?.cities || [];

  const onSubmit = async (data: AdressFormDataType) => {
    const payload =
      isEditMode && initialData ? { ...data, id: initialData.id } : data;

    const result = await saveAddress(payload);

    if (result.success) {
      setSuccess(true);
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
          setSuccess(false);
        }, 1500);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-3 md:p-6 bg-white rounded-lg md:border md:border-gray-4"
    >
      <h2 className="text-xl font-bold mb-6">
        {isEditMode ? "ویرایش اطلاعات آدرس" : "ثبت آدرس جدید"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BaseInput
          label="عنوان"
          error={errors.title?.message ? [errors.title.message] : undefined}
          {...register("title")}
        />

        <BaseInput
          label="نام گیرنده"
          error={
            errors.receiverName?.message
              ? [errors.receiverName.message]
              : undefined
          }
          {...register("receiverName")}
        />

        <BaseInput
          label="شماره تماس"
          error={errors.phoneNumber && [errors.phoneNumber.message!]}
          {...register("phoneNumber")}
        />

        <BaseInput
          label="کد پستی"
          error={errors.postalCode && [errors.postalCode.message!]}
          {...register("postalCode")}
        />

        <BaseSelect
          label="استان"
          error={errors.province?.message}
          {...register("province")}
        >
          <option value="">انتخاب استان...</option>
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </BaseSelect>

        <BaseSelect
          label="شهر"
          error={errors.city?.message}
          {...register("city")}
        >
          <option value="">انتخاب شهر...</option>
          {availableCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </BaseSelect>
      </div>

      <BaseTextarea
        label="نشانی دقیق پستی"
        rows={4}
        error={errors.fullAddress?.message}
        {...register("fullAddress")}
      />

      <BaseCheckBox {...register("isDefault")} label="تبدیل به آدرس پیشفرض" />

      {success && (
        <BaseMessage variant="success">
          {isEditMode
            ? "آدرس با موفقیت ویرایش شد."
            : "آدرس با موفقیت ذخیره شد."}
        </BaseMessage>
      )}

      <BaseButton type="submit" loading={isSubmitting}>
        {isEditMode ? "اعمال تغییرات" : "ذخیره آدرس"}
      </BaseButton>
    </form>
  );
};

export default AddressForm;

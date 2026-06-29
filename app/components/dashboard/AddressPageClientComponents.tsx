"use client";
import React, { useState } from "react";
import BaseButton from "../BaseComponents/BaseButton";
import { IoIosAddCircleOutline } from "react-icons/io";
import BaseModal from "../BaseComponents/BaseModal";
import AddressForm from "./AddressForm";
import { AddressType } from "@/types";
import AddressCard from "./AddressCard";
import DashboardDefaultContainer from "./DashboardDefaultContainer";
import BaseButtomSheet from "../BaseComponents/BaseBottomSheet";
import EmptyState from "../CommonComponents/EmptyState";
import { CiLocationOn } from "react-icons/ci";

interface Props {
  initialData: AddressType[];
}

const AddressPageClientComponents = ({ initialData }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedAdress, setSelectedAdress] = useState("");

  const onClickOnAddAdress = () => {
    setOpen(true);
    setSelectedAdress("");
  };


  return (
    <DashboardDefaultContainer
      title="لیست آدرس‌ها"
      headerLeftSide={
        <BaseButton
          onClick={onClickOnAddAdress}
          variant="ghost-primary"
          className="hidden! md:flex!"
        >
          <IoIosAddCircleOutline />
          افزودن آدرس جدید
        </BaseButton>
      }
    >
      <div className="hidden md:block">
        <BaseModal isOpen={isOpen} onClose={() => setOpen(false)}>
          <AddressForm
            key={selectedAdress || "new-address"}
            initialData={initialData.find((i) => i.id === selectedAdress)}
          />
        </BaseModal>
      </div>
      <div className="md:hidden">
        <BaseButtomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
          <AddressForm
            key={selectedAdress || "new-address"}
            initialData={initialData.find((i) => i.id === selectedAdress)}
          />
        </BaseButtomSheet>
      </div>
      <div>
        {initialData.length > 0 ? initialData?.map((i) => (
          <AddressCard
            key={i.id}
            id={i.id}
            address={i.title}
            className="mb-4"
            onEdit={() => {
              setOpen(true);
              setSelectedAdress(i.id);
            }}
          />
        ))


 : <EmptyState
            icon={<CiLocationOn size={28} />}
            title="آدرسی یافت نشد"
            description="هنوز آدرسی ثبت نکردی ثبت نکردی. با کلیک روی افزودن آدرس جدید، آدرس مورد نظرت رو اضافه کن."
          />
      }

      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-4 md:hidden">
        <BaseButton className="w-full" onClick={() => setOpen(true)}>
          افزودن آدرس جدید
        </BaseButton>
      </div>{" "}
    </DashboardDefaultContainer>
  );
};

export default AddressPageClientComponents;

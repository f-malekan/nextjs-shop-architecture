import { getUserAddresses } from "@/app/actions/dashboardActions/userAddressesActions";
import AddressPageClientComponents from "@/app/components/dashboard/AddressPageClientComponents";

const ShippingAddressPage = async () => {
  const { data } = await getUserAddresses();

  return (
    <div>
      <AddressPageClientComponents initialData={data ?? []} />
    </div>
  );
};

export default ShippingAddressPage;

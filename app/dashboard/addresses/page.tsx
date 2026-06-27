import { getUserAddresses } from "@/app/actions/dashboardActions/userAddressesActions";
import AddressPageClientComponents from "@/app/components/dashboard/AddressPageClientComponents";

const AddressesPage = async () => {
  const { data, success, message } = await getUserAddresses();

  return <AddressPageClientComponents initialData={data ?? []} />;
};

export default AddressesPage;

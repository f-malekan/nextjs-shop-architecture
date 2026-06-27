import { CiLocationOn, CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteAddress } from "@/app/actions/dashboardActions/userAddressesActions";

interface Props {
  id: string;
  address: string;
  receiverName?: string;
  receiverPhone?: string;
  className?: string;
  onEdit: () => void;
}

const AddressCard = ({
  id,
  address,
  receiverName,
  receiverPhone,
  className,
  onEdit,
}: Props) => {
  const deleteAdress = () => {
    deleteAddress(id);
  };

  return (
    <div
      className={`border border-gray-4 rounded-xl flex justify-between p-4 ${className}`}
    >
      <div>
        <div className="flex gap-2">
          <CiLocationOn />
          <span> {address}</span>
        </div>
        {receiverName && `<CiUser /> ${receiverName}`}
        {receiverPhone && `<CiPhone /> ${receiverPhone}`}
      </div>
      <div>
        <button onClick={onEdit}>
          <CiEdit />
        </button>
        <button onClick={deleteAdress}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default AddressCard;

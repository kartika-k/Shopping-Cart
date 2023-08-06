import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return (
    <div className="cartitem-main border-b-2 p-5 sm:w-[500px] m-5">
      
      
      <div className="flex gap-4 justify-center items-center">

        <div className="cartitem-image w-[510px]">
          <img src={item.image} className=" w-full"/>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className=" font-semibold">{item.title}</h1>
          <h1 className="  font-extralight">
          {item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>

          <div className="flex">
            <p className=" font-extrabold tracking-wide flex-1 text-green-600">${item.price}</p>
            <div className=" bg-red-500 rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer hover:bg-red-400 outline-1"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
};

export default CartItem;

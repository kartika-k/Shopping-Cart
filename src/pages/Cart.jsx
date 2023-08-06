import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0)  );
  },[cart])
  return(
    <div className="flex justify-center items-center p-4 m-5 shadow-2xl shrink">
      {
        cart.length > 0?
        (<div className="flex gap-5 flex-col md:flex-row">
          
          <div className="flex flex-col justify-center items-center">
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

          <div className="cart-desc flex flex-row justify-around md:flex-col md:place-content-around ">

            <div className="flex flex-col">
              <div className=" text-green-600 font-bold">YOUR CART</div>
              <div className=" text-green-500 font-extrabold text-[30px]">SUMMARY</div>
              <p>
                <span className=" font-medium">Total Items:{cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className=" font-semibold">Total Amount:<span className=" font-extrabold">${totalAmount}</span></p>
              <button className=" bg-green-600 hover:bg-green-500 border border-green-400 rounded-md p-1 text-white font-semibold">
                Checkout Now
              </button>
            </div>

          </div>

        </div>):
        (<div className=" flex flex-col gap-5 justify-center items-center">
          <h1 className=" text-[40px] m-3 p-3 rounded-md font-extrabold tracking-wide text-green-700">
            Your Cart is empty
          </h1>
          <Link to="/">
            <button className=" font-bold p-2 m-3 border rounded-lg bg-green-600 text-yellow-50 tracking-wide hover:bg-green-500 outline">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};

export default Cart;

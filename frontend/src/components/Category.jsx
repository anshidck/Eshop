import React from "react";
import { AiOutlineShoppingCart, AiOutlineTrophy } from "react-icons/ai";
import { GrRotateRight } from "react-icons/gr";
import { BsShieldLockFill } from "react-icons/bs";

function Category() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4  justify-between bg-white w-[85%] mx-auto my-10 p-5 rounded items-center">
      <div className="flex items-center gap-2 my-2 col-span-1">
          <div>
            <AiOutlineShoppingCart size={40} color="yellow" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold">Free Shipping</h1>
            <p className="text-xs sm:text-sm">From all order over $100</p>
          </div>
        </div>
        <div className="flex items-center gap-2 col-span-1">
          <div>
            <GrRotateRight size={40} color="yellow" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold">Daily Surprise Offers</h1>
            <p className="text-xs sm:text-sm ">Save up to 25% off</p>
          </div>
        </div>
        <div className="flex items-center gap-2 my-2 col-span-1">
          <div>
            <AiOutlineTrophy size={40} color="yellow" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold">Affortable Prices</h1>
            <p className="text-xs sm:text-sm ">Get factory direct price</p>
          </div>
        </div>
        <div className="flex items-center gap-2 col-span-1">
          <div>
            <BsShieldLockFill className="text-4xl" color="yellow" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold">Secure Payments</h1>
            <p className="text-xs sm:text-sm ">100% Protected Payments</p>
          </div>
        </div>
    </div>
  );
}

export default Category;

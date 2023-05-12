import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

function Footer() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="md:hidden bg-black h-[50px] w-full text-yellow-500 sticky-bottom">
      <ul className="flex justify-evenly p-3">
        <Link to="/">
          <AiFillHome size={25}/>
        </Link>
        <Link >
          <AiFillHeart size={25} />
        </Link>
        <Link to='/faq'>
          <FaQuestionCircle size={25}/>
        </Link>
        <Link  to={user ? `/profile` : "/auth/login"}>
          <BsPersonCircle size={25} />
        </Link>
      </ul>
    </div>
  );
}
export default Footer
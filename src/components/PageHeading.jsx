import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function PageHeading({ title, backPath }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center gap-1">
        <button
          className="outline-none px-2"
          onClick={() => navigate(backPath || "/settings")}
        >
          <FaArrowLeftLong size={22} />
        </button>
        <h1 className="text-[25px] font-medium">{title}</h1>
      </div>
    </>
  );
}

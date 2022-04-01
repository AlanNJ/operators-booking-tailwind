import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import "../index.css";

export const Navbar = () => {
	return (
		<div className="flex w-[100vw] py-3 justify-between border  drop-shadow-lg md:py-4 md:mb-10">
			<div className="flex items-center w-1/2 ">
				<img
					src="./apple.png"
					className="h-14 w-14 rounded-full sm:h-20 sm:w-20 "
				/>
				<i className=" text-xl min-w-max font-bold grow-1 sm:text-3xl md:text-4xl ml-4">
					Apple lnc
				</i>
			</div>
			<div className="flex items-center  justify-center">
				<CgProfile className="w-10 h-10 sm:w-15 sm:h-30" />
				<div className="ml-2">
					<h1 className=" text-xl sm:text-2xl">Alan</h1>
				</div>
				<IoMdArrowDropdown className="w-10 h-10 dropdown-toogle" />
			</div>
		</div>
	);
};
export default Navbar;

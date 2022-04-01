import React from "react";
import { GrHomeRounded, GrUserWorker } from "react-icons/gr";
import { CgTrack } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "../index.css";

export const Header = () => {
	return (
		<div className="text-sm sm:text-xl style-none bg-white w-[100vw] h-[50px] sm:h-[70px] sm:py-3 rounded-md text-gray-600 flex justify-between fixed left-0 bottom-0 lg:h-[5vh]">
			<div className=" border w-1/5 min-h-fit flex flex-col justify-center items-center">
				<GrHomeRounded />
				<i>Home</i>
			</div>
			<div className="flex w-1/5  border flex-col justify-center items-center">
				<GrUserWorker />
				<i className="m-0">Operators</i>
			</div>
			<div className="flex w-1/5 border flex-col justify-center items-center">
				<GoLocation />
				<i>Location</i>
			</div>
			<div className="flex w-1/5 border flex-col justify-center items-center">
				<AiOutlineMessage />
				<i>Messages</i>
			</div>
			<div className="flex w-1/5 border flex-col justify-center items-center">
				<CgTrack />
				<i>Tracking</i>
			</div>
		</div>
	);
};
export default Header;

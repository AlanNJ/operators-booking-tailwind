import React from "react";

export const Card = () => {
	return (
		<div className="w-[90vw] sm:w-[80vw] md:w-[95vw] md:h-[15vh] bg-white h-1/3 shadow border-none flex flex-col justify-center  md:flex-row md:justify-between items-center mt-10 border-solid border-2 border-indigo-600 rounded-lg h-auto md:h-[9vh] lg:h-[9vh] 2xl:h-[9vh]">
			<img
				src="apple.png"
				className="w-1/5 h-1/5 rounded-full border-black md:w-[64px] md:h-[64px]"
			/>
			<div className="mr-5">
				<p className="text-lg font-bold pt-2 sm:text-3xl md:text-sm">
					HKSFHSF559IF
				</p>

				<span className="text-[#a21caf] sm:text-2xl">Birthday Gift</span>
			</div>

			<div className="leading-4 flex flex-col justify-start mt-5 mb-2 md:mt-0 md:mx-0 md:items-center md:m-0">
				<p className="sm:text-2xl">Alan Neupane</p>

				<p className="text-gray-600 text-xs sm:text-xl">Operator Name</p>
			</div>
			<div className="leading-4 flex flex-col justify-center items-start mb-2 md:mb-0 md:items-center">
				<p className="sm:text-2xl">3 days Left</p>

				<p className="text-gray-600 text-xs sm:text-xl">Time Remaining</p>
			</div>
			<div className="leading-4 flex flex-col justify-start mb-2 md:mb-0 md:items-center">
				<p className="sm:text-2xl">Alan Neupane</p>

				<p className="text-gray-600 text-xs sm:text-xl">Active</p>
			</div>
		</div>
	);
};
export default Card;

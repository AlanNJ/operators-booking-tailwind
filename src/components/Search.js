import React from "react";

export const Search = () => {
	return (
		<div>
			<h1 className="text-center text-2xl my-10  font-bold sm:text-5xl sm:my-15 ">
				Tracking Links (4)
			</h1>
			<div className="flex justify-center sm:w-full 2xl:items-center mb-20">
				<input
					placeholder="Enter your name"
					className="px-2 h-10 w-[60vw] sm:w-[70vw] sm:h-[60px] rounded-lg shadow"
				/>
				<button className="mx-2 h-10 text-center text-xs bg-[#0086fd] hover:bg-blue-700 text-white font-bold py-2 px-3 rounded sm:h-[60px] sm:py-0 sm:px-10 sm:text-xl min-w-fit">
					Search Links
				</button>
			</div>
		</div>
	);
};
export default Search;

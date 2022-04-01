import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Main from "./components/Main";
function App() {
	return (
		<div className="flex flex-col h-[120vh] w-screen items-center border-solid bg-[#f4f4f4]">
			<Navbar />
			<div className="lg:flex-row lg:w-full">
				<Header />
				<div>
					<Search />
					<Main />
					<Main />
				</div>
			</div>
		</div>
	);
}

export default App;

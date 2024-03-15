import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header className="py-4 ">
			{/* flex flex-row max-sm:flex-col max-sm:px-8 px-14 py-12 justify-between  */}
			<nav className="flex justify-between items-center md:px-14 md:py-12 w-[92%] mx-auto">
				<div className="text-4xl font-light items-center flex italic">
					<span className="font-extrabold not-italic">XYZ </span>
					&nbsp;INDUSTRIES
				</div>
				<ul className="rounded-full max-sm:hidden max-md:hidden flex bg-regal-blue items-center justify-between text-nav-li text-[16px] leading-[18px] font-normal w-2/5 px-6 py-6">
					<li className="cursor-pointer">Home</li>
					<li className="cursor-pointer">About Us</li>
					<li className="cursor-pointer">Property</li>
					<li className="cursor-pointer">Services</li>
					<li className="cursor-pointer">Contact</li>
				</ul>
				<div className="flex gap-6 max-sm:hidden max-md:hidden items-center">
					<button className="text-xl leading-5 text-regal-blue p-4 border border-regal-blue bg-white rounded-full">
						Sign Up
					</button>
					<button className="text-xl leading-5  text-white p-4 border border-regal-blue bg-btn-blue rounded-full">
						Sign In
					</button>
				</div>
				<div
					className={`nav-links md:hidden duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
						isMenuOpen ? 'top-[12%]  bg-white' : '-top-full'
					} md:w-auto w-full flex items-center px-5`}>
					<ul className="flex md:flex-row  text-lg flex-col md:items-center md:gap-[4vw] gap-8">
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline "
								href="##1">
								Home
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								About Us
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Property
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Services
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Contact
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Sign Up
							</a>
						</li>
						<li>
							<a
								className="transition duration-1000 ease-in-out cursor-pointer hover:underline"
								href="##1">
								Sign In
							</a>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-6">
					<FaBars
						name={isMenuOpen ? 'close' : 'menu'}
						onClick={toggleMenu}
						className="text-3xl text-black cursor-pointer md:hidden"
					/>
				</div>
			</nav>
		</header>
	);
}

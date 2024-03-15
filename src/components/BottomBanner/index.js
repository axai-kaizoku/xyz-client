import CustomBtn from '../CustomBtn';

export default function BottomBanner() {
	return (
		<div className="relative w-full my-10 mt-14">
			<img
				src="/og-banner-back.png"
				alt="btm"
				className="w-full"
			/>
			<div className=" absolute inset-0 z-10  flex flex-col  items-center">
				<h2 className="font-extrabold max-sm:text-3xl text-7xl z-2 max-sm:py-3 py-10 text-regal-blue text-center">
					YOUR <span className="italic font-semibold">TRUSTED</span> PARTNER IN
					<br />
					THE FUTURE
					<span className="italic font-semibold">OF HOUSING</span>
				</h2>
				<p className="font-normal sm:w-[60%] max-sm:text-sm text-xl text-center max-sm:pb-3 pb-10">
					Our partnerships with governments and local banks ensure that our
					housing prices are affordable enough for our target market.
				</p>
				<CustomBtn title="Join Our Community Today" />
			</div>
		</div>
	);
}

import DetailBox from '../DetailBox';

export default function DetailsSection() {
	return (
		<div className="w-full bg-detail-bg mt-10">
			<h2 className="text-regal-blue max-sm:text-6xl text-7xl font-bold text-center mt-8 mb-0">
				WHY CHOOSE XYZ?
			</h2>
			<div className="w-full flex items-center mb-20 justify-center">
				<div className="w-[94%] max-sm:gap-3 gap-10 sm:flex-wrap flex max-sm:flex-col items-center justify-center ">
					<DetailBox
						num="01"
						title="SEARCH AND FILTERS"
						description="Tailored Searches to meet your needs. Find what you’re looking for
					with precision."
					/>
					<div className="mt-28 max-sm:mt-0">
						<DetailBox
							num="02"
							title="DETAILED LISTINGS"
							description="Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications."
						/>
					</div>
					<div className="mt-56 max-sm:mt-0">
						<DetailBox
							num="03"
							title="DIRECT MESSAGING"
							description="
							Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions."
						/>
					</div>
					<div className="mt-28 max-sm:mt-0">
						<DetailBox
							num="04"
							title="SECURE PAYMENTS"
							description="
							Trust in Every Transaction. Our secure payment system ensures your peace fo mind."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

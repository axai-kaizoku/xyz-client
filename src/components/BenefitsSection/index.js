import BenefitCard from '../BenefitCard';

export default function BenefitsSection() {
	return (
		<div className="w-full mt-16">
			<h2 className="text-center max-sm:text-6xl font-extrabold text-7xl leading-[80px] text-regal-blue">
				HOW IT WORKS?
			</h2>
			<p className="text-center my-10 font-normal max-sm:text-base text-xl leading-[24px] text-regal-blue">
				Step by Step Guide
			</p>
			<div className="flex flex-col justify-center items-center w-full ">
				<div className="flex flex-col items-center max-sm:gap-1 gap-10 justify-center w-4/5 max-sm:w-11/12">
					<BenefitCard
						title="Discover Your Perfect Home"
						description="Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right."
						src="/benefits-1.png"
						align="left"
					/>
					<BenefitCard
						title="Showcase Your Property"
						description="List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly."
						src="/benefits-2.png"
						align="right"
						border="border-custom-border border"
					/>
					<BenefitCard
						title="Connect and Communicate"
						description="Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward."
						src="/benefits-3.png"
						align="left"
					/>
					<BenefitCard
						title="Seal the Deal Securely"
						description="Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property."
						src="/benefits-4.png"
						align="right"
					/>
				</div>
			</div>
		</div>
	);
}

export default function BenefitCard({
	title,
	description,
	src,
	align,
	border = '',
}) {
	return (
		<div
			className={`w-11/12 max-sm:w-full gap-14 max-sm:gap-4 max-sm:flex-row flex text-regal-blue/70 ${
				align === 'right' ? 'flex-row-reverse' : ''
			}`}>
			<div className="w-[320px] h-[320px] max-sm:w-[220px] max-sm:h-[220px] rounded-3xl flex items-center justify-center overflow-hidden ">
				<img
					src={src}
					alt="benefit"
					className={`object-contain ${border} rounded-3xl`}
				/>
			</div>
			<div
				className={`flex items-center max-sm:text-left ${
					align === 'right' ? 'text-right' : ''
				}`}>
				<div className="flex flex-col max-sm:gap-1 max-sm:text-sm gap-4 w-full ">
					<h2 className="font-semibold text-4xl max-sm:text-2xl">{title}</h2>
					<p>{description}</p>
					<p className="cursor-pointer underline underline-offset-4">
						Learn More
					</p>
				</div>
			</div>
		</div>
	);
}

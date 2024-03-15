import './styles.css';
export default function DetailBox({ num, title, description }) {
	return (
		<div className="w-[260px] max-sm:h-80 h-[400px] flex gap-4 ">
			<div>
				<div className="top"></div>
				<div className="bottom"></div>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex flex-col max-sm:mb-8 mb-20 justify-between ">
					<h2 className="max-sm:text-[70px] text-[80px] font-light">{num}</h2>
					<p className="font-semibold max-sm:text-base text-lg pb-6">{title}</p>
					<div className="w-4 h-4 rounded bg-detail-rec"></div>
				</div>
				<p className="max-sm:text-sm">{description}</p>
			</div>
		</div>
	);
}

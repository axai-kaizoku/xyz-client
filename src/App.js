import BenefitsSection from './components/BenefitsSection';
import BottomBanner from './components/BottomBanner';
import DetailsSection from './components/DetailsSection';
import HeroBanner from './components/HeroBanner';
import HeroImage from './components/HeroImage';
import Layout from './components/Layout';

function App() {
	return (
		<Layout className="text-center text-4xl font-light">
			<div className="w-full flex items-center my-4 justify-center">
				<HeroBanner />
			</div>
			<div className="w-full h-fit flex items-center my-4 justify-center">
				<HeroImage />
			</div>
			<div className="w-full flex items-center my-4 justify-center">
				<BenefitsSection />
			</div>
			<div className="w-full flex items-center my-4 justify-center">
				<DetailsSection />
			</div>
			<div className="w-full flex items-center my-4 justify-center">
				<BottomBanner />
			</div>
		</Layout>
	);
}

export default App;

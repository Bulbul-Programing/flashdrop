import AboutUs from '@/components/modules/Home/AboutUs';
import Banner from '@/components/modules/Home/Banner';
import CostCalculator from '@/components/modules/Home/CostCalculator';
import FAQ from '@/components/modules/Home/FAQ';
import LogisticsHighlights from '@/components/modules/Home/LogisticsHighlights';
import OurService from '@/components/modules/Home/OurService';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <CostCalculator />
            <LogisticsHighlights />
            <OurService />
            <FAQ />
        </div>
    );
};

export default HomePage;
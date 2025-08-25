import AboutUs from '@/components/modules/Home/AboutUs';
import Banner from '@/components/modules/Home/Banner';
import CostCalculator from '@/components/modules/Home/CostCalculator';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <CostCalculator />
        </div>
    );
};

export default HomePage;
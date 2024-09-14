import { RoundedCarousel } from '@/widgets/carousel';
import { Header } from '@/widgets/header';
import { Calendar } from '@/widgets/calendar';
import { Achievements } from '@/widgets/achivments';
import { Footer } from '@/widgets/footer';

export const HealthPage = () => {
  return(
    <>
      <Header pageName="Здоровье"/>
      <div className='pageContainer'>
        <div className="gridContainer">
            <Calendar/>
            <Achievements/>
            <RoundedCarousel/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
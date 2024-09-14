import { RoundedCarousel } from '@/widgets';
import { Header, Calendar, Achievements, Footer } from '@/widgets';

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
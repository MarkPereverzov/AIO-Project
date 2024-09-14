import { RoundedCarousel } from '@/widgets';
import { Header, Calendar, Achievements, Footer } from '@/widgets';

export const HealthPage = () => {
  return(
    <div className='pageContainer'>
      <Header pageName="Здоровье"/>
      <div className="gridContainer">
          <Calendar/>
          <Achievements/>
          <RoundedCarousel/>
      </div>
      <Footer/>
    </div>
  );
}
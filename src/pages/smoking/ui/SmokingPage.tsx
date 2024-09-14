import { RoundedCarousel } from '@/widgets';
import { Header, Calendar, Achievements, Footer } from '@/widgets';

export const SmokingPage = () => {
  return(
    <>
      <Header pageName="Курение"/>
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
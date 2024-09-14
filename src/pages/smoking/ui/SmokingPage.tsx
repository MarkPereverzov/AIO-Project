'use client';
import { RoundedCarousel } from '@/widgets/carousel';
import { Calendar } from '@/widgets/calendar';
import { Achievements } from '@/features/statistic';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { HealthCompleteStatistic } from '@/features/statistic';


export const SmokingPage = ({completeStatistic}: {completeStatistic: HealthCompleteStatistic}) => {
  return(
    <>
      <Header pageName="Курение"/>
      <div className='pageContainer'>
        <div className="gridContainer">
            <Calendar/>
            <Achievements completeStatistic={completeStatistic}/>
            <RoundedCarousel/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
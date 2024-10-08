'use client';
import { RoundedCarousel } from '@/widgets/carousel';
import { Calendar } from '@/widgets/calendar';
import { Achievements } from '@/features/statistic';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Subscribe } from '@/features/subscribe';
import { PlayModal } from '@/features/playModal';
import { CompleteStatDto, HealthRecordDto } from '@/shared/models';

interface SmokingPageProps {
  completeStatistic: CompleteStatDto | null,
  records: HealthRecordDto[] | null,
}

export const SmokingPage = ({completeStatistic, records}: SmokingPageProps) => {
  return(
    <>
      <Header pageName="Курение"/>
      <div className='pageContainer'>
        <div className="gridContainer">
            <Calendar records={records} />
            <Achievements completeStatistic={completeStatistic}/>
            <RoundedCarousel/>
        </div>
        <Footer>
          <Subscribe/>
          <PlayModal />
        </Footer>
      </div>
    </>
  );
}
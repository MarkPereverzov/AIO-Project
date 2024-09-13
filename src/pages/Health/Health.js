import {Header, Carousel, Calendar, Slider, Footer} from '../../widgets/index';

export default function Health () {
    return(
        <div className='page-container'>
            <Header namePage="Главная"/>
            <div className="grid-container">
                <Calendar></Calendar>
                <Slider></Slider>
                <Carousel></Carousel>
            </div>
            <Footer/>
        </div>
    );
}
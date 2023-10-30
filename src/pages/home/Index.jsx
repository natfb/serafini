import History from './History';
import Hero from './HeroSection';
import Caroulsel from './Carousel';
import SectionAnimation from '../../components/SectionWithAnimation'
import '../../index.css'

const Home = () => {
    return (
        <>
            <Hero />
            
            <SectionAnimation>              
                <Caroulsel />
            </SectionAnimation>
            
            <SectionAnimation>         
                <History />
            </SectionAnimation>
        </>
    )
}

export default Home;
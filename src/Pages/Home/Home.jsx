import Hero from "./Banner/Hero";
import HomeBg from '../../assets/Rectangle 1.png'


const Home = () => {
 
    return (
        <div style={{ backgroundImage: `url(${HomeBg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh' }}>
            <Hero></Hero>
        </div>
    );
};

export default Home;

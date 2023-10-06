import bannerImg from '../assets/female.jpg'
import bannerImgtwo from '../assets/party.jpg'
import { HiGift } from 'react-icons/hi';


const Banner = () => {
    return (
        <div>
            

            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full" style={{backgroundImage:`url(${bannerImg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
    <div className="h-52 md:h-[85vh] bg-black bg-opacity-80 w-full" >
        <div className='flex justify-center mt-10 md:mt-16 lg:mt-10'>
        <p className='text-3xl md:text-7xl lg:text-9xl font-bold text-white'><span><HiGift className='text-pink-500'/></span> We Plan The <br /> Best <span className='text-pink-500'>Event</span></p>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-outline">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full" style={{backgroundImage:`url(${bannerImgtwo})`, backgroundSize:'cover' , backgroundPosition:'center' }}>
  <div className="h-52 md:h-[85vh] bg-black bg-opacity-80 w-full flex justify-center items-center" >
        <div className=' text-center m-5'>
        <h1 className='text-3xl md:text-7xl font-bold text-white'>Plan your perfect <span className='text-pink-500'>Event</span>, <br /> every time</h1>
        <h1 className='text-3xl md:text-7xl font-bold text-white'>We make your <span className='text-pink-500'>Events</span> memorable</h1>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-outline">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
    </div>
  </div> 
</div>


        </div>
    );
};

export default Banner;
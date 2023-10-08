import bg from '../../assets/wepik.jpeg'
import female from '../../assets/female.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
        <div className="h-72 md:h-[60vh]" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center'}}>
            <h1 className="h-full w-full bg-black bg-opacity-80 text-white text-3xl md:text-5xl lg:text-7xl font-semibold flex justify-center items-center"><span className="text-pink-500">About</span> Us</h1>
        </div>
        <h1 className='md:text-2xl my-5 px-2 md:px-10 font-semibold'><span className='text-pink-500 text-3xl'>Event Zilla</span> is a full-service event management company that specializes in planning and executing unforgettable events of all sizes. We have over 20 years of experience in the industry, and our team of experienced event planners is passionate about creating events that exceed our clients expectations.</h1>
        
        <div className='grid lg:grid-cols-2 gap-6 px-2 md:px-10'>
            <img data-aos="fade-up" className='' src={female} alt="" />
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold flex-grow'>We offer a wide range of <span className='text-pink-500'>event management services</span>, including:</h1>
              <li className='font-semibold md:text-xl flex-grow'>Venue selection and booking</li>
              <li className='font-semibold md:text-xl flex-grow'>Catering</li>
              <li className='font-semibold md:text-xl flex-grow'>Audio/visual services</li>
              <li className='font-semibold md:text-xl flex-grow'>Speaker and entertainment booking</li>
              <li className='font-semibold md:text-xl flex-grow'>Transportation</li>
              <li className='font-semibold md:text-xl flex-grow'>Registration and ticketing</li>
              <li className='font-semibold md:text-xl flex-grow'>On-site management</li>
              
             
            </div>
        </div>

        <h1 className='md:text-2xl my-5 px-2 md:px-10 font-semibold'>We take the time to understand each of our clients unique needs and goals, and we work closely with them to develop a custom event plan that meets their budget and objectives. We are committed to providing our clients with a stress-free event planning experience, and we take care of every detail so that they can relax and enjoy their event.</h1>

        <h1 className='md:text-2xl my-10 px-2 md:px-10 text-center'>Why Choose <span className='text-pink-500 text-3xl font-semibold'>Event Zilla</span>?</h1>

        <h1 className='md:text-2xl my-5 px-2 md:px-10 font-semibold'>There are many reasons why you should choose <span className='text-pink-500 text-3xl font-semibold'>Event Zilla</span> for your next event. Here are just a few:</h1>
        

<div className='grid gap-4 mx-2 md:mx-10 md:grid-cols-3'>
<div data-aos="fade-up" className="card  bg-base-100 image-full">
  <figure><img src={bg} /></figure>
  <div className="card-body">
    <p>We have a proven track record of success. We have successfully planned and executed hundreds of events of all sizes, from small corporate gatherings to大型国际会议。</p>
  </div>
</div>
<div data-aos="fade-up" className="card  bg-base-100 image-full">
  <figure><img src={bg} /></figure>
  <div className="card-body">
    <p>We have a team of experienced and knowledgeable event planners. Our team is made up of seasoned professionals who have a deep understanding of the event industry.</p>
  </div>
</div>
<div data-aos="fade-up" className="card bg-base-100 image-full">
  <figure><img src={bg} /></figure>
  <div className="card-body">
    <p>We offer a wide range of event management services. We can handle everything from venue selection and booking to catering and transportation.</p>
  </div>
</div>
</div>

<h1 className='md:text-2xl my-10 px-2 md:px-10 text-center font-bold'>Contact Us Today</h1>
<h1 className='md:text-2xl my-5 px-2 md:px-10 font-semibold'>If you are planning an event of any size, we encourage you to contact <span className='text-pink-500 text-3xl font-semibold'>Event Zilla</span> today. We would be happy to discuss your needs and develop a custom event plan that meets your budget and objectives.</h1>

        </>
        
    );
};

export default About;
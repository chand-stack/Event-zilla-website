import bg from '../../assets/wepik.jpeg'
import { FaMapMarkerAlt,FaPhoneAlt } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { FaEarthAmericas } from 'react-icons/fa6';
const Contact = () => {
    return (
        <>
        <div className="h-72 md:h-[60vh]" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center'}}>
            <h1 className="h-full w-full bg-black bg-opacity-80 text-white text-3xl md:text-5xl lg:text-7xl font-semibold flex justify-center items-center"><span className="text-pink-500">Contact</span> Us</h1>
        </div>

<div className='bg-black flex flex-col-reverse lg:flex-row'>

        <div className='bg-black text-white flex my-10 flex-col flex-grow'>
            <div className='flex gap-1 border-b flex-grow'>
                <FaMapMarkerAlt className='text-2xl text-pink-500'></FaMapMarkerAlt>
                <div>
                    <h1 className='text-2xl'>Address</h1>
                    <p className='font-semibold'>Tulare, Calfornia, USA</p>
                </div>
            </div>
            <div className='flex gap-1 border-b flex-grow'>
                <FaPhoneAlt className='text-2xl text-pink-500'></FaPhoneAlt>
                <div>
                    <h1 className='text-2xl'>Phone</h1>
                    <p className='font-semibold'>415+ 123458965</p>
                </div>
            </div>
            <div className='flex gap-1 border-b flex-grow'>
                <SiMinutemailer className='text-2xl text-pink-500'></SiMinutemailer>
                <div>
                    <h1 className='text-2xl'>Email</h1>
                    <p className='font-semibold'>info@email.com</p>
                </div>
            </div>
            <div className='flex gap-1 border-b flex-grow'>
                <FaEarthAmericas className='text-2xl text-pink-500'></FaEarthAmericas>
                <div>
                    <h1 className='text-2xl'>WEBSITE</h1>
                    <p className='font-semibold'>www.eventzilla.com</p>
                </div>
            </div>

        </div>

        <div className=" bg-black  p-3 border-2 border-black my-5 mx-1 md:mx-auto lg:w-3/6 md:w-4/5">
  <div className=" flex-col ">
    <div className="my-2">
      <h1 className="text-5xl font-bold text-pink-500"><span className="text-white">Get In</span> Touch!</h1>
    </div>
    <div className="card flex-shrink-0 w-full  bg-black">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-bold text-white">Name</span>
          </label>
          <input type="name" 
          placeholder="Your Name" 
          name="name"
          className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-bold text-white">Email</span>
          </label>
          <input type="email" 
          placeholder="Your Email" 
          name="email"
          className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-bold text-white">Your Message</span>
          </label>
          <input type="text" 
          placeholder="Your Message Here" 
          name="message"
          className="input input-bordered py-10" />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary bg-pink-500 text-white font-bold border-none">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>

</div>
        
        </>
    );
};

export default Contact;
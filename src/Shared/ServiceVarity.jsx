import bg from '../assets/wepik.jpeg'
import { RiPhoneFindFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { BiSolidParty } from "react-icons/bi";
import { FaPeopleRobbery } from "react-icons/fa6";


const ServiceVarity = () => {
    return (
        <>
        <div className="h-fit mt-10" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center'}}>
            <div className="h-full w-full bg-black bg-opacity-80 text-white font-semibold">
                <h1 className='text-center py-5 text-2xl md:text-4xl font-bold'>Our Working Process</h1>

<div className='grid grid-cols-1 my-4 md:grid-cols-2 lg:grid-cols-4 p-7'>
    <div className=''>
        <RiPhoneFindFill className='text-7xl mx-auto text-pink-500'/>
        <p className='text-2xl text-center'>Find The Perfect Venue <br />
For Free</p>
    </div>
    <div className=''>
        <IoIosPeople className='text-7xl mx-auto text-pink-500'/>
        <p className='text-2xl text-center'>Connect with the best <br />
vendor</p>
    </div>
    <div className=''>
        <BiSolidParty className='text-7xl mx-auto text-pink-500'/>
        <p className='text-2xl text-center'>Let us help you with <br />
the event</p>
    </div>
    <div className=''>
        <FaPeopleRobbery className='text-7xl mx-auto text-pink-500'/>
        <p className='text-2xl text-center'>Enjoy the party with <br />
your friends</p>
    </div>
</div>

            </div>
        </div>

        </>
    );
};

export default ServiceVarity;
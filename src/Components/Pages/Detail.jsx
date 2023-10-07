import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bg from '../../assets/wepik.jpeg'
import { BsFileArrowDownFill } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Detail = () => {
    const[detail,setDetail] = useState({})

    const data = useLoaderData()
    const params = useParams()
    const newData = data.find(item => parseInt(item.id)===parseInt(params.id))

    useEffect(()=>{
        setDetail(newData)
    },[newData])
    
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
        <div className="h-72 md:h-[60vh]" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center'}}>
            <h1 className="h-full w-full bg-black bg-opacity-80 text-white text-3xl md:text-5xl lg:text-7xl font-semibold flex justify-center items-center"><span className="text-pink-500">{detail.name}</span>  Event Details</h1>
        </div>
        <div className="flex flex-col-reverse md:flex-col">
            <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="md:h-[400px] mx-auto my-3" src={detail.image} alt="" />
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="space-y-3 px-1 md:px-5">
                <p className="text-2xl font-semibold text-center md:w-4/5 mx-auto">{detail.short_detail}</p>
                <p className="flex items-center gap-3 text-xl text-pink-500 font-bold justify-center">The Services We Will Provide <BsFileArrowDownFill/></p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_1}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_2}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_3}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_4}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_5}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_6}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_7}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_8}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_9}</p>
                <p className="font-semibold flex items-center gap-2"><TiTick className="text-pink-500 text-2xl"/>{detail.service_10}</p>
            </div>
        </div>
        </>
    );
};

export default Detail;
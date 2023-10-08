import bg from '../../assets/wepik.jpeg'
import wedding from '../../assets/wepik-export-20231007091627LT3X.jpeg'
import bday from '../../assets/wepik-export-20231007092627E6zs.jpeg'

const Blog = () => {
    return (
        <>
        <div className="h-72 md:h-[60vh]" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center'}}>
            <h1 className="h-full w-full bg-black bg-opacity-80 text-white text-3xl md:text-5xl lg:text-7xl font-semibold flex justify-center items-center"><span className="text-pink-500">Blo</span>gs</h1>
        </div>

        <h1 className='text-2xl md:text-4xl font-bold mt-10'>Crafting Unforgettable Wedding Events: A Guide to Exceptional Event Management</h1>

        <div className='grid md:grid-cols-2 mt-5'>
        <img className='md:h-96 mx-auto' src={wedding} alt="" />
        <div className='text-xl space-y-5'><p>Weddings are magical celebrations that mark the beginning of a beautiful journey for couples in love. As an event management company, we understand the significance of curating an unforgettable wedding experience for the bride, groom, and their cherished guests. Each wedding is a unique tapestry of dreams, emotions, and intricate details that need to be woven seamlessly to create a perfect day. In this guide, we will walk you through the art of event management that transforms dreams into reality for the most special day of a couples life.</p>
        <p>Every couple has a unique vision for their wedding day, often shaped by their personalities, cultural background, and personal preferences. Event managers must begin by having a detailed conversation with the couple to understand their vision, preferences, and expectations for the event. This initial step sets the foundation for the entire planning process.</p>
        </div>
        </div>
        <p className='text-xl mt-3'>Budgeting is a vital aspect of wedding event management. Establishing a clear and realistic budget in alignment with the couples vision is crucial. It involves breaking down the costs associated with venue selection, catering, decor, entertainment, photography, and other essential elements of a wedding. Balancing the couples desires with financial constraints ensures a well-managed event without compromising on the quality and experience.</p>


        <h1 className='text-2xl md:text-4xl font-bold mt-10'>Creating Unforgettable Birthday Celebrations: A Comprehensive Guide to Exceptional Event Management</h1>

        <div className='grid md:grid-cols-2 mt-5'>
        <div className='text-xl space-y-5'><p>Birthdays are milestones that deserve to be celebrated in style. As an event management company, we understand the significance of curating a memorable birthday event that reflects the individuality and joy of the person being celebrated. Each birthday celebration is a unique canvas of desires, themes, and personal touches that need to be thoughtfully organized to create a perfect day. In this guide, we will walk you through the art of event management, transforming birthdays into unforgettable experiences.</p>
        <p>Just like weddings, birthdays are deeply personal and carry a unique vision for the individual celebrating. It could be a grand extravaganza, an intimate gathering, a themed costume party, or a relaxing day spent with loved ones. Event managers must engage in in-depth conversations with the birthday person to understand their vision, preferences, and expectations for the event.</p>
        </div>
        <img className='md:h-96 mx-auto' src={bday} alt="" />
        </div>
        <p className='text-xl mt-3'>Budgeting is a fundamental aspect of successful birthday event management. It's essential to establish a clear and realistic budget that aligns with the vision while considering factors like venue selection, catering, decor, entertainment, gifts, and other critical elements of a birthday celebration. Striking a balance between the birthday persons desires and financial constraints ensures a well-managed event that leaves a lasting impression.</p>
        </>
    );
};

export default Blog;
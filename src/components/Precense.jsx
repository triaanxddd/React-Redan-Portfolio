import Laptop from '../assets/laptop.jpg'

const Presence = () => {
    
    return (
        <div className="bg-white">
            <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px]' src={Laptop} alt="" />
                <div className='flex flex-col justify-center'>
                    <h2 className='text-red-900 font-bold text-3xl'>We serve you like our parents</h2>
                    <p className='text-red-900 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit fugiat incidunt cum magni dolorem a facilis ad inventore nisi tenetur sequi voluptatibus, eaque, quidem pariatur sit rerum iure magnam animi in dolores libero, illum quam. Voluptas aspernatur dolorem explicabo quaerat distinctio doloribus voluptatum facere ducimus culpa quibusdam, ab recusandae in?</p>
                    <button className='bg-rose-700 w-[148px] text-white py-3 px-6 rounded-md font-bold hover:bg-rose-500 mt-3'>Get Started </button>
                </div>
                
            </div>
        </div>
    );
};
export default Presence;
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
    
    return (
        <div className="w-full max-w-[1280px] py-12 mx-auto grid md:grid-cols-3 mt-3 gap-4">
            <div className="bg-red-400 text-white shadow-xl py-4 text-center rounded-md hover:scale-110 duration-300">
                <img src={Single} className='w-20 mx-auto' alt="/" />
                <h1 className='text-yellow-200 text-2xl font-bold'>Single Choice</h1>
                <p className='text-2xl font-bold'>$50</p>
                <div className='text-xl font-medium'>
                    <p className='py-2 border-b'>500 GB SSD Storage</p>
                    <p className='py-2 border-b'>8 gb RAM</p>
                    <p className='py-2'>4Ghz CPU</p>
                </div>
                <button className='bg-rose-700 w-[200px] text-white px-6 py-3 rounded-md font-medium hover:bg-rose-500 mt-2 md:mt-0'>Start Now</button>

            </div>
            <div className="bg-slate-500 text-white shadow-xl py-4 text-center rounded-md hover:scale-110 duration-300">
                <img src={Double} className='w-20 mx-auto' alt="/" />
                <h1 className='text-yellow-200  text-2xl font-bold'>Double Choice</h1>
                <p className='text-2xl font-bold'>$100</p>
                <div className='text-xl font-medium'>
                    <p className='py-2 border-b'>1 TB SSD Storage</p>
                    <p className='py-2 border-b'>16 gb RAM</p>
                    <p className='py-2'>8Ghz CPU</p>
                </div>
                <button className='bg-rose-700 w-[200px] text-white px-6 py-3 rounded-md font-medium hover:bg-rose-500 mt-2 md:mt-0'>Start Now</button>
            </div>
            <div className="bg-red-400 text-white shadow-xl py-4 text-center rounded-md hover:scale-110 duration-300">
                <img src={Triple} className='w-20 mx-auto' alt="/" />
                <h1 className='text-yellow-200 text-2xl font-bold'>Triple Choice</h1>
                <p className='text-2xl font-bold'>$150</p>
                <div className='text-xl font-medium'>
                    <p className='py-2 border-b'>2 TB SSD Storage</p>
                    <p className='py-2 border-b'>32 gb RAM</p>
                    <p className='py-2'>16Ghz CPU</p>
                </div>
                <button className='bg-rose-700 w-[200px] text-white px-6 py-3 rounded-md font-medium hover:bg-rose-500 mt-2 md:mt-0'>Start Now</button>
            </div>

        </div>
    );
};
export default Cards;
import {ReactTyped }from "react-typed";

const Hero = () => {
    
    return (
      <div className='w-full bg-gradient-to-r from-red-600 to-red-300'>
            <div className="max-w-[800px] h-screen mx-auto text-center text-white">
                <div className="pt-[20rem]">
                    <span className="text-yellow-200 font-medium text-2xl">Clear your mind</span>
                    <div className="flex justify-center items-center text-2xl lg:text-6xl md:text-4xl">
                        <h1 className="font-bold">Your future is </h1> 
                        <ReactTyped className="font-bold ml-2 lg:ml-4" strings={["bright", "near", "yourself"]} typeSpeed={40}
                        backSpeed={50} loop/>
                    </div>
                    <p className="md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iusto.</p>
                    <button className='bg-rose-700 py-3 px-6 rounded-md font-bold hover:bg-rose-500 mt-3'>Get Started </button>
                </div>

            </div>
      </div>
        
    );
};
export default Hero;
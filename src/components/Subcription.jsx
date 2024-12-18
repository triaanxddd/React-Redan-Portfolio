const Subcription = () => {
    
    return (
        <div className="w-full bg-gradient-to-r from-red-600 to-red-300 text-white mt-2">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-24">
                <div className="text-center">
                    <h1 className="text-xl lg:text-3xl md:text-2xl font-bold">Connect with us for more information</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="mx-3">
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full">
                        <input className="p-3 flex w-full rounded-md mr-2 text-black" type="email" placeholder="email" />
                        <button className='bg-rose-700 w-[200px] text-white px-6 py-3 rounded-md font-medium hover:bg-rose-500 mt-2 md:mt-0'>Send Email </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Subcription;
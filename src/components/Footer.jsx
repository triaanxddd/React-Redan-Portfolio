import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    
    return (
        <div className="w-full bg-rose-700 text-white py-6 ">
            <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
                <h2 className="text-2xl font-bold mb-2">REDAN.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, numquam.</p>
                <div className="flex justify-between w-[50%]">
                    <FaFacebookSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaDribbbleSquare size={30}/>
                    <FaGithubSquare size={30}/>
                </div>
                <div className='flex justify-between gap-3'>
                    <div>
                        <h6 className='font-bold'>Career</h6>
                        <ul>
                            <li>Experience</li>
                            <li>Rating</li>
                            <li>Users</li>
                            <li>Customers</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold'>Analytics</h6>
                        <ul>
                            <li>Experience</li>
                            <li>Rating</li>
                            <li>Users</li>
                            <li>Customers</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold'>Supports</h6>
                        <ul>
                            <li>Experience</li>
                            <li>Rating</li>
                            <li>Users</li>
                            <li>Customers</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold'>Legal</h6>
                        <ul>
                            <li>Experience</li>
                            <li>Rating</li>
                            <li>Users</li>
                            <li>Customers</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Footer;
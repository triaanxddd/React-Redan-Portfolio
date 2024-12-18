import Navbar from "../Navbar";
import Footer from "../Footer";
import AdminPicture from "../../assets/admin-picture.png"

const AboutIndex = () => {
    
    return (
        <>
            <Navbar/>
            <div className="w-full">
                <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2">
                    <div className="px-5 py-10">
                        <h1 className="font-bold text-4xl mb-2">About Redan</h1>
                        <p className="text-justify indent-12 text-slate-900 font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus repellendus nostrum, quis totam vitae reprehenderit quod vel, maxime possimus aspernatur iste voluptas facere saepe unde sapiente alias illo ipsa corporis cupiditate a? Iusto culpa deleniti similique totam. Autem quas odio maxime magnam sed enim officia delectus ab beatae voluptas nam facere ipsam perferendis itaque nemo quis officiis, repellat ipsa accusamus harum dignissimos sapiente. Laudantium doloribus reiciendis earum similique eveniet necessitatibus facilis incidunt harum dolores quaerat autem alias eius veritatis adipisci dolorum eos possimus quam a, tempora sint perferendis aut amet inventore? Eveniet qui nihil ab odit accusantium, commodi earum incidunt.</p>
                        
                        <h1 className="font-bold text-4xl mb-2">Vision</h1>
                        <p className="text-justify indent-12 text-slate-900 font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus repellendus nostrum, quis totam vitae reprehenderit quod vel, maxime possimus aspernatur iste voluptas facere saepe unde sapiente alias illo ipsa corporis cupiditate a? Iusto culpa deleniti similique totam. Autem quas odio maxime magnam sed enim officia delectus ab beatae voluptas nam facere ipsam perferendis itaque nemo quis officiis, repellat ipsa accusamus harum dignissimos sapiente. Laudantium doloribus reiciendis earum similique eveniet necessitatibus facilis incidunt harum dolores quaerat autem alias eius veritatis adipisci dolorum eos possimus quam a, tempora sint perferendis aut amet inventore? Eveniet qui nihil ab odit accusantium, commodi earum incidunt.</p>

                        <h1 className="font-bold text-4xl mb-2">Mission</h1>
                        <p className="text-justify indent-12 text-slate-900 font-medium mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus repellendus nostrum, quis totam vitae reprehenderit quod vel, maxime possimus aspernatur iste voluptas facere saepe unde sapiente alias illo ipsa corporis cupiditate a? Iusto culpa deleniti similique totam. Autem quas odio maxime magnam sed enim officia delectus ab beatae voluptas nam facere ipsam perferendis itaque nemo quis officiis, repellat ipsa accusamus harum dignissimos sapiente. Laudantium doloribus reiciendis earum similique eveniet necessitatibus facilis incidunt harum dolores quaerat autem alias eius veritatis adipisci dolorum eos possimus quam a, tempora sint perferendis aut amet inventore? Eveniet qui nihil ab odit accusantium, commodi earum incidunt.</p>

                    </div>

                    <div className="px-5 py-10">
                        <img src={AdminPicture} className="w-[800px]" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        
        </>
    );
};
export default AboutIndex;
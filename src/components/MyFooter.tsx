import Logo from "./Logo";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { LuLinkedin } from "react-icons/lu";

const Header: React.FC = ()=>{
    console.log("Footer component is rendering...");
    return(
        <>
        
        <div className="bg-Soft_Grey h-[30vh] w-full flex flex-row p-8 justify-between">
            <div className="flex flex-col">
                <Logo/>
                <p>Explore the world like never before.</p>
                <p>Subscribe to our newsletter for regular updates</p>
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">Quick Links</h1>
                <ul>
                    <li>Home</li>
                    <li>Tour Packages</li>
                    <li>Blog</li>
                    <li>Enquire Now</li>    
                </ul>
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">Contact Us</h1>
                <p>Phone: +91 XXXXXXXXXX</p>
                <p>Email: XX@abc.com</p>
                <p>Location: absxf</p>  
            </div>
            <div className="flex flex-col">
            <h1 className="font-bold">Subscribe to Our NewsLetter</h1>
            <div className="flex flex-row justify-between">
            <FiFacebook />
            <FaXTwitter />
            <GrInstagram />
            <LuLinkedin />
            </div>
            </div>
        </div>
        </>
    );
};

export default Header;
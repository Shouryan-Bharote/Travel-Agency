import Logo from "./Logo";
import Nav from "./Navbar";

const Header: React.FC = ()=>{
    console.log("Header component is rendering...");
    return(
        <>
        
        <div className="bg-gray-900 sticky top-0 z-20 opacity-50  mx-auto flex flex-wrap w-full items-center justify-between border-b border-gray-500 p-8">
            <Logo/>
            <Nav/>
        </div>
        </>
    );
};

export default Header;
import logo from '../image/logo.png'
import ase1 from '../image/ase1.png'
import ase2 from '../image/ase2.png'
const Navbar = () => {
    return (
        <header className="relative flex justify-between w-full flex-col lg:flex-row h-fit min-h-fit items-start sm:items-center px-[7%] z-10 mb-12 lg:mb-4">
            <div className="text-7xl w-80">
                <img src={logo} alt="Mendleson Communication Logo" />
            </div>
            <div className="flex flex-col sm:flex-row w-fit justify-between items-center">
                <a href="#aboutUs" className="w-28 flex-initial hover:text-cyan-700">About Us</a>
                <a href="#services" className="w-28 flex-initial hover:text-cyan-700">Services</a>
                <a href="#ourTeam" className="w-28 flex-initial hover:text-cyan-700">Team</a>
                <a href="#ourClients" className="w-28 flex-initial hover:text-cyan-700">Clients</a>
                <a href="#contactUs" className="w-28 flex-initial hover:text-cyan-700">Contact Us</a>
            </div>
            <img className="absolute top-0 left-0 -z-50 w-[3rem] sm:w-[4rem] md:w-[5rem] lg:w-[6rem] xl:w-[7rem] transition-all duration-300 ease-in-out" src={ase1} alt="" />
            <img className="absolute top-0 right-0 -z-50 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out" src={ase2} alt="" />
        </header>
    );
};

export default Navbar;

import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }
    ];

    return (
        <nav className="bg-orange-50">
            <div onClick={()=> setOpen(!open)} className="md:hidden ">
                {
                    open === true ? <AiOutlineClose  className="text-5xl text-black" /> : <AiOutlineMenuUnfold className="text-5xl text-black" />
                }
                

            </div>
            <ul className={`flex flex-col md:flex-row justify-center absolute md:static bg-orange-50 text-black  left-14 text-xl font-medium rounded-xl duration-300
                ${open ? 'flex top-14' :'-top-96'}
                `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
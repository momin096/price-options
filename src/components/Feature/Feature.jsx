import { FaCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
    return (
        <div className="">
            <ul className="px-10 md:px-5">
                <li className="flex items-center gap-2"><FaCheck className="text-green-300" /> {feature}</li>
            </ul>
        </div>
    );
};

export default Feature;
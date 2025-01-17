import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="m-2 p-5 flex flex-col  text-center bg-gray-600 rounded-xl py-10">
            <h3>
                <span className="text-7xl font-semibold">{price}</span>
                <span className="text-3xl">/mo</span>
            </h3>
            <h4 className="text-3xl font-semibold my-5">{name}</h4>
            <div className="flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature} ></Feature>)
                }
            </div>

            <button className="btn btn-primary mt-10 text-xl text-white px-10">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
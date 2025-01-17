import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className='hover:bg-orange-200 py-2 px-10' ><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes ={
    route: PropTypes.object.isRequired,
}

export default Link;
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='/photos'>photos</NavLink>
        </div>
    );
};

export default Header;
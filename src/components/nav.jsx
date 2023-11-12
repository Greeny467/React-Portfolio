
import { Link } from 'react-router-dom';
import Navbar from './UI/navBar';

export default function Navigation() {
    return (
        <Navbar
            links = {[
                <Link className='navLink' key={'AboutMe'} to="/">
                    About Me
                </Link>,
                <Link className='navLink' key={'Portfolio'} to="/portfolio">
                    Portfolio
                </Link>,
                <Link className='navLink' key={'Contact'} to="/contact">
                    Contact
                </Link>,
                <Link className='navLink' key={'Resume'} to="/resume">
                    Resume
                </Link>
            ]}
        />
    );
};
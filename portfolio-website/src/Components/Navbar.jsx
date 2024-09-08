import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';

export default function NavBar() {

    const experiance = './';
    const projects = './'
    return (
        <div className="nav-bar">
            <Link smooth className='nav-items' to="#Home">Home</Link>
            <Link smooth className='nav-items' to="#AboutMe">About Me</Link>
            <Link smooth className='nav-items' to="#Experience">Experience</Link>
            <Link smooth className='nav-items' to="#Projects">Projects</Link>
        </div>
    );
}
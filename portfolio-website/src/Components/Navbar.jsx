import './Navbar.css'

export default function NavBar()
{

    const experiance = './';
    const projects = './'
    return(
        <div className="nav-bar">
            <a className='nav-items' href='#Home'>Home</a>
            <a className='nav-items' href="#AboutMe">About Me</a>
            <a className='nav-items' href="#Experience">Experience</a>
            <a className='nav-items' href="#Projects">Projects</a>
        </div>
    );
}
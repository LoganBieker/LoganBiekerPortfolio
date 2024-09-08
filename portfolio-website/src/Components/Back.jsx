import './back.css'
import { Link } from "react-router-dom";


export default function Back()
{

    const experiance = './';
    const projects = './'
    return(
        <div className="nav-bar">
            < Link to="../" className='nav-items'>Back</Link>
        </div>
    );
}
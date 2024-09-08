import Back from "../Components/Back";
import { Link } from "react-router-dom";
import "./SiteStyling.css"

export default function Brewing()
{

    const washbearUrl = "https://washbearbrewingclient.azurewebsites.net/"
    return(
        <>
        <Back></Back>
        <div className="container">
        <div className="website-container">
            <h1>Washbear Brewing</h1> 
            <h2>Personal Homebrewing Website</h2>
            <p>I developed this website to showcase my homebrewing projects, which I pursue in my free time. The site is designed following the Model-View-Controller (MVC) architecture, with a React-based front end and a Node.js and Express back end. To ensure scalability, both the front and back ends are containerized, and the entire application is currently hosted on Microsoft Azure. </p> 
            <p>The <span>Location</span> tab utilizes Leaflet, an open-source mapping tool. In the <span>Contact Us</span> section, users can submit feedback, which is stored as a file on the server. The <span>Brews</span> section provides access to brewing data, which is stored in an MSSQL database hosted on Azure. I initially used MySQL but switched to MSSQL due to better support from Azure. The <span>Events</span> tab manages JSON event files. The backend parses these files and automatically updates event dates and times for recurring events, which can be set on a daily, weekly, or monthly basis. For the website design, I intentionally avoided using component frameworks or styling libraries to deepen my understanding of React and to improve my CSS styling skills.</p>
            <p>You can view the website <a href={washbearUrl}>Here.</a> Please note that the backend may take a few minutes to start up, as it is hosted on a free plan and requires time for the containers to initialize.</p>
        </div>
        </div>
        </>
    );
}
import "./SiteStyling.css"
import Back from "../Components/Back"

export default function Weather() {

    return (
        <>
            <Back></Back>
            <div className="container">
                <div className="website-container">
                    <h1>Real Time Weather Forcast</h1>
                    <p>To practice using RESTful API patterns and C#, I developed a weather app that provides a 48-hour forecast based on the user's location. The front end is built using React, and for location input, I integrated the Google Maps API to offer location suggestions as the user types. Once a location is selected and the submit button is pressed, the coordinates (latitude and longitude) are sent to the backend via a fetch request.</p>
                    <p>The backend processes these coordinates by sending them to the OpenWeather API, which retrieves the weather data for the next 72 hours, including temperature, precipitation amount, and chance of precipitation. The backend filters out unnecessary information, parses the relevant data, and sends it back to the front end for display.</p>
                    <p>This project follows a client-server architecture utilizing RESTful API principles.</p>
                    <iframe className="video" src="https://www.youtube.com/embed/dhXynevLuMs "></iframe> 

                </div>
            </div>
        </>
    );
}
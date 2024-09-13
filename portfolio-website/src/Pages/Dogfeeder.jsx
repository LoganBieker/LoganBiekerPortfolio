import "./SiteStyling.css"

import Back from "../Components/Back"
export default function Dogfeeder() {

    return (
        <>
            <Back></Back>
            <div className="container">
                <div className="website-container">
                    <h1>Automated Dog Feeder</h1>
                    <p>I decided to build an automatic dog feeder because the commercial options for large dogs can cost upwards of $100. The dog using this feeder is highly food-motivated, so leaving a box of food unattended could lead to issues. To address this, I designed a feeder that could be mounted on the wall, keeping it out of reach.</p>
                    <p>The base of the feeder was a countertop cereal/grain dispenser, from which I removed the manual action and connected a stepper motor to automate it. The motor was controlled by a stepper controller, which was linked to a Raspberry Pi. Using Python, I programmed a sequence that dispenses food by rotating the dispenser at designated times each day.</p>
                    <p>Since there were no off-the-shelf parts to mount the motor, I used my 3D Sonic Mini 4K printer to create a custom mount, allowing me to securely attach the motor to the dispenser's cylinder. Over time, I made small improvements to the timing of the motor and the dispenser flaps, ensuring a more consistent and reliable dispensing of the food.</p>
                    <iframe className="video" src="https://www.youtube.com/embed/gEu0oNwdSe0"></iframe>
                    <iframe className="video" src="https://www.youtube.com/embed/gcPqzapEeZs"></iframe>
                    <iframe className="video" src="https://www.youtube.com/embed/G3oT9QtoSgs"></iframe>
                </div>
            </div>
        </>

    )
}

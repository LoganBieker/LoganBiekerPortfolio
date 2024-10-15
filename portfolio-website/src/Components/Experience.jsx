import { useState } from "react";
import "./Experience.css";

const jobData = [
    {
        title: "Principal Software Engineer",
        company: "Northop Grumman",
        date: "June 2022 - Present",
        description:
            [
                "My primary role is developing & integrating C++ flight software onto space payloads. Roles range from active development of new algorithms to preparing payloads for flight.",
                "I spent six months writing test software for various payloads. The primary language used was TCL, but python was also used for various algorithms. We designed tests ensuring that the requirements specified by our customers were being met.",
                "Along with my normal development activities I’ve also been serving as the Scrum Master on the flight software team as well as hosting division wide Lunch and Learns, helping get SMEs with expert knowledge to distribute useful information to the division."
            ]
    },
    {
        title: "Engineer Electronics",
        company: "Northop Grumman",
        date: "Aug 2019 - Jun 2022",
        description:
            [
                "I Developed and improved software used for testing products using LabWindows/CVI. I primarily used C but also developed in Python, C#, and MATLAB.",
                "I maintained various test sets in a manufacturing facility, where I troubleshot hardware and software to ensure production stability.",
                "I Led the design and production of a new programming fixture, where I coordinated with the customers, production, and the design teams. Then documented and demonstrated the product for customers and QA."
            ]
    },
    {
        title: "Research Assistant",
        company: "Naval Research Laboratory",
        date: "Jan 2019 & May to Aug 2019",
        description:
            [
                "I wrote communication algorithms and signals using MATLAB. Then I applied machine learning techniques to categorize signals in the time domain.",
                "I designed 3D models used for creating soft robotics using Shape memory alloys",
                "I spend time working with a neuromorphic computer",
                "I applied control signals to an linear actuator creating an underwater acoustic generator"
            ]
    },
    {

        title: "Other Experience",
        company: "Click for more info",
        date: "",
        description:
            [
                "Electrician Assistant at L.E Balance Electrical Service, Jun 2017 to Aug 2017 - I did the electrical work for a dorm including duct work and wiring. I spend a lot of time reading schematics and putting together fixtures",
                "Electrical Engineering Intern at HII Newport News Shipbuilding, May 2016 to August 2016 - I drew schematics & helped with the various utility work that needed to be done around the facility."
            ]
    }] 


export default function Experience(props) {

    const [jobInfo, setJobInfo] = useState(jobData[0]);

    function handleJob(jobObject) {
        console.log(jobObject);
        setJobInfo(jobObject);
    }

    return (
        <div className="exp-page" id={props.id}>
        <div className="exp-container">
            <JobTitle handleJob={handleJob}></JobTitle>
            <JobDisplay jobInfo={jobInfo} ></JobDisplay>
        </div>
        </div>
    );
}

function JobTitle({ handleJob }) {
    const [selectedJobIndex, setSelectedJobIndex] = useState(0);
    const handleJobClick = (data, index) => {
        setSelectedJobIndex(index);
        handleJob(data);
    };

    return (
        <div className="exp-jobs-container">
            {jobData.map((data, index) => {
                const isSelected = selectedJobIndex === index;
                return (
                    <div key={index} className="exp-jobs-card" onClick={() => handleJobClick(data, index)}>
                        <div className={`job-title ${isSelected ? 'selected' : ''}`}>{data.title}</div>
                        <div className="job-company">{data.company}</div>
                        <div className="job-date">{data.date}</div>
                    </div>
                );
            })
            }
        </div>
    );

}

function JobDisplay({ jobInfo }) {

    // Add map do display the job data properly
    return (
        <div className="exp-detail-container">
            {jobInfo.description.map((data, index) => {
                return (
                    <p key={index} className="job-info">{data}</p>
                );
            })}
        </div>

    );
}


import { useState } from "react";
import "./Experience.css";

const jobData = [
    {
        title: "Advanced Software Engineer",
        company: "General Dynamics",
        location: "Canonsburg, PA",
        date: "Apr 2025 - Present",
        description: [
            "Led implementation of a modern GitLab CI/CD pipeline, integrating automated build steps, static code analysis with SonarQube, documentation generation with Pandoc, and deployment workflows.",
            "Drove the team’s migration from legacy CVS to modern development tools including Jira and Git, establishing best practices for code reviews.",
            "Architected and developed test software in C and Python for previously untested embedded hardware.",
            "Increased test throughput and efficiency by optimizing a core loop, reducing iterations by 88% and shortening overall test duration by a comparable margin."
        ]
    },
    {
        title: "Principal Embedded Software Engineer",
        company: "Northrop Grumman",
        location: "Baltimore, MD",
        date: "Jun 2022 - Apr 2025",
        description: [
            "Led the full lifecycle development of new flight software algorithms in C++ for a new satellite radar mode, including requirements definition, architecture design, implementation, integration, and testing on flight hardware.",
            "Took ownership of final software deployment for multiple space payloads, performing critical tasks including OS updates, firmware upgrades, and full payload configuration to ensure flight readiness.",
            "Developed and formalized repeatable flight software deployment procedures, increasing consistency across payload integrations and reducing configuration time and risk for future missions.",
            "Served as Scrum Master for the flight software team. Organized and led division-wide Lunch and Learns on software topics such as Conda and Docker."
        ]
    },
    {
        title: "Software Integration Engineer",
        company: "Northrop Grumman",
        location: "Baltimore, MD",
        date: "Aug 2019 - Jun 2022",
        description: [
            "Managed the end-to-end creation of a new test fixture by leading the design of hardware and development of accompanying software. Then demonstrated for both customers and Quality Assurance teams to verify system capabilities and alignment with requirements.",
            "Designed, integrated, and maintained test software in C, Python, and MATLAB for flight hardware systems, optimizing communication between test fixtures and components to ensure product functionality and reliability.",
            "Created user-friendly interfaces (UI/GUI) using LabWindows/CVI and C for complex production tests."
        ]
    },
    {
        title: "Research Assistant",
        company: "Naval Research Lab",
        location: "Washington, DC",
        date: "May 2019 - Aug 2019",
        description: [
            "Developed communication algorithms and signal processing tools in MATLAB to classify time-domain signals using machine learning techniques.",
            "Designed and fabricated soft robotic fish using custom 3D-printed molds for silicone bodies and integrated shape memory alloys (SMAs) to enable bio-inspired actuation and motion control."
        ]
    }
];
 


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


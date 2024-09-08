import './Projects.css'
import { Link } from 'react-router-dom';
export default function Projects(props) {
    const allProjectInfo =

        [
            {
                link: "./Brewing",
                imagePath: "./brewing_website.png",
                title: "Brewery Website",
                techStack:
                    [
                        "./react.png",
                        "./nodejs.svg",
                        "./mssql.png",
                        "./azure.png",
                        "./docker.png"
                    ]
            },
            {
                link: "./Weather",
                imagePath: "./realtime_weather_app.png",
                title: "Real Time Weather App",
                techStack:
                    [
                        "./react.png",
                        "./csharp.png",
                        "./aspnet.png",
                        "./googlemaps.png"
                    ]
            },
            {
                link: "./Dogfeeder",
                imagePath: "./automated_dog_feeder.png",
                title: "Automated Dog Feeder",
                techStack:
                    [
                        "./python.png",
                        "./raspberry-pi.svg"
                    ]
            }
        ]

        //link: "https://washbearbrewingclient.azurewebsites.net/",



    return (
        <div id={props.id} className='all-project-container'>
            {allProjectInfo.map((projectInfo, index) => {
                return (
                    <Link to={projectInfo.link} target='_blank' className="project-container" key={index}>

                        <h1 className="project-title">{projectInfo.title}</h1>

                        <TechImages techStack={projectInfo.techStack}></TechImages>
                        <img className='project-image' src={projectInfo.imagePath}></img>
                    </Link>
                )
            })}
        </div>

    );

    // <a className='project-container' href={projectInfo.link}>
    //techStack={projectInfo.techStack}
}

function TechImages(prop) {
    return (
        <div className="tech-image-container">
            {prop.techStack.map((data, index) => {
                return (
                    <img src={data} key={index} className="tech-image"></img>
                );
            })}
        </div>)
}



import './Projects.css'

export default function Projects(props) {
    const allProjectInfo =

        [
            {
                link: "https://washbearbrewingclient.azurewebsites.net/",
                imagePath: "./profile.jpg",
                title: "Brewery Website",
                techStack:
                    [
                        "./react.png",
                        "./react.png"
                    ]
            }
            ,
            {
                link: "https://washbearbrewingclient.azurewebsites.net/",
                imagePath: "./profile.jpg",
                title: "Brewery Website",
                techStack:
                    [
                        "./react.png",
                        "./react.png"
                    ]
            },
            {
                link: "https://washbearbrewingclient.azurewebsites.net/",
                imagePath: "./profile.jpg",
                title: "Brewery Website",
                techStack:
                    [
                        "./react.png",
                        "./react.png"
                    ]
            }
        ]

    return (
        <div id={props.id} className='all-project-container'>
            {allProjectInfo.map((projectInfo, index) => {
                return (
                    <div className="project-container" key={index}>
                        <img className='project-image' src={projectInfo.imagePath}></img>
                        <h1 className="project-title">{projectInfo.title}</h1>
                        <TechImages techStack={projectInfo.techStack}></TechImages>
                    </div>
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



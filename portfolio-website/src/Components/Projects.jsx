import './Projects.css'

export default function Projects(props) {
    const allProjectInfo =

        [
            {
                link: "https://washbearbrewingclient.azurewebsites.net/",
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
            }
            ,
        ]

    return (
        <div id={props.id} className='all-project-container'>
            {allProjectInfo.map((projectInfo, index) => {
                return (
                    <a href={projectInfo.link} target='_blank' className="project-container" key={index}>

                        <h1 className="project-title">{projectInfo.title}</h1>

                        <TechImages techStack={projectInfo.techStack}></TechImages>
                        <img className='project-image' src={projectInfo.imagePath}></img>
                    </a>
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



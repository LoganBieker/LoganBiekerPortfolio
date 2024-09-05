import './AboutMe.css'

export default function AboutMe(props) {

    const info = 'I’m a passionate software engineer with a strong background in designing and developing efficient, scalable, and user-friendly applications. With experience in various programming languages and frameworks, I thrive on solving complex problems and continuously learning new technologies. Whether I’m collaborating with a team or working independently, I’m dedicated to writing clean, maintainable code and delivering high-quality software solutions that make a real impact. When I’m not coding, I enjoy exploring the latest tech trends and contributing to open-source projects.'
    return(
        <div id={props.id} className='about-me-container'>
            <p className='about-info'>{info}</p>
            <img className='about-image' src={"./profile.jpg"}></img>
        </div>

    );
}
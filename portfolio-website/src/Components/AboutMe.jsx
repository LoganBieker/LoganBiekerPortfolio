import './AboutMe.css'

export default function AboutMe(props) {

    const info = "I'm a software developer with experience in embedded systems, web development, and the Internet of Things (IoT), and I enjoy building things across all these areas. My journey in tech began with embedded systems, where I honed my skills in creating efficient, low-level software solutions. Over time, my interests expanded into web development, allowing me to craft user-friendly, modern web applications. Outside of coding, I’m an avid volleyball player, love spending time outdoors hiking, and enjoy the thrill of surfing. When I’m not active, I love sitting down for a good board game session with friends. My combination of technical expertise and love for outdoor activities keeps me balanced, motivated, and always excited to tackle new challenges."
    return(
        <div id={props.id} className='about-me-container'>
            <p className='about-info'>{info}</p>
            <img className='about-image' src={"./profile.jpg"}></img>
        </div>

    );
}
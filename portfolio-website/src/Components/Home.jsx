
import DownloadCV from './downloadCV';
import './Home.css'

export default function Home(prop) {
    return (
        <div id={prop.id} className='title-container'>
            <h2 className='title'>Hi, my name is <span className='title-name'>Logan Bieker</span></h2>
            <h3 className='title-job-title'>Software Engineer</h3>
            <DownloadCV></DownloadCV>
        </div>
    );
}
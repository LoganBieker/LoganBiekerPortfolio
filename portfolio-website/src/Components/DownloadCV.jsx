import './DownloadCV.css';

export default function DownloadCV()
{


    const url = "https://drive.google.com/file/d/1-ya99EVLdBsV0YsIEGjx5hWl4u0CKE_V/view?usp=sharing" 
    return (
            <a className="download-link" href={url} target="_blank">
            <div className="download-button" >Download<br />CV</div>
            </a>
    );
}
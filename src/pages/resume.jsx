import resumePlaceholder from '../assets/downloads/resumePlaceholder.pdf';

export default function resumePage () {
    const resume = {
        image: "/src/assets/images/resumePlaceholder.png",
        file: resumePlaceholder,
        name: "resumePlaceholder.pdf"
    };

    return (
        <>
            <h1 className="colorBarPrimary mainTitle">Resume</h1>
            <div className="rowContainer">
                <a href={resume.file} download={resume.name} className="button">Download Resume</a>
                <img src={resume.image}/>
            </div>
        </>
    )
}
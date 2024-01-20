import resumePlaceholder from '../assets/downloads/DC Resume.pdf';

export default function resumePage () {
    const resume = {
        image: 'src/assets/downloads/DC Resume.pdf',
        file: resumePlaceholder,
        name: "DCResume.pdf"
    };

    return (
        <>
            <h1 className="colorBarPrimary mainTitle">Resume</h1>
            <div className="rowContainer">
                <a href={resume.file} download={resume.name} className="button">Download Resume</a>
                <embed src={resume.image} type="application/pdf" width="80%" height="400px"></embed>
            </div>
        </>
    )
}
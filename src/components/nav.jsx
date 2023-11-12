import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './UI/navBar';

export default function Navigation() {
    const [clickedLink, setClickedLink] = useState('AboutMe');
    const [aboutMeBtn, setAboutMeBtn] = useState('navLinkClicked');
    const [portfolioBtn, setPortfolioBtn] = useState('navLink');
    const [contactMeBtn, setContactMeBtn] = useState('navLink');
    const [resumeBtn, setResumeBtn] = useState('navLink');

    function handleSelectLink(e) {
        const selectedLink = e.target.getAttribute('data-key');
        console.log(selectedLink)

        setClickedLink(selectedLink);

        if (selectedLink === 'AboutMe') {
            setAboutMeBtn('navLinkClicked');
            setPortfolioBtn('navLink');
            setContactMeBtn('navLink');
            setResumeBtn('navLink');
        } else if (selectedLink === 'Portfolio') {
            setAboutMeBtn('navLink');
            setPortfolioBtn('navLinkClicked');
            setContactMeBtn('navLink');
            setResumeBtn('navLink');
        } else if (selectedLink === 'Contact') {
            setAboutMeBtn('navLink');
            setPortfolioBtn('navLink');
            setContactMeBtn('navLinkClicked');
            setResumeBtn('navLink');
        } else if (selectedLink === 'Resume') {
            setAboutMeBtn('navLink');
            setPortfolioBtn('navLink');
            setContactMeBtn('navLink');
            setResumeBtn('navLinkClicked');
        }
    }

    return (
        <Navbar
            links={[
                <Link className={aboutMeBtn} data-key='AboutMe' key={'AboutMe'} to="/" onClick={handleSelectLink}>
                    About Me
                </Link>,
                <Link className={portfolioBtn} data-key='Portfolio' key={'Portfolio'} to="/portfolio" onClick={handleSelectLink}>
                    Portfolio
                </Link>,
                <Link className={contactMeBtn} data-key='Contact' key={'Contact'} to="/contact" onClick={handleSelectLink}>
                    Contact
                </Link>,
                <Link className={resumeBtn} data-key='Resume' key={'Resume'} to="/resume" onClick={handleSelectLink}>
                    Resume
                </Link>
            ]}
        />
    );
}

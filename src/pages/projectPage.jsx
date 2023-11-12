import { useParams } from 'react-router-dom';
import UrlLink from '../components/UI/urlLink';
import projectData from '../utils/projects.json';
import {findCardById} from '../utils/dataHelpers';

export default function projectPage () {
    const { id } = useParams();
    const intId = parseInt(id);
    const project = findCardById(projectData, intId);
    console.log(projectData);

    let websiteBtn;
    if (project.website === 'NONE'){
        websiteBtn = '';
    }
    else{
        websiteBtn = <UrlLink name='Deployed Website' url={project.website}/>
    };

    return(
        <>
            <div id='backButtonHolder'>
                <UrlLink name='back' url='/portfolio'/>
            </div>
            
            <div className='colorBarPrimary'>
                <h1 className='mainTitle'>{project.title}</h1>
                <h3>{project.dateFinished}</h3>
            </div>

            <img className='projectPageImage' src={project.image}/>

            <div className='colorBarQuatrinary'>
                {websiteBtn}
                <UrlLink name='GitHub Repo' url={project.repository}/>
            </div>
            
            <h1 className='colorBarPrimary spaceTopBottom'>Description</h1>
            <p className='textSection'>{project.desc}</p>

        </>
    );
};
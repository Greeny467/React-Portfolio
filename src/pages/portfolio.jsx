import projectData from '../utils/projects.json';
import drawerData from '../utils/drawers.json';
import {findCardById} from '../utils/dataHelpers';

console.log({projectData, drawerData})

import Card from '../components/UI/card';
import Drawer from '../components/drawer';

function generateCard (cardInfo, type) {
    return (
        <Card
            key={cardInfo.id} 
            title={cardInfo.title} image={cardInfo.image} 
            shortDesc={cardInfo.shortDesc} id={cardInfo.id}
            cardType={type}
        />
    )
}

function generateDrawer (drawerData){
    const drawerCards = [];
    projectData.forEach(project => {
        if(project.drawer === drawerData.id){
            drawerCards.push(generateCard(project, 'drawerCard'));
        };
    });

    return(<Drawer name={drawerData.name} cards={drawerCards}/>);
}


const featuredCards = [];
featuredCards.push(findCardById(projectData, 1));
featuredCards.push(findCardById(projectData, 2));
featuredCards.push(findCardById(projectData, 3));
featuredCards.push(findCardById(projectData, 4));
featuredCards.push(findCardById(projectData, 5));
featuredCards.push(findCardById(projectData, 6));


export default function portfolio () {
    return (
        <>
            <h1 className='mainTitle'>Portfolio</h1>
            <h2 className='secondaryTitle'>Featured</h2>
            <section className='section'>
                <div className='cardHolder-3or2'>
                    {featuredCards.map((cardData) => generateCard(cardData, 'card'))}
                </div>
            </section>
            <section>
                <h2 className='secondaryTitle'>All Projects</h2>
                {drawerData.map((drawerData) => generateDrawer(drawerData))}
            </section>
        </>
    )
};
// import drawer css and link
import { useState } from 'react';


export default function drawer({name, cards}) {
    let [containerDisplay, setContainerDisplay] = useState('closedDrawer');
    let [buttonDisplay, setButtonDisplay] = useState('drawerBtn');

// set button which switches the display of the drawer container to none and back.
    const handleOpen = () => {
        if(containerDisplay === 'closedDrawer'){
            setContainerDisplay('openedDrawer');
            setButtonDisplay('drawerBtn openDrawerBtn')
        }
        else{
            setContainerDisplay('closedDrawer');
            setButtonDisplay('drawerBtn')
        };
    };

// set the name and cards of the drawer as props. Each card has a url link with the cards url. 

return (
    <div className='container drawerContainer'>
        <button className={buttonDisplay} onClick={handleOpen}>
            <h2>{name}</h2>
        </button>
        <section className={containerDisplay}>
            {cards.map((card) => card)}
        </section>

    </div>
)
}
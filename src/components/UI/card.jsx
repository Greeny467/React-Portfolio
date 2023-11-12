// import css for card and link. project data as props
import UrlButton from './urlLink';

// div with project name, image, short description, and see more button. 
export default function card ({title, image, shortDesc, id, cardType}) {
    return (
        <div className={cardType}>
            <h3>{title}</h3>
            <img src={image}/>
            <p>{shortDesc}</p>
            <UrlButton name = 'see more' url = {`/projects/${id}`}>see more</UrlButton>
        </div>
    )
}
// get button css and link. 
import { Link } from 'react-router-dom';


// return a button link with the url from the props as the destination. 
export default function urlLink({ name, url }) {
    return (
        <Link className='button' to={url}>
            {name}
        </Link>
    )
}
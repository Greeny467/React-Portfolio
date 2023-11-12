// export the html and a ul with a map function to map through the links in props.

export default function Nav({ links }) {
    return (
        <nav>
            <ul className="navbar">
                {links.map((link) => link)}
            </ul>
        </nav>
    );
}
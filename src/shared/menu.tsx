import { Link } from "react-router-dom"
const Menu = () => {
    return (<>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">login</Link>
            </li>
            <li>
                <Link to="/users">users</Link>
            </li>
            <li>
                <Link to="/quotes">quotes</Link>
            </li>
            <li>
                <Link to="/test">test</Link>
            </li>
        </ul>
    </>)
}
export default Menu;
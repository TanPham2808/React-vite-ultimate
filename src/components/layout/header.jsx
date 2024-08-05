import './header.css'

const Header = () => {
    return (
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/user">Users</a></li>
            <li><a href="/products">About</a></li>
        </ul>
    );
}

export default Header
function Header(){
    return(
        <nav className="nav-bar">
            <div className="nav-bar--brand">
                <img src="./public/globe-icon.png" alt="globe" className="nav-bar--logo"/>
                <h1 className="nav-title">My Travel Journal</h1>
            </div>
        </nav>
    );
}

export default Header

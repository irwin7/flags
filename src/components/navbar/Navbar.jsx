import "./navbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar__container container">
                <input type="search" name="search" placeholder="Search for a country…"/>
            </div>
        </div>
    )
}

export default Navbar;
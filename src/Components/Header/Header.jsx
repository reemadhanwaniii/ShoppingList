import HeaderImage from "../../assets/Header.avif";
import './Header.css';

function Header() {
    return(
        <div className="header-wrapper">
            <h1 img="header-text">
                Shopping List
            </h1>
            <div className="header-image-wrapper">
                <img className="header-img"
                    src={HeaderImage}
                />
            </div>
        </div>
    );
}

export default Header;
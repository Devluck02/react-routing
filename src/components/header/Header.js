import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../../routes/Routing";
import Navigation from "../navigation/Navigation";
import "./Header.css";
const Header = () => {
    return (
        <Router>
            <header>
                <Navigation />
            </header>
            <Routing />
        </Router>
    );
}

export default Header;
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import About from "../pages/about/About"
const Routing = () => {
    return (
        <div className="page-view">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default Routing;
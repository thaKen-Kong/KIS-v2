import { Link } from "react-router-dom";
import { logo } from "../../data/images";

export function Logo() {
    return (
        <>
            <div className="logo-section">
                <img src={logo} alt="KIS logo" />
                <Link className="white" style={{textDecorationStyle:"none"}}to="/"><h1>KIS</h1></Link>
            </div>
        </>
    );
}

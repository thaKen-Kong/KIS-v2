import { logo } from "../../data/images";

export function Logo() {
    return (
        <>
            <div className="logo-section">
                <img src={logo} alt="KIS logo" />
                <h1>KIS</h1>
            </div>
        </>
    );
}

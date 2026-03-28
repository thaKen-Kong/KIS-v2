import { Bubble } from "../common/Bubble";
import { Label } from "../common/Text";

export function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-brand">
                    <Label text="KIS" classname="white shadow"/>
                    <p>Learning with purpose, growing with community.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <a href="#">Admissions</a>
                    <a href="#">Programs</a>
                    <a href="#">Campus Life</a>
                    <a href="#">Contact</a>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>info@kis.edu</p>
                    <p>+63 900 000 0000</p>
                    <p>San Fernando, La Union</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 KIS. All rights reserved.</p>
            </div>
        </footer>
    );
}

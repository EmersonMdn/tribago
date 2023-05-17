import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <ul>
          <li>&copy; 2023 Emerson Medina </li>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Privacy</li>
          <li>Your Privacy Choices</li>
        </ul>

        <ul>
          <li>
            <i className="fa-solid fa-globe"></i> English
          </li>
          <li> USD ($)</li>
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
      </footer>
    </>
  );
}

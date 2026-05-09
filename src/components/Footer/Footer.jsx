import "./Footer.css";

function Footer({ footer }) {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div>
          <h3>{footer.title}</h3>
          <p>{footer.description}</p>
        </div>
        <div>
          <h4>Our story</h4>
          <h4>Costumer reviews</h4>
          <h4>Careers</h4>
          <h4>Terms of service</h4>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{footer.contact}</p>
          <p>{footer.phone}</p>
        </div>
        <div>
          <p>© 2026 MyShop</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">EARRING</p>
        <p className="footer-copy">매일의 순간을 위한 작은 반짝임.</p>
      </div>

      <div className="footer-links">
        <Link to="/products">SHOP</Link>
        <Link to="/wishlist">WISHLIST</Link>
        <Link to="/cart">CART</Link>
      </div>

      <p className="copyright">© 2026 EARRING SHOP. All rights reserved.</p>
    </footer>
  );
}

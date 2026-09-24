import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/products", label: "SHOP" },
  { to: "/products?category=new", label: "NEW" },
  { to: "/products?category=best", label: "BEST" },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Earring Shop 홈">
        EARRING
      </Link>

      <nav className="desktop-nav" aria-label="주요 메뉴">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <nav className="header-actions" aria-label="쇼핑 메뉴">
        <Link to="/wishlist" aria-label="찜 목록">♡</Link>
        <Link to="/cart" aria-label="장바구니">🛒</Link>
      </nav>
    </header>
  );
}

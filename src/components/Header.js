import Logo from "../assets/foodvilla.jpg";
import "../index.css";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={Logo} alt="Food Villa" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

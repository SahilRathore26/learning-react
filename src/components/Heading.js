import { LOGO_URL } from "../utility/constants";

const Heading = () => {
  return (
    <div className="heading">
      <div className="logo-container">
        <img className="logo" src= { LOGO_URL }></img>
      </div>
      <div className="nav-bar">
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

export default Heading;
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png"
import { useEffect, useState } from "react";
import {Link} from 'react-scroll'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const[mobileMenu,setMobileMenu]=useState(false)
  const toggleMenu=()=>{
    console.log("132342",mobileMenu)
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
    

  }

  return (
    <nav className={`container  ${sticky ? "dark-nav" : ""}`}>
      <img className="logo" src={Logo} alt="logo" />
      <ul className={mobileMenu? "":"hide-mobile-menu"}>
        <li> <Link to="hero" smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500} >Programs</Link></li>
        <li> <Link to="about" smooth={true} offset={-150} duration={500} >About</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} >Campus</Link></li>
        <li> <Link to="testimonials" smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
        <li>
        
          <Link to="contact" smooth={true} offset={0} duration={-260} className="btn" >Contact us</Link> </li>
        
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={toggleMenu} alt="menu_icon"/>
    </nav>
  );
};

export default Navbar;

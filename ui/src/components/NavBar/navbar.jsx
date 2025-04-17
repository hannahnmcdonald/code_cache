
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import logo from '../../img/logo.svg';
import './navbar.css'

export const CodeCacheLogo = () => {
  return (
    <img src={logo} alt="code cache logo" className="logo"/>
  );
};

export default function NavBar() {
  return (
    <Navbar className="navbar">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
         <CodeCacheLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
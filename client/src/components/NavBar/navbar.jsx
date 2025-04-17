
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import logo from '../../img/code-cache-logo.png';

export const CodeCacheLogo = () => {
  return (
    <img src={logo} />
  );
};

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <CodeCacheLogo />
      </NavbarBrand>
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
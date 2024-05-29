import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Header = () => {
    return (
        <Navbar position="static" className={"bg-[#121212] absolute"}>
            <NavbarContent className="" >
                <NavbarBrand>
                    <Link href="/" className={"text-white text-lg font-bold"}>David</Link>
                </NavbarBrand>

                <NavbarItem>
                    <Link href="/projects" className={"text-white"}>Projects</Link>
                </NavbarItem>

                {/*
                    <NavbarItem>
                    <Button className={"bg-gradient-to-r from-green-400 to-blue-500"}>Resume</Button>
                </NavbarItem>
        */}
            </NavbarContent>
        </Navbar>
    );
};

export default Header;

// path: src/app/container/header/Header.tsx

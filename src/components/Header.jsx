import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logos/logo-h.png"
import { Box, HStack, Image } from "@chakra-ui/react";

function Header() {
    return (
        <Box
            as="header"
            px={6}
            py={4}
            bg="yellow.50"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Link to='/'>
                <Image w="180px" src={Logo} alt="LOGO" />
            </Link>
            <HStack
                as="nav"
                gap={8}
                fontWeight="bold"
            >
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/about'>About</NavLink>
            </HStack>
        </Box>
    )
}

export default Header
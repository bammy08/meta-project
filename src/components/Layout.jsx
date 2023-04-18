import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Header />
            <Box as="main" bg="yellow.50" minH="85vh" px={6}>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}

export default Layout
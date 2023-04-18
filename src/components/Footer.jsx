import { Link } from "react-router-dom"
import FooterLogo from "../assets/logos/logo-h.png"
import { Box, Image, Text, VStack } from "@chakra-ui/react"

function Footer() {
    return (
        <Box
            as="footer"
            p={8}
            bg="gray.800"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
        >
            <Link to='/'>
                <Image src={FooterLogo} alt="Logo" w="350px" />
            </Link>
            <VStack>
                <Text fontWeight="bold">LOCATION</Text>
                <Text>Beside ABC, PQR Street,</Text>
                <Text>New York, USA - 123456</Text>
            </VStack>
            <VStack>
                <Text fontWeight="bold">OPEN TIMINGS</Text>
                <Text>MON - FRI: 09:00 AM - 10:00 PM</Text>
                <Text>SAT - SUN: 09:00 AM - 11:30 PM</Text>
            </VStack>
        </Box>
    )
}

export default Footer
import { Box, Heading, Text } from "@chakra-ui/react"
import BookingForm from "../components/BookingForm"

function Reserve() {
    return (
        <Box>
            <Heading as="h1" size="2xl">Reservations</Heading>
            <Text as="p" my={4}>We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you.</Text>
            <BookingForm />
        </Box>
    )
}

export default Reserve
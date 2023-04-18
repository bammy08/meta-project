import { Heading, Text, VStack } from "@chakra-ui/react"
import ReserveButton from "../components/ReserveButton"

function Home() {
    return (
        <>
            <VStack
                as="section"
                gap={2}
                minH="60vh"
                alignItems={{ base: "center", lg: "start" }}
                justifyContent="center"
            >
                <Heading as='h1' size="2xl">Exquisite dining destination</Heading>
                <Text as="p">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</Text>
                <ReserveButton />
            </VStack>
        </>
    )
}

export default Home
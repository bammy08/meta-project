import { Container, Heading, Text } from "@chakra-ui/react"

function About() {
    return (
        <>
            <Heading as="h1" size="xl">About Us</Heading>
            <Container>
                <Heading as="h2">The most locally sourced food</Heading>
                <Text>All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</Text>

                <Heading as="h2">Wanna Celebrate!! We got you covered</Heading>

                <Heading as="h3">Family Gathering</Heading>
                <Text>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.</Text>

                <Heading as="h3">Special Events</Heading>
                <Text>Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.</Text>

                <Heading as="h3">Social Events</Heading>
                <Text>Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.</Text>
            </Container>
        </>
    )
}

export default About
const AboutUs = () => {
    return (
        <Container>
        <Heading as="h1">Sur Nous</Heading>
        <Text>Sur Nous</Text>
        <Divider my={6} />
        <Box my={6} align="center">
            <Button as={NextLink} href="/" colorScheme="teal">
            Return to home
            </Button>
        </Box>
        </Container>
    )
}
export default AboutUs
export { getServerSideProps } from '../components/chakra'

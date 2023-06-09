import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Titre">
    <Container>
      <Title>
        Titre <Badge>Date</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/thumb1.jpg" alt="icon" />
      </Center>
      <P>
        SousTitre
      </P>
      <P>
        Text
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>List</ListItem>
        <ListItem>List</ListItem>
        <ListItem>
          List
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

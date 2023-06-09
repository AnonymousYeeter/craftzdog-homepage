import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/thumb1.jpg'
import thumbHowToUseInkdrop from '.../public/images/contents/thumb2.jpg'
import thumbFishWorkflow from '../public/images/contents/thumb3.jpg'
import thumbMyDeskSetup from '../public/images/contents/thumb4.jpg'
import thumb500PaidUsers from '../public/images/contents/thumb1.jpg'
import thumbFinancialGoal from '../public/images/contents/thumb2.jpg'
import thumbHowToPriceYourself from '../public/images/contents/thumb3.jpg'
import thumb50xFaster from '../public/images/contents/thumb4.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Titre"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=xMHJGd3wwZk"
          />
          <GridItem
            title="Titre"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=xMHJGd3wwZk"
          />
          <GridItem
            title="Titre"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=xMHJGd3wwZk"
          />
          <GridItem
            title="Titre"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=xMHJGd3wwZk"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

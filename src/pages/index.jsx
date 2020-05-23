import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import GridItem from '../components/GridItem';
import InThought from '../images/in_thought.svg';
import CoWorking from '../images/co-working.svg';
import Conversation from '../images/conversation.svg';
import Solution from '../images/solution.svg';


const Header = styled.header`
  width: 100%;
  height: 900px;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;

const Hero = styled(Flex)`
  height: 100%;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  display: flex;
  align-itens: center;
  justify-content: center;
  img {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <Layout>
    <Header>
      <Logo>Dia do Arauto 🕶</Logo>
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <h1>
          A gente te escuta. <br /> A gente te ajuda.
        </h1>
        <h3>Aqui pra impulsionar seu negócio. 💪🚀</h3>
      </Hero>
    </Header>
    {/* <Wrapper p={4} mb={[4, 4, 7]} mx="auto" justifyContent="space-between" flexWrap="wrap">
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          image={c.node.data.header_image.localFile.childImageSharp.fluid}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper> */}
    
    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={InThought} alt="Nossa História" />
          </ServiceImage>
          <ServiceText>
            <h2>Nossa História</h2>
            <p>
              A Dia do Arauto é uma agência meio diferente. Dá uma olhada na nossa história, que você vai entender.
            </p>
            <p>
              A gente surgiu como uma agência de publicidade para artistas em 2017, querendo ajudar pessoas criativas a terem uma divulgação mais profissional. 
              Aí chegou a empresa de um amigo, depois outra de uma indicação, depois mais uma, todas buscando alguém que pudesse introduzir seus negócios no marketing digital, 
              sem ter que cobrar "os olhos da cara" ou deixar o cliente mais perdido do que ele estava antes.
            </p>
            <p>
              Foi aí que percebemos como aqueles profissionais eram tão apaixonados por suas mensagens quanto os compositores, bandas e escultores. 
              E decidimos que atenderíamos artistas, empresas, profissionais autônomos e pessoas que quisessem transmitir uma mensagem positiva através 
              de plataformas como o Instagram e o Youtube.
            </p>
            <p>
              Desde então, trabalhamos com mais de 40 empresas, artistas e profissionais diferentes, de todos os tipos. Ampliamos nossa base de 
              serviços para coisas que nem nós, nem os clientes, jamais imaginaríamos, vimos o nascer e o morrer de técnicas e ferramentas como 
              os robôzinhos para o Instagram (R.I.P) e aprendemos muito sobre negócios, vendas, marca, viralização e visibilidade.
            </p>
            <p>
              Hoje sabemos exatamente como uma estratégia sólida precisa de dedicação, planejamento e execução de qualidade. É se colocar no lugar do cliente, 
              seja ele dono, diretor, vocalista ou estagiário, e buscar realmente aquilo que vai fazer com ele tenha uma vida melhor, 
              e seu projeto tenha a oportunidade de encontrar um mundo de pessoas que querem e precisam dele.
            </p>
            <p>
              Não estamos aqui para oferecer, e sim para ouvir o que você precisa. Vamos trocar uma ideia?
            </p>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-between" flexDirection="row-reverse" flexWrap="wrap">
          <ServiceImage>
            <img src={CoWorking} alt="Como Trabalhamos" />
          </ServiceImage>
          <ServiceText>
            <h2>Como funciona nosso trabalho</h2>
            <p>
              Colocar os planos em prática é um desafio, mas isso não significa que você (ou nós) precisamos fazer isso sozinhos.
            </p>
            <p>
              Estamos aqui para "traduzir". Traduzir a sua experiência no seu negócio em uma estratégia de comunicação. 
              Traduzir os resultados dessa estratégia de crescimento para que você não só saiba que as coisas vão bem, 
              mas entenda PORQUE elas vão bem (e como chegamos lá.)
            </p>
            <p>
              Ou seja, vamos fazer uma reunião (ao vivo, de preferência) para entender o que está atrapalhando sua vida ou seu negócio. 
              Nessa reunião vamos esboçar uma estratégia e uma proposta de serviços pra essa estratégia. 
              Se você topar, a partir daí começa uma troca constante de informações entre a gente. 
              Você passando a sua visão sobre os resultados "na prática" e nós iremos te atualizar com informações sobre como os clientes 
              estão interagindo e como podemos melhorar os resultados. Tudo em linguagem de gente, feito para o seu nível de intimidade com termos de marketing.
            </p>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={Conversation} alt="Reunião" />
          </ServiceImage>
          <ServiceText>
            <h2>Uma Reunião Para A Gente Se Entender Melhor!</h2>
            <p>
              Achou interessante? Ou ainda está na dúvida se serve para o seu negócio?
              Não tem problema, tudo que precisamos é uma boa e velha conversa.
              Assim podemos nos conhecer e sentir se trabalharemos bem juntos, 
              se conseguimos nos entender e se estamos realmente animados com o projeto um do outro.
            </p>
            <p>
              Somos especializados em marketing digital como um todo, mas nunca tivemos medo de atuar 
              em quaisquer outros pilares que sua empresa ou sua carreira necessitam. 
              Foi assim que começamos a fazer ensaios fotográficos, logos, videos de drone, impressão 3D, lojas online, 
              e mais um monte de outras coisas. Dá uma olhada no nosso portfólio.
            </p>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-between" flexDirection="row-reverse" flexWrap="wrap" >
          <ServiceImage>
            <img src={Solution} alt="Solucão" />
          </ServiceImage>
          <ServiceText>
            <h2>E esse nome esquisito? O que quer dizer <i>Dia do Arauto</i>?</h2>
            <p>
              Achou interessante? Ou ainda está na dúvida se serve para o seu negócio?
              Não tem problema, tudo que precisamos é uma boa e velha conversa.
              Assim podemos nos conhecer e sentir se trabalharemos bem juntos, 
              se conseguimos nos entender e se estamos realmente animados com o projeto um do outro.
            </p>
            <p>
              Somos especializados em marketing digital como um todo, mas nunca tivemos medo de atuar 
              em quaisquer outros pilares que sua empresa ou sua carreira necessitam. 
              Foi assim que começamos a fazer ensaios fotográficos, logos, videos de drone, impressão 3D, lojas online, 
              e mais um monte de outras coisas. Dá uma olhada no nosso portfólio.
            </p>
          </ServiceText>
        </Flex>
      </Wrapper>
    </PrimaryBG>
    <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
      <h1>Manda um oi!</h1>
      <h3>contato@diadoarauto.com.br</h3>
    </Contact>
    <Footer />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;

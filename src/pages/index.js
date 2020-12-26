import { graphql } from 'gatsby';
import React from 'react';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';
import Info from '../components/Info/Info';
import Layout from '../components/layout';
import Menu from '../components/Menu/Menu';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Regular Joe's"
    />
    <Info />
    <Menu items={data.menu} />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeItem {
      edges {
        node {
          id
          description {
            description
          }
          title
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

// https://youtu.be/oAVhEPey_qA?t=11787

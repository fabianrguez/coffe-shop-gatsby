import React from 'react';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';
import Info from '../components/Info/Info';
import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage({ data }) {
  return (
    <Layout>
      <SEO title="About" keywords={[]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="About Us"
        styleClass="about-background"
      />
      <Info />
    </Layout>
  );
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;

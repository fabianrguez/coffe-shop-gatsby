import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Title from '../Title/Title';
import ProductItem from './ProductItem';

const getProducts = graphql`
  {
    products: allContentfulCoffeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

function Products({ data }) {
  return (
    <StaticQuery
      query={getProducts}
      render={data => (
        <section className="py-5">
          <div className="container">
            <Title title="Our Products" />
            <div className="row">
              {data &&
                data.products.edges.map(({ node: product }) => (
                  <ProductItem key={product.id} {...product} />
                ))}
            </div>
          </div>
        </section>
      )}
    />
  );
}

export default Products;

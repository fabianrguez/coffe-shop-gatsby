import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import Img from 'gatsby-image';

function Menu({ items }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (items.edges.length > 0) {
      setProducts([...items.edges]);
      setCategories(getCategories(items.edges));
    }
  }, [items.edges]);

  const getCategories = products => {
    const allProductsCategory = products.map(product => product.node.category);
    return ['all', ...new Set(allProductsCategory)];
  };

  const filterCategory = category => {
    const allProducts = [...items.edges];
    setActiveCategory(category);
    return category === 'all'
      ? setProducts([...allProducts])
      : setProducts([
          ...allProducts.filter(({ node }) => node.category === category),
        ]);
  };

  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="Best of our menu" />
        {products.length > 0 && (
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn btn-yellow text-capitalize m-3 ${
                    activeCategory === category && 'active'
                  } `}
                  onClick={() => filterCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="row mb-5">
          {products.length > 0 ? (
            products.map(({ node }) => (
              <div
                key={node.id}
                className="col-11 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <Img fixed={node.image.fixed} />
                </div>
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{node.title}</h6>
                    <h6 className="mb-0">${node.price}</h6>
                  </div>
                  <p className="text-muted">
                    <small>{node.description.description}</small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>There are no items to display</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Menu;

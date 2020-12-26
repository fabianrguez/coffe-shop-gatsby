import { Link } from 'gatsby';
import React from 'react';
import Title from '../Title/Title';

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              necessitatibus nemo temporibus, cumque quibusdam ad quos nihil
              nostrum doloremque laborum autem maiores alias fuga, commodi velit
              quas, accusantium maxime error!
            </p>
            <Link to="/about">
              <button className="btn btn-yellow text-uppercase">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;

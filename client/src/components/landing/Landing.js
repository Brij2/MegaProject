import React, { Fragment } from 'react';
import Slider from '../layout/Slider';
import Footer from '../layout/Footer';

const Landing = () => {
  return (
    <Fragment>
      <Slider />
      <div className='row container'>
        <div className='col l6 m12'>
          <ul>
            <li className='row'>
              <p className='flow-text'>
                <i className='material-icons'>arrow_forward</i>
                
                  Post product at minimum price and get the maximum possible
                  profit
                
              </p>
            </li>
            <li className='row'>
              <p className='flow-text'>
                <i className='material-icons'>arrow_forward</i>
                
                  Bid only on interested product and get price worthy products
                
              </p>
            </li>
            <li className='row'>
              <p className='flow-text'>
                <i className='material-icons'>arrow_forward</i>
                More demand more is the profit
              </p>
            </li>
            <li className='row'>
              <p className='flow-text'>
                <i className='material-icons'>arrow_forward</i>
                
                  Buy on quality products from producer of your interest.
                
              </p>
            </li>
          </ul>
        </div>
        <div className='col l4 offset-l2  m12'>
          <div className='row'>
            {' '}
            <h1 className='flow-text'>
              Agro Bid
            </h1>
          </div>
          <div className='row'>
            <p className='flow-text'>
              
                Through this system we are proposing a bidding system between
                the producers and consumers through an admin. So basically a
                producer will have to register as a user into the database and
                then he a put any of his product into the system. After we will
                be extracting an approximate price from the database on previous
                trends and the demand. Once the producer is satisfied with the
                price the product, consumer will be allowed to bid on it.
                Whosoever bid the most will get the product.
              
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default (Landing);

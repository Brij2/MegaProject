import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import CreateProduct from '../product/CreateProduct';
import ActiveOrders from '../product/ActiveOrders';
import CompletedOrders from '../product/CompletedOrders';
import Reviews from '../product/Reviews';
import 'materialize-css';
const Producer = (props) => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s12'>
          <ul className='tabs'>
            <li className='tab col s3 '>
              <a href='#test1' className='green-text'>
                Create a Product
              </a>
            </li>
            <li className='tab col s3'>
              <a href='#test2' className='green-text'>
                Active orders
              </a>
            </li>
            <li className='tab col s3'>
              <a href='#test3' className='green-text'>
                Completed orders
              </a>
            </li>
            <li className='tab col s3'>
              <a href='#test4' className='green-text'>
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div id='test1' className='col s12'>
          <CreateProduct history={props.history} />
        </div>
        <div id='test2' className='col s12'>
          <ActiveOrders history={props.history} />
        </div>
        <div id='test3' className='col s12'>
          <CompletedOrders history={props.history} />
        </div>
        <div id='test4' className='col s12'>
          <Reviews history={props.history} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default (Producer);

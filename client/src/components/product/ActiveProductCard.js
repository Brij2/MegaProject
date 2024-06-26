import React, { Fragment, useContext, useEffect } from 'react';
import ProductContext from '../../context/product/productContext';
import M from 'materialize-css';

import {Timer} from 'react-compound-timer';
const ActiveProductCard = ({ product }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const productContext = useContext(ProductContext);
  const { finaliseBid, reBid } = productContext;

  let timeRemaining = 0;
  let d1 = new Date();
  let d2 = new Date(product && product.bid_due);
  if (d1 < d2) timeRemaining = Math.abs(d1 - d2);

  const onClick = () => {
    finaliseBid(product.id);
  };

  const onClickRebid = () => {
    reBid(product.id);
  };
  const modalName = `#modal${product.id}`;
  const modalId = `modal${product.id}`;
  return (
    <div className='col l6 s12'>
      <div className='row'>
        <div className='col s12'>
          <div className='card white darken-1'>
            <div className='card-content green-text'>
              <span className=' flow-text'>
                {product && product.product_name}
              </span>
              <div>
                <a
                  className='waves-effect waves-light btn modal-trigger'
                  href={modalName}
                >
                  See Product Pictures
                </a>
                <div id={modalId} className='modal'>
                  <div className='modal-content'>
                    <h4>Product Images</h4>
                    <div className='row'>
                      {product.images[0].images.map((item, index) => {
                        return (
                          <div className='row' key={index}>
                            <div className='col s12'>
                              <img
                                src={item}
                                alt=''
                                className='responsive-img'
                                // style={{ width: 200, height: 200 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <p className='truncate'>{product && product.product_desc}</p>
              <p className='flow-text'>
                Base Price : ₹{product && product.base_price}
              </p>
              <p className='flow-text'>
                Final Price : ₹{product && product.final_price}
              </p>
              {timeRemaining > 0 && (
                <p className='flow-text'>
                  Bid Due in :{' '}
                  <Timer
                    initialTime={timeRemaining}
                    direction='backward'
                    checkpoints={[
                      {
                        time: 0,
                        callback: () => (timeRemaining = 0),
                      },
                    ]}
                  >
                    {() => (
                      <Fragment>
                        <Timer.Days /> days <Timer.Hours />{' '}
                        hours <Timer.Minutes />{' '}
                        minutes <Timer.Seconds />{' '}
                        seconds{' '}
                      </Fragment>
                    )}
                  </Timer>
                </p>
              )}
              {timeRemaining === 0 && (
                <Fragment>
                  <div className='row'>
                    {' '}
                    <button className='btn indigo' onClick={onClick}>
                      Finalise Bid{' '}
                    </button>
                  </div>

                  <div className='row'>
                    <button className='btn blue' onClick={onClickRebid}>
                      Rebid
                    </button>
                  </div>
                </Fragment>
              )}

              <p className='flow-text'>
                Bid Last increased By:{' '}
                {product.lastBidder
                  ? product.lastBidder
                  : "Bid isn't increased yet"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default (ActiveProductCard);

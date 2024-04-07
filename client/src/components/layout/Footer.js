import React, { useContext, useEffect, useState } from 'react';
import M from 'materialize-css';
import AuthContext from '../../context/auth/authContext';
import FeedbackContext from '../../context/feedback/feedbackContext';
const Footer = (props) => {
  const authContext = useContext(AuthContext);
  const feedbackContext = useContext(FeedbackContext);
  const { user } = authContext;
  const { giveFeedback, error, message } = feedbackContext;
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    if (error) {
      M.toast({
        html: error,
        displayLength: 1000,
        classes: 'rounded red',
      });
    }
    if (message) {
      M.toast({
        html: message,
        displayLength: 1000,
        classes: 'rounded green',
      });
    }
  }, [error, message]);
  const [feedbackContent, setFeedbackContent] = useState('');
  const onChange = (e) => {
    setFeedbackContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (feedbackContent === '')
      M.toast({
        html: 'Please Enter All fields',
        displayLength: 1000,
        classes: 'rounded red',
      });
    else giveFeedback({ feedback_content: feedbackContent, userId: user.id });
  };
  return (
    <>
      <footer className='page-footer green' style={{ marginTop: '70vh' }}>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>
                Agro Bid
              </h5>
              <p className='grey-text text-lighten-4'>
                
                  A commission free web application for that benifits you all
                
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>
                Links
              </h5>
              <ul>
                <li>
                  <a className='grey-text text-lighten-3' href='/'>
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className='grey-text text-lighten-3 modal-trigger'
                    href='#modalfeedback'
                  >
                    Feedback
                  </a>
                  <div id='modalfeedback' className='modal green'>
                    <div className='modal-content'>
                      <h4>
                        Feedback Form
                      </h4>
                      <p>
                        Give feedback to admin for improvement
                      </p>
                      <form onSubmit={onSubmit}>
                        <div className='input-field white-text'>
                          <textarea
                            type='text'
                            id='textarea'
                            className='materialize-textarea white-text'
                            name='feedback_content'
                            value={feedbackContent}
                            onChange={onChange}
                          ></textarea>
                          <label
                            className='active white-text'
                            htmlFor='textarea '
                          >
                            Feedback content
                          </label>
                        </div>
                        <div className='input-field '>
                          <button
                            className='btn  yellow black-text '
                            type='submit'
                          >
                            Send feedback
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            © {new Date().getFullYear()} Copyright Agro Bid
            <a className='grey-text text-lighten-4 right' href='#!'>
              <i className='material-icons'>apps</i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default (Footer);

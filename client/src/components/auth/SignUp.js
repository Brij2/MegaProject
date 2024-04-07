import React, { useState, useContext, useEffect, Fragment } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import AuthContext from '../../context/auth/authContext';
const SignUp = (props) => {
  const authContext = useContext(AuthContext);
  const { error, message, register, isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error) {
      M.toast({
        html: error,
        displayLength: 4000,
        classes: 'rounded red',
        completeCallback: () => {
          props.history.push('/');
        },
      });
    }
    if (message) {
      M.toast({
        html: message,
        displayLength: 5000,
        classes: 'rounded green',
        completeCallback: () => {
          props.history.push('/signin');
        },
      });
    }
  }, [isAuthenticated, props, error, message]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    roles: [],
    password: '',
    password2: '',
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onChangeRoles = (e) => {
    setUser({
      ...user,
      roles: Array.from(e.target.selectedOptions, (option) => option.value),
    });
  };

  const { name, email, password, password2, roles } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || !roles)
      M.toast({
        html: 'Please Enter All fields',
        displayLength: 4000,
        classes: 'rounded red',
      });
    else if (password !== password2)
      M.toast({
        html: 'Passwords do not match',
        displayLength: 4000,
        classes: 'rounded red',
      });
    else if (password.length < 6 || password2.length < 6)
      M.toast({
        html: 'Please add atleast 6 charachters to password',
        displayLength: 4000,
        classes: 'rounded red',
      });
    else register({ username: name, email, password, roles });
  };

  return (
    <Fragment>
      <div className='row '>
        <form className='col m6 s12 offset-l3' onSubmit={onSubmit}>
          <div className='row center-align'>
            <h3 className='flow-text green-text'>
              Registration
            </h3>
          </div>
          <div className='row  center-align'>
            <div className='btn-floating btn-med'>
              <i className='material-icons pink white-text circle'>
                lock_outline
              </i>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 '>
              <input
                id='user_name'
                type='text'
                name='name'
                className='validate'
                value={name}
                onChange={onChange}
              />
              <label htmlFor='user_name'>
                User Name
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 '>
              <select
                multiple
                name='roles'
                value={roles}
                onChange={onChangeRoles}
              >
                <option value='producer'>producer</option>
                <option value='consumer'>consumer</option>
              </select>
              <label>
                Roles
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 '>
              <input
                id='email'
                type='email'
                className='validate'
                name='email'
                value={email}
                onChange={onChange}
              />
              <label htmlFor='email'>
                Email
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 '>
              <input
                id='password'
                type='password'
                className='validate'
                name='password'
                value={password}
                onChange={onChange}
              />
              <label htmlFor='password'>
                Password
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 '>
              <input
                id='password2'
                type='password'
                className='validate'
                name='password2'
                value={password2}
                onChange={onChange}
              />
              <label htmlFor='password2'>
                Confirm Password
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12 '>
              <button
                className='btn waves-effect waves-light green'
                type='submit'
              >
                SignUp
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default (SignUp);

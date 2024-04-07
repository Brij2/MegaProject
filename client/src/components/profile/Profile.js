import React, { Fragment, useContext, useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import M from 'materialize-css';
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext';
const Profile = (props) => {
  useEffect(() => {
    M.AutoInit();
  });
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const { user } = authContext;
  const {
    profile,
    message,
    error,
    createProfile,
    updateProfile,
    getProfile,
    loading,
  } = profileContext;

  const [editp, setEditp] = useState(false);
  const [editprofile, seteditProfile] = useState({
    address: '',
    contact_number: '',
    full_name: '',
  });
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (user) {
      if (user.id) {
        getProfile(user.id);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!localStorage.token) {
      props.history.push('/');
    }
    if (error) {
      M.toast({
        html: error,
        displayLength: 1000,
        classes: 'rounded red',
        completeCallback: () => {
          props.history.push('/');
        },
      });
    }
    if (message) {
      M.toast({
        html: message,
        displayLength: 1000,
        classes: 'rounded green',
        completeCallback: () => {
          props.history.push('/');
        },
      });
    }
  }, [error, message, props.history]);

  const clickEdit = (e) => {
    setEditp(true);

    seteditProfile({
      address: profile.address,
      contact_number: profile.contact_number,
      full_name: profile.full_name,
    });
  };

  const onChange = (e) => {
    seteditProfile({ ...editprofile, [e.target.name]: e.target.value });
  };
  const { address, contact_number, full_name } = editprofile;
  const onSubmit = (e) => {
    e.preventDefault();
    if (full_name === '' || contact_number === '' || address === '')
      M.toast({
        html: 'Please Enter All fields',
        displayLength: 1000,
        classes: 'rounded red',
      });
    else {
      updateProfile(
        { full_name, contact_number, address, pic: profile.pic },
        user.id
      );
      getProfile(user.id);
    }
  };

  const onSubmitCreate = async (e) => {
    e.preventDefault();

    if (full_name === '' || contact_number === '' || address === '')
      M.toast({
        html: 'Please Enter All fields',
        displayLength: 1000,
        classes: 'rounded red',
      });
    else {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', "dev_setups");
      data.append('cloud_name', "dri6phd63");
      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/dri6phd63/image/upload`,
          {
            method: 'post',
            body: data,
          }
        );
        const resData = await res.json();
        setUrl(resData.url);

        const userId = user.id;
        if (url) {
          createProfile({
            full_name,
            contact_number,
            address,
            userId,
            pic: url,
          });
          getProfile(user.id);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Fragment>
      <div className='row center-align ' style={{ marginBottom: 10 }}>
        {!profile && (
          <div className='col l5 s10 offset-s1'>
            <div className='row center-align'>
              <i className='material-icons large'>account_box</i>
            </div>
            <div className='row center-align'>
              <h1 className='flow-text'>
                Add Profile
              </h1>
            </div>

            <form onSubmit={onSubmitCreate}>
              <div className='file-field input-field row'>
                <div className='btn'>
                  <span>
                    <i className='material-icons'>photo</i>
                  </span>
                  <input
                    type='file'
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className='file-path-wrapper'>
                  <input
                    className='file-path validate'
                    type='text'
                    placeholder='Please upload your Profile Pic'
                  />
                </div>
              </div>
              <div className='input-field row'>
                <input
                  type='text'
                  id='name'
                  name='full_name'
                  value={editprofile.full_name}
                  onChange={onChange}
                />
                <label className='active' htmlFor='name'>
                  Full Name
                </label>
              </div>

              <div className='input-field row'>
                <input
                  type='number'
                  id='email'
                  className='validate'
                  name='contact_number'
                  value={editprofile.contact_number}
                  onChange={onChange}
                />
                <label className='active' htmlFor='email'>
                  Contact Number
                </label>
              </div>
              <div className='input-field row'>
                <textarea
                  type='text'
                  id='textarea'
                  className='materialize-textarea'
                  name='address'
                  value={editprofile.address}
                  onChange={onChange}
                ></textarea>
                <label className='active' htmlFor='textarea'>
                  Address
                </label>
              </div>
              <div className='input-field row'>
                <button className='btn btn-large green col s12' type='submit'>
                  Create Profile
                </button>
              </div>
            </form>
          </div>
        )}
        {profile && editp && (
          <div className='col l5 s10 offset-s1'>
            <div className='row center-align'>
              <i className='material-icons large'>account_box</i>
            </div>
            <div className='row center-align'>
              <h1 className='flow-text'>
                Update Profile
              </h1>
            </div>
            <form onSubmit={onSubmit}>
              <div className='input-field row'>
                <input
                  type='text'
                  id='name'
                  name='full_name'
                  value={editprofile.full_name}
                  onChange={onChange}
                />
                <label className='active' htmlFor='name'>
                  Full Name
                </label>
              </div>
              <div className='input-field row'>
                <input
                  type='number'
                  id='email'
                  className='validate'
                  name='contact_number'
                  value={editprofile.contact_number}
                  onChange={onChange}
                />
                <label className='active' htmlFor='email'>
                  Contact Number
                </label>
              </div>
              <div className='input-field row'>
                <textarea
                  type='text'
                  id='textarea'
                  className='materialize-textarea'
                  name='address'
                  value={editprofile.address}
                  onChange={onChange}
                ></textarea>
                <label className='active' htmlFor='textarea'>
                  Address
                </label>
              </div>
              <div className='input-field row'>
                <button className='btn btn-large green col s12' type='submit'>
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        )}
        {profile && !loading && (
          <div className='col l5 offset-l1 s10 offset-s1'>
            <div className='card green darken-1'>
              <div className='card-content white-text'>
                <span className='card-title  center-align'>
                  <i className='material-icons small '>account_box</i>
                  <br />
                  Current Profile
                </span>

                <ul className='collapsible '>
                  <li className='active'>
                    <div className='collapsible-header green'>
                      Profile Pic
                    </div>
                    <div className='collapsible-body '>
                      <img
                        src={profile.pic}
                        alt=''
                        className='circle responsive-img'
                        style={{ width: 100, height: 100 }}
                      />
                    </div>
                  </li>

                  <li>
                    <div className='collapsible-header green'>
                      <i className='material-icons'>person</i>
                      Full Name
                    </div>
                    <div className='collapsible-body'>
                      <span>{profile.full_name}</span>
                    </div>
                  </li>
                  <li>
                    <div className='collapsible-header  green'>
                      <i className='material-icons'>contact_mail</i>
                      Email
                    </div>
                    <div className='collapsible-body'>
                      <span>{user.email}</span>
                    </div>
                  </li>
                  <li>
                    <div className='collapsible-header  green'>
                      <i className='material-icons'>contact_phone</i>
                      Contact Number
                    </div>
                    <div className='collapsible-body'>
                      <span>{profile.contact_number}</span>
                    </div>
                  </li>
                  <li>
                    <div className='collapsible-header  green'>
                      <i className='material-icons'>whatshot</i>
                      Address
                    </div>
                    <div className='collapsible-body'>
                      <span>{profile.address}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='card-action'>
                <button className='btn  grey' onClick={clickEdit}>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </Fragment>
  );
};

export default (Profile);

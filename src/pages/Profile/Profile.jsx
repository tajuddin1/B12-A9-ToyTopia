import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import defautlUserImg from '../../assets/image/user.png'
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import swal from 'sweetalert';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState();
  const [photoError, setPhotoError] = useState();
  const hanleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    if (!name || !photoUrl) {
      if (!name) {
        setNameError("Please type your name");
        return
      }
      if (!photoUrl) {
        setPhotoError("Please type your photo url");
        return
      }
    }

    updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
      .then(() => {
        console.log("Profile Updated!");
        const updatedUser = auth.currentUser;
        setUser({ ...updatedUser });
        swal("Success!", "Your profile has been updated!", "success");
      }).catch(err => {
        console.log(err.message);
      })
    e.target.reset();
  }
  return (
    <>
      <title>Profile - ToyTopia</title>
      <div className='py-25 md:py-30 bg-mist-400'></div>
      <div className="max-w-260 mx-auto -mt-20 pb-20 px-4">
        <div className="bg-base-100 rounded-lg flex items-center flex-col gap-6 md:gap-10 pb-16">
          <div className="w-30 h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full -mt-15 md:-mt-20 bg-base-100 border-8 border-primary shadow">
            {
              user &&
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user?.photoURL || defautlUserImg}
                  onError={(e) => { e.currentTarget.src = defautlUserImg}}
                  alt="User"
                />
            }
          </div>
          <div className="text-center">
            <h1 className='text-4xl font-bold mb-3'>{user.displayName}</h1>
            <p><span className='text-mist-700'>{user.email}</span></p>
          </div>
            <div className="h-px w-full bg-mist-200"></div>
          <div className='w-full px-10'>
            <form onSubmit={hanleProfileUpdate} className='mx-auto w-full md:w-lg'>
              <fieldset className="fieldset">
                <h1 className="text-2xl font-bold text-center">Update Profile</h1>

                <label className="label">Name</label>
                <input
                  type="text"
                  onChange={() => setNameError('')} name='name'
                  className={`input w-full ${nameError ? "border-red-500" : ""}`}
                  placeholder="Name"
                />
                <p className="text-sm text-red-500">{ nameError }</p>

                <label className="label">PhotoUrl</label>
                <input
                  type="text"
                  onChange={() => setPhotoError('')} name='photoUrl'
                  className={`input w-full ${photoError ? "border-red-500" : ""}`}
                  placeholder="Photo url"
                />
                <p className="text-sm text-red-500">{photoError}</p>
                
                <button className="btn btn-accent text-base-100 mt-4">Update</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import defautlUserImg from '../../assets/image/user.png'
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const hanleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
      .then(() => {
        console.log("Profile Updated!");
        const updatedUser = auth.currentUser;
        setUser({ ...updatedUser });
      }).catch(err => {
        console.log(err.message);
      })
    e.target.reset();
  }
  return (
    <>
      <div className='py-30 bg-mist-400'></div>
      <div className="max-w-260 mx-auto -mt-20 pb-20">
        <div className="bg-base-100 rounded-lg flex items-center flex-col gap-10 pb-16">
          <div className="w-60 h-60 rounded-full -mt-20 bg-base-100 border-8 border-primary shadow">
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
          <div>
            <form onSubmit={hanleProfileUpdate} className='w-lg'>
              <fieldset className="fieldset">
                <h1 className="text-2xl font-bold text-center">Update Profile</h1>

                <label className="label">Name</label>
                <input type="text" name='name' className="input w-full" placeholder="Name" />

                <label className="label">PhotoUrl</label>
                <input type="text" name='photoUrl' className="input w-full" placeholder="Photo Url" />

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
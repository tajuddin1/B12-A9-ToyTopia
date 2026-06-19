import { useContext, useState } from 'react';
import { HiLink, HiOutlineMail, HiOutlineUserCircle } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { registerWithEmail, loginWithGoogle } = useContext(AuthContext);
  const handleEmailSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    registerWithEmail(email, password)
      .then(result => {
        console.log(result.user);
        updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
          .then(() => {
            console.log("Profile Updated!");
          }).catch(err => {
            console.log(err.message);
          })
        e.target.reset();
      }).catch(err => {
        console.log(err.message);
      })
  }

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user);
      }).catch(err => {
        console.log(err.message);
      })
  }

  return (
    <div className='py-20'>
      <div className='card max-w-150 mx-auto p-10 bg-mist-50 shadow'>
        <form onSubmit={handleEmailSignUp}>
          <fieldset className="fieldset">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <label className="label">Name</label>
            <div className='relative'>
              <input type="text" name='name' className="input w-full pl-10" placeholder="Ex: John Smith" />
              <HiOutlineUserCircle className='text-mist-700 w-6 h-6 absolute left-2 top-2'/>
            </div>
            <label className="label">Photo URL</label>
            <div className='relative'>
              <input type="text" name='photoUrl' className="input w-full pl-10" placeholder="Ex: https://www.example.com/image.png" />
              <HiLink className='text-mist-700 w-6 h-6 absolute left-2 top-2'/>
            </div>
            <label className="label">Email</label>
            <div className='relative'>
              <input type="email" name='email' className="input w-full pl-10" placeholder="Ex: example@gmail.com" />
              <HiOutlineMail className='text-mist-700 w-6 h-6 absolute left-2 top-2'/>
            </div>
            <label className="label">Password</label>
            <div className='relative'>
              <input type={!isVisible ? "password" : "text"} name='password' className="input w-full pl-10" placeholder="Password" />
              <RiLockPasswordLine className='text-mist-700 w-6 h-6 absolute left-2 top-2' />
              <button type='button' className='absolute right-2.5 top-2.5' onClick={() => setIsVisible(!isVisible) }>
                {
                  isVisible ?
                  <BsEyeFill className='w-5 h-5 text-mist-700' />
                  : <BsEyeSlashFill className='w-5 h-5 text-mist-700' />
                }
              </button>
            </div>
            <button className="btn btn-accent text-base-100 mt-4 mb-3">Register</button>
            <div className='flex justify-between items-center'>
              <p className='text-sm'>Already have an account? <Link to={`/login`} className='link link-accent'>Login</Link></p>
            </div>
          </fieldset>
        </form>
        <div className="divider text-sm text-mist-400">Or</div>
        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Create Account with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
import React, { useContext, useRef, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
const Login = () => {
  const [email, setEmail] = useState(null)
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { loginWithEmail, loginWithGoogle } = useContext(AuthContext);
  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log(email);
    const password = e.target.password.value;

    loginWithEmail(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
      }).catch(err => {
        alert(err.message)
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
        <form onSubmit={handleEmailLogin}>
          <fieldset className="fieldset">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <label className="label">Email</label>
            <div className='relative'>
              <input  onChange={(e) => setEmail(e.target.value)} type="email" name='email' className="input w-full pl-10" placeholder="Email" />
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

            <button className="btn btn-accent text-base-100 mt-4 mb-3">Login</button>
            <div className='flex justify-between items-center'>
              <p className='text-sm'>Don't have an account? <Link to={`/register`} className='link link-accent'>Register</Link></p>
              <button type='button'
                onClick={() => navigate("/forget-password", { state: email })}
                className='link link-accent text-sm'>Forgot Password?</button>
            </div>
          </fieldset>
        </form>
        <div className="divider text-sm text-mist-400">Continue with</div>
        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
import { useContext } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
const ForgetPassword = () => {
  const location = useLocation();
  console.log(location);
  const email = location.state?.email;
  console.log(email);

  const {forgetPassword} = useContext(AuthContext);
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        console.log("Password reset email sent! You will receive a link.");
        e.target.reset();
      }).catch(err => {
        console.log(err.message);
      })
  }

  return (
    <div className='py-20'>
      <div className='card max-w-150 mx-auto p-10 bg-mist-50 shadow'>
        <form onSubmit={handleForgetPassword}>
          <fieldset className="fieldset">
            <h1 className="text-2xl font-bold text-center">Forget Password</h1>
            <label className="label">Email</label>
            <div className='relative'>
              <input type="email" name='email' value={email} className="input w-full pl-10" placeholder="Email" />
              <HiOutlineMail className='text-mist-300 w-6 h-6 absolute left-2 top-2'/>
            </div>

            <button className="btn btn-accent text-base-100 mt-4 mb-3">Reset</button>
            <div className='flex justify-between items-center'>
              <p className='text-sm'>Don't have an account? <Link to={`/register`} className='link link-accent'>Register</Link></p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
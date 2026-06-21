import { useContext, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import swal from 'sweetalert';

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  console.log(location);
  const currentEmail = location.state;

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      setError("Email is required!");
      return
    }
    forgetPassword(email)
      .then(() => {
        swal({
          title: "Password reset email sent!",
          text: `You will receive a password reset link!`,
          icon: "success",
        }).then(() => {
          window.location.href = "https://mail.google.com";
        });

        e.target.reset();
      }).catch(err => {
        console.log(err.message);
        setError(err.message);
      })
  }

  return (
    <div className='py-20'>
      <title>Forget Password - ToyTopia</title>
      <div className='card max-w-150 mx-auto p-10 bg-mist-50 shadow'>
        <form onSubmit={handleForgetPassword}>
          <fieldset className="fieldset">
            <h1 className="text-2xl font-bold text-center">Forget Password</h1>
            <label className="label">Email</label>
            <div className='relative'>
              <input
                onChange={() => setError("")} type="email"
                name='email' defaultValue={currentEmail}
                className={`input w-full pl-10 ${error ? "border-red-500": ""}`} placeholder="Email"
              />
              <HiOutlineMail className='text-mist-300 w-6 h-6 absolute left-2 top-2' />
              <p className="text-sm text-red-500">{ error }</p>
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
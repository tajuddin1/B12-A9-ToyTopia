import { useContext, useState } from 'react';
import { HiLink, HiOutlineMail, HiOutlineUserCircle } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import swal from 'sweetalert';

const Register = () => {
  const [nameError, setNameError] = useState();
  const [photoError, setPhotoError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  
  const from = location.state?.from || '/';
  const [isVisible, setIsVisible] = useState(false);
  const { registerWithEmail, loginWithGoogle, setUser } = useContext(AuthContext);
  const handleEmailSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name || !photoUrl || !email || !password) {
      if (!name) {
        setNameError("Name is required")
        return
      }

      if (!photoUrl) {
        setPhotoError("Photo Url is required")
        return
      }

      if (!email) {
        setEmailError("Email is required")
        return
      }

      if (!password) {
        setPasswordError("Password is required")
        return
      }
    }

    if (password) {

      if (!/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
        setPasswordError("Password must have a lowercase and a upprcase letter")
        return
      }

      if (password.length < 6) {
        setPasswordError("Password must be 6 Carecters or more.")
        return
      }

      if (!/[a-z]/.test(password)) {
        setPasswordError("Password must have a lowercase letter")
        return
      }

      if (!/[A-Z]/.test(password)) {
        setPasswordError("Password must have an uppercase letter")
        return
      }
    }

    registerWithEmail(email, password)
      .then(result => {
        console.log(result.user);
        updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
          .then(() => {
            console.log("Profile Updated!");
            const updatedUser = auth.currentUser;
            setUser({ ...updatedUser });
            swal({
              title: "Congratulation!",
              text: "Account Created Successfully.",
              icon: "success",
            }).then(() => {
              navigate(from);
            })
          }).catch(err => {
            console.log(err.message);
          })
        e.target.reset();
      }).catch(err => {
        console.log(err.message);
        if (err.message.includes('email-already-in-use')) {
          swal({
            title: "Opps!",
            text: "This email is already in use. Please try another email.",
            icon: "error",
          })
          return
        }
        swal({
          title: "Opps!",
          text: "Something went wrong!",
          icon: "error",
        })
      })
  }

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user);
        swal({
          title: "Congratulation!",
          text: "Account Created Successfully.",
          icon: "success",
        }).then(() => {
          navigate(from);
        })
      }).catch(err => {
        console.log(err.message);
        swal({
          title: "Opps!",
          text: "Something went wrong!",
          icon: "error",
        })
      })
  }

  return (
    <div className='py-20'>
      <title>Register - ToyTopia</title>
      <div className='card max-w-150 mx-auto p-10 bg-mist-50 shadow'>
        <form onSubmit={handleEmailSignUp}>
          <fieldset className="fieldset">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <label className="label">Name</label>
            <div className='relative'>
              <input
                onChange={() => { setNameError(null) }} type="text" name='name'
                className={`input w-full pl-10 ${nameError ? "border-red-500" : ""}`} placeholder="Ex: John Smith"
              />
              <HiOutlineUserCircle className='text-mist-700 w-6 h-6 absolute left-2 top-2' />
              <p className='text-sm text-red-500'>{nameError}</p>
            </div>
            <label className="label">Photo URL</label>
            <div className='relative'>
              <input
                onChange={() => { setPhotoError(null) }} type="text" name='photoUrl'
                className={`input w-full pl-10 ${photoError ? "border-red-500" : ""}`} placeholder="Ex: https://www.example.com/image.png" />
              <HiLink className='text-mist-700 w-6 h-6 absolute left-2 top-2' />
              <p className='text-sm text-red-500'>{photoError}</p>
            </div>
            <label className="label">Email</label>
            <div className='relative'>
              <input
                onChange={() => { setEmailError(null) }} type="email" name='email'
                className={`input w-full pl-10 ${emailError ? "border-red-500" : ""}`}
                placeholder="Email"
              />
              <HiOutlineMail className='text-mist-700 w-6 h-6 absolute left-2 top-2' />
              <p className='text-sm text-red-500'>{emailError}</p>
            </div>
            <label className="label">Password</label>
            <div className='relative'>
              <input
                type={!isVisible ? "password" : "text"} name='password'
                onChange={() => setPasswordError(null)}
                className={`input w-full pl-10 ${passwordError ? "border-red-500" : ""}`} placeholder="Password" />
              <RiLockPasswordLine className='text-mist-700 w-6 h-6 absolute left-2 top-2' />
              <button type='button' className='absolute right-2.5 top-2.5' onClick={() => setIsVisible(!isVisible) }>
                {
                  isVisible ?
                  <BsEyeFill className='w-5 h-5 text-mist-700' />
                  : <BsEyeSlashFill className='w-5 h-5 text-mist-700' />
                }
              </button>
              <p className='text-sm text-red-500'>{passwordError}</p>
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
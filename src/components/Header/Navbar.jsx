import { useContext } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import defautlUserImg from '../../assets/image/user.png'
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {console.log("logout success")}).catch(err => console.log(err.message))
  }

  return (
    <>
      <div className='bg-black'>
        <div className='max-w-340 mx-auto flex justify-between items-center py-1.5 px-2'>
          <p className='text-base-100 font-bold text-sm uppercase'>Flash Sale 30% OFF!</p>
          <div className='flex justify-center items-center gap-5'>
            <Link><FaFacebookF className='text-base-100 hover:text-accent'/></Link>
            <Link><FaInstagram className='text-base-100 hover:text-accent'/></Link>
            <Link><FaTiktok className='text-base-100 hover:text-accent'/></Link>
          </div>
        </div>
      </div>
      <div className="navbar max-w-340 mx-auto py-1.5 min-h-auto">
        <div className="navbar-start">
          <div className="dropdown mr-1">
            <div tabIndex={0} role="button" className="text-base-100 p-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow">
              <li><NavLink>Home</NavLink></li>
              <li><NavLink>Shop</NavLink></li>
              <li><NavLink>Profile</NavLink></li>
            </ul>
          </div>
          <Link className="text-base-100 text-3xl font-bold font-BG">Toy<span className='text-[#ff6200]'>Topia</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to={`/`} className="navLink text-base text-base-100">Home</NavLink></li>
            <li><NavLink to={`/shop`} className="navLink text-base text-base-100">Shop</NavLink></li>
            <li><NavLink to={`/profile`} className="navLink text-base text-base-100">Profile</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            loading ? <span className="loading loading-spinner loading-xl"></span> : (
              user ? (
                <>
                  <div className='w-10 h-10 rounded-full border-2 border-primary mr-3 relative group'>
                    <img className='w-full rounded-full h-full object-cover' src={user.photoURL || defautlUserImg} onError={(e) => e.target.src = defautlUserImg} alt="" />
                    <p className="p-2 bg-base-100 absolute z-5 whitespace-nowrap top-11 right-0 rounded font-bold hidden group-hover:block">
                      {user.displayName}
                    </p>
                  </div>
                  <button onClick={handleLogOut} className="btn shadow-none">Logout</button>
                </>
              ) : (
                <Link to={`/login`} className="btn shadow-none">Login</Link>
              )
            )
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
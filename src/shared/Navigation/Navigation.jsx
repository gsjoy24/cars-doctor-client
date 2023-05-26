import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import profileImg from '../../../src/assets/icons/profile.png';

const Navigation = () => {
	const { user, logOutUser } = useContext(AuthContext);

	const handleLogOut = () => {
		logOutUser()
			.then(() => {})
			.catch((err) => console.log(err.message));
	};
	const navItems = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>

			<li>
				{/* <NavLink hre>Services</NavLink> */}
				<a href='#services'>Services</a>
			</li>
			{user ? (
				<>
					<li>
						<NavLink to='/bookings'>My Bookings</NavLink>
					</li>
					<li>
						<button title='logout' onClick={handleLogOut} className='btn text-white'>
							Log Out
						</button>
					</li>
				</>
			) : (
				<li>
					<NavLink to='/login'>Log In</NavLink>
				</li>
			)}
		</>
	);
	return (
		<div className='navbar bg-base-100 px-8'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-8 w-8'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52 space-y-3'>
						{navItems}
					</ul>
				</div>
				<Link to='/'>
					<img className='max-h-16' src={logo} alt='car doctor' />
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 space-x-3'>{navItems}</ul>
			</div>
			<div className='navbar-end space-x-3'>
				{user && (
					<img
						className='w-12 rounded-full'
						title={user.email}
						src={user?.photoURL ? user.photoURL : profileImg}
						alt={user?.displayName}
					/>
				)}
				<button className='btn btn-outline hover:bg-[#FF3811] hidden sm:block hover:border-stone-100 border-[#ff3811] text-[#ff3811]'>
					Appointment
				</button>
			</div>
		</div>
	);
};

export default Navigation;

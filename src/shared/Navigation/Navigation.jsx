import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navigation = () => {
	const navItems = (
		<>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<Link to='/services'>Services</Link>
			</li>
			<li>
				<Link to='/blog'>Blog</Link>
			</li>
			<li>
				<Link to='/contact'>Contact</Link>
			</li>
		</>
	);
	return (
		<div className='navbar bg-base-100 px-8'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</label>
					<ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
						{navItems}
					</ul>
				</div>
				<Link to='/'>
					<img className='max-h-16' src={logo} alt='car doctor' />
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{navItems}</ul>
			</div>
			<div className='navbar-end'>
				<button className='btn btn-outline hover:bg-[#FF3811] hover:border-stone-100 border-[#ff3811] text-[#ff3811]'>
					Appointment
				</button>
			</div>
		</div>
	);
};

export default Navigation;

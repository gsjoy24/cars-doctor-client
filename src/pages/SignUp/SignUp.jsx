import login_img from '../../../src/assets/images/login/login.svg';
import facebook_img from '../../../src/assets/icons/facebook.png';
import google_img from '../../../src/assets/icons/google.png';
import github_img from '../../../src/assets/icons/github.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
const SignUp = () => {
	const { createUser } = useContext(AuthContext);
	const [error, setError] = useState('');

	const handleSignUp = (event) => {
		setError('');
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((result) => console.log(result.user))
			.catch((err) => setError(err.message));
	};
	return (
		<div className='hero min-h-screen '>
			<div className='hero-content flex-col lg:flex-row gap-10 lg:gap-20'>
				<div className='text-center w-3/4 lg:w-1/2  lg:text-left'>
					<img src={login_img} alt='' />
				</div>

				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<div className='card-body'>
						<h2 className='text-center font-bold text-3xl'>Sign Up</h2>
						<form onSubmit={handleSignUp}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input type='text' name='name' placeholder='Name' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input type='email' name='email' placeholder='email' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input type='password' name='password' placeholder='password' className='input input-bordered' />
							</div>
							<p className='text-red-500 text-xs mt-4'>{error}</p>
							<div className='form-control mt-6'>
								<input type='submit' className='btn bg-[#ff3811] hover:bg-[#ff3811] border-0' value='Sign Up' />
							</div>

							<div className='text-center mt-5 space-y-5'>
								<p className='text-sm text-gray-500'>or continue with</p>
								<div className='flex gap-4 justify-center '>
									<img className='w-10 p-2 rounded-full bg-slate-200 cursor-pointer' src={google_img} alt='google' />
									<img
										className='w-10 p-2 rounded-full bg-slate-200 cursor-pointer'
										src={facebook_img}
										alt='facebook'
									/>
									<img className='w-10 p-2 rounded-full bg-slate-200 cursor-pointer' src={github_img} alt='github' />
								</div>
								<p className='text-sm text-gray-500 flex justify-center items-center gap-2'>
									<span>Have an account?</span>
									<Link to='/login' className='text-[#ff3811] font-semibold'>
										Login
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

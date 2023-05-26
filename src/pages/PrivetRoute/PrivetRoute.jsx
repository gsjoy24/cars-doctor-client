import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
	const { user, loader } = useContext(AuthContext);

	const location = useLocation();

	if (loader) {
		return (
			<div className='w-full min-h-[80vh] flex justify-center items-center'>
				<button className='btn loading btn-lg orange-field'>loading</button>
			</div>
		);
	}
	if (user?.email) {
		return <div>{children}</div>;
	}
	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;

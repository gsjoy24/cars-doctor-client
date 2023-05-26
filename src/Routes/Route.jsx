import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Main from '../Layouts/Main';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import CheckOut from '../pages/CheckOut/CheckOut';
import Bookings from '../pages/Bookings/Bookings';
import PrivetRoute from '../pages/PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/sign_up',
				element: <SignUp />
			},
			{
				path: '/services/:id',
				element: (
					<PrivetRoute>
						<CheckOut />
					</PrivetRoute>
				),
				loader: ({ params }) => fetch(`https://cars-doctor-server-iota.vercel.app/services/${params.id}`)
			},
			{
				path: '/bookings',
				element: (
					<PrivetRoute>
						<Bookings />
					</PrivetRoute>
				)
			}
		]
	}
]);
export default router;

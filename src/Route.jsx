import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Main from './Layouts/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

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
			}
		]
	}
]);
export default router;

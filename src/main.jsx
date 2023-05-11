import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route.jsx';
import AuthProvider from './Contexts/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<div className='max-w-7xl mx-auto'>
			<RouterProvider router={router} />
		</div>
	</AuthProvider>
);

import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider';
import router from './Routes/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<div className='max-w-7xl mx-auto'>
			<RouterProvider router={router} />
		</div>
	</AuthProvider>
);

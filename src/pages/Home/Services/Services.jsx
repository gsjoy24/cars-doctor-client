import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('https://cars-doctor-server-iota.vercel.app/services')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div className='pb-12' id='services'>
			{/* section ttile */}
			<div className='max-w-2xl mx-auto text-center '>
				<h4 className='text-2xl font-bold text-[#FF3811]'>Service</h4>
				<h2 className='text-5xl font-bold my-6'>our Service Area</h2>
				<p>
					the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
					even slightly believable.
				</p>
			</div>

			{/* services */}
			{services.length > 0 ? (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7'>
					{services.map((service) => (
						<ServiceCard key={service._id} service={service} />
					))}
				</div>
			) : (
				<div className='w-full min-h-[30vh] flex justify-center items-center'>
					<button className='btn loading btn-lg orange-field'>loading</button>
				</div>
			)}
		</div>
	);
};

export default Services;

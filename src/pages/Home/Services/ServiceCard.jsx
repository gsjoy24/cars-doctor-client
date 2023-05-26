import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
	const { _id, title, price, img } = service;

	return (
		<div className='card w-80 bg-base-100 shadow-xl border mx-auto'>
			<figure className='px-5 pt-5'>
				<img src={img} alt='img' className='rounded-xl h-44' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title font-bold text-gray-700'>{title}</h2>
				<div className='flex justify-between items-center'>
					<p className='text-[#FF3811] font-semibold'>Price: {price}</p>
					<Link to={`/services/${_id}`} className='btn orange-field'>
						Book Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;

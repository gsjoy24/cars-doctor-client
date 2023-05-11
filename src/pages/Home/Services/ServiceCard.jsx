const ServiceCard = ({ service }) => {
	const { title, price, img } = service;

	return (
		<div className='card w-80 bg-base-100 shadow-xl border mx-auto'>
			<figure className='px-5 pt-5'>
				<img src={img} alt='Shoes' className='rounded-xl' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title font-bold text-gray-700'>{title}</h2>
				<div className='flex justify-between items-center'>
					<p className='text-[#FF3811] font-semibold'>Price: {price}</p>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;

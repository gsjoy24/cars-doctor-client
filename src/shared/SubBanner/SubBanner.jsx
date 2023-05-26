import bgImg from '../../../src/assets/images/banner/4.jpg';
const SubBanner = ({ children }) => {
	return (
		<div className={`h-60 relative rounded-lg m-3`}>
			<img className='w-full h-full object-cover rounded-lg' src={bgImg} alt='' />
			<h2 className='absolute top-0 text-white rounded-lg text-3xl md:text-5xl font-bold w-full h-full bg-black bg-opacity-50 pl-7 flex items-center'>
				{children}
			</h2>
			<div className='bg-[#ff3811] max-w-fit p-3 text-white font-semibold absolute bottom-0 left-1/2 -translate-x-14 rounded-t-xl'>
				<p>Home/{children}</p>
			</div>
		</div>
	);
};

export default SubBanner;
// style={{ backgroundImage: { bgImg } }}

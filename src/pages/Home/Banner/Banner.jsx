import one from '../../../assets/images/banner/1.jpg';
import two from '../../../assets/images/banner/2.jpg';
import three from '../../../assets/images/banner/3.jpg';
import four from '../../../assets/images/banner/4.jpg';
import five from '../../../assets/images/banner/5.jpg';
import six from '../../../assets/images/banner/6.jpg';

const Banner = () => {
	return (
		<div className='carousel w-full h-[600px] mt-5'>
			{/* first */}
			<div id='slide1' className='carousel-item relative w-full'>
				<img src={one} className='w-full rounded-xl' />
				<div className='absolute text-white h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl'>
					<div className='ml-8 sm:w-1/2 lg:w-1/3'>
						<h1 className='text-5xl font-bold mb-4 leading-tight'>Affordable Price For Car Servicing</h1>
						<p>
							There are many variations of passages of available, but the majority have suffered alteration in some form
						</p>
						<div className='mt-8'>
							<button className='orange-field border-white'>Discover More</button>
							<button className='btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#fff] text-[#fff]'>
								Latest Project
							</button>
						</div>
					</div>
				</div>
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  bottom-0 justify-end'>
					<a href='#slide6' className='btn btn-circle bg-slate-100 bg-opacity-50 border-0'>
						❮
					</a>
					<a href='#slide2' className='btn btn-circle ml-5 bg-[#FF3811]'>
						❯
					</a>
				</div>
			</div>

			{/* second */}
			<div id='slide2' className='carousel-item relative w-full'>
				<img src={two} className='w-full rounded-xl' />
				<div className='absolute text-white h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl'>
					<div className='ml-8 sm:w-1/2 lg:w-1/3 w-1/3'>
						<h1 className='text-5xl font-bold mb-4 leading-tight'>Affordable Price For Car Servicing</h1>
						<p>
							There are many variations of passages of available, but the majority have suffered alteration in some form
						</p>
						<div className='mt-8'>
							<button className='orange-field'>Discover More</button>
							<button className='btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#fff] text-[#fff]'>
								Latest Project
							</button>
						</div>
					</div>
				</div>
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  bottom-0 justify-end'>
					<a href='#slide1' className='btn btn-circle bg-slate-100 bg-opacity-50 border-0'>
						❮
					</a>
					<a href='#slide3' className='btn btn-circle ml-5 bg-[#FF3811]'>
						❯
					</a>
				</div>
			</div>

			{/* third */}
			<div id='slide3' className='carousel-item relative w-full'>
				<img src={three} className='w-full rounded-xl' />
				<div className='absolute text-white h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl'>
					<div className='ml-8 sm:w-1/2 lg:w-1/3 w-1/3'>
						<h1 className='text-5xl font-bold mb-4 leading-tight'>Affordable Price For Car Servicing</h1>
						<p>
							There are many variations of passages of available, but the majority have suffered alteration in some form
						</p>
						<div className='mt-8'>
							<button className='orange-field'>Discover More</button>
							<button className='btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#fff] text-[#fff]'>
								Latest Project
							</button>
						</div>
					</div>
				</div>
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  bottom-0 justify-end'>
					<a href='#slide2' className='btn btn-circle bg-slate-100 bg-opacity-50 border-0'>
						❮
					</a>
					<a href='#slide4' className='btn btn-circle ml-5 bg-[#FF3811]'>
						❯
					</a>
				</div>
			</div>

			{/* fourth */}
			<div id='slide4' className='carousel-item relative w-full'>
				<img src={four} className='w-full rounded-xl' />
				<div className='absolute text-white h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl'>
					<div className='ml-8 sm:w-1/2 lg:w-1/3 w-1/3'>
						<h1 className='text-5xl font-bold mb-4 leading-tight'>Affordable Price For Car Servicing</h1>
						<p>
							There are many variations of passages of available, but the majority have suffered alteration in some form
						</p>
						<div className='mt-8'>
							<button className='orange-field'>Discover More</button>
							<button className='btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#fff] text-[#fff]'>
								Latest Project
							</button>
						</div>
					</div>
				</div>
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  bottom-0 justify-end'>
					<a href='#slide3' className='btn btn-circle bg-slate-100 bg-opacity-50 border-0'>
						❮
					</a>
					<a href='#slide5' className='btn btn-circle ml-5 bg-[#FF3811]'>
						❯
					</a>
				</div>
			</div>

			{/* fifth */}
			<div id='slide5' className='carousel-item relative w-full'>
				<img src={five} className='w-full rounded-xl' />
				<div className='absolute text-white h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl'>
					<div className='ml-8 sm:w-1/2 lg:w-1/3 w-1/3'>
						<h1 className='text-5xl font-bold mb-4 leading-tight'>Affordable Price For Car Servicing</h1>
						<p>
							There are many variations of passages of available, but the majority have suffered alteration in some form
						</p>
						<div className='mt-8'>
							<button className='orange-field'>Discover More</button>
							<button className='btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#fff] text-[#fff]'>
								Latest Project
							</button>
						</div>
					</div>
				</div>
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  bottom-0 justify-end'>
					<a href='#slide4' className='btn btn-circle bg-slate-100 bg-opacity-50 border-0'>
						❮
					</a>
					<a href='#slide6' className='btn btn-circle ml-5 bg-[#FF3811]'>
						❯
					</a>
				</div>
			</div>

			{/* third */}
			<div id='slide6' className='carousel-item relative w-full'>
				<img src={six} className='w-full rounded-xl' />
				<div className='absolute text-white h-full w-full flex items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl'>
					<div className='ml-8 sm:w-1/2 lg:w-1/3 w-1/3'>
						<h1 className='text-5xl font-bold mb-4 leading-tight'>Affordable Price For Car Servicing</h1>
						<p>
							There are many variations of passages of available, but the majority have suffered alteration in some form
						</p>
						<div className='mt-8'>
							<button className='orange-field'>Discover More</button>
							<button className='btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#fff] text-[#fff]'>
								Latest Project
							</button>
						</div>
					</div>
				</div>
				<div className='absolute flex  transform -translate-y-1/2 left-5 right-5  bottom-0 justify-end'>
					<a href='#slide5' className='btn btn-circle bg-slate-100 bg-opacity-50 border-0'>
						❮
					</a>
					<a href='#slide1' className='btn btn-circle ml-5 bg-[#FF3811]'>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;

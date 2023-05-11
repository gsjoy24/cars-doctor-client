/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
	return (
		<div className='hero min-h-screen py-6'>
			<div className='hero-content flex-col lg:flex-row'>
				<div className='relative lg:w-1/2 m-4'>
					<img src={person} className='w-3/4 rounded-lg shadow-2xl' />
					<img src={parts} className='w-1/2 absolute top-1/2 right-14 border-8 border-white rounded-lg shadow-2xl' />
				</div>
				<div className='lg:w-1/2 p-10'>
					<div className='max-w-lg'>
                  <h3 className='text-2xl font-bold text-[#FF3811] mb-6'>About Us</h3>
                  <h3 className='text-6xl font-bold leading-tight'>We are qualified & of experience in this field</h3>
                  <p className='py-3'>
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                     // eslint-disable-next-line react/no-unescaped-entities
                     some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <p className='py-3 mb-4'>
                     the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                     even slightly believable.
                  </p>
                  <button className='orange-field'>Discover More</button>
               </div>
				</div>
			</div>
		</div>
	);
};

export default About;

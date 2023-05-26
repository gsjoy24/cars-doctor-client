import { useLoaderData } from 'react-router-dom';
import SubBanner from '../../shared/SubBanner/SubBanner';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
	const { user } = useContext(AuthContext);
	// console.log(user);
	const { _id, title, img, price } = useLoaderData();
	// console.log(service);

	const handelOrder = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const phone = form.phone.value;
		const email = form.email.value;
		const date = form.date.value;
		const shift = form.shift.value;
		const message = form.message.value;

		const orderInfo = {
			service: title,
			service_id: _id,
			name,
			price,
			img,
			email,
			phone,
			date,
			shift,
			message
		};

		fetch('https://cars-doctor-server-iota.vercel.app/bookings', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(orderInfo)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					Swal.fire('Order Confirm!', 'success');
				}
			});
	};
	return (
		<div>
			<SubBanner>Checkout</SubBanner>

			<form onSubmit={handelOrder} className='max-w-4xl mx-auto space-y-5 p-7 md:p-12 bg-slate-100 my-12'>
				<div className='flex flex-col md:flex-row gap-4'>
					{/*  name */}
					<input
						type='text'
						placeholder='Your Name'
						defaultValue={user?.displayName}
						name='name'
						className='input input-bordered w-full'
						required
					/>

					{/* amount */}
					<input
						type='text'
						readOnly
						defaultValue={`$ ${price}`}
						name='price'
						className='input input-bordered w-full'
						required
					/>
				</div>

				{/* phone and email fields */}
				<div className='flex flex-col md:flex-row gap-4'>
					{/* phone */}
					<input type='text' placeholder='Phone Number' name='phone' className='input input-bordered w-full' required />

					{/*email */}
					<input
						type='email'
						placeholder='Email Address'
						defaultValue={user?.email}
						name='email'
						className='input input-bordered w-full'
						required
					/>
				</div>
				{/* date and car/bike fields */}
				<div className='flex flex-col md:flex-row gap-4'>
					{/* date */}
					<input type='date' name='date' className='input input-bordered w-full md:w-1/2' required />

					{/* shift */}
					<select name='shift' defaultValue={'none'} className='select select-bordered w-full md:w-1/2 required'>
						<option disabled>When will you come?</option>
						<option value='morning'>Morning</option>
						<option value='afternoon'>Afternoon</option>
					</select>
				</div>
				{/* message */}
				<textarea
					className='textarea textarea-bordered w-full min-h-[200px]'
					name='message'
					placeholder='Your Message'
					required></textarea>
				<input className='orange-field btn-block' type='submit' value='Order Confirm' />
			</form>
		</div>
	);
};

export default CheckOut;

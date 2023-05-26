import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import SubBanner from '../../shared/SubBanner/SubBanner';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
	const { user } = useContext(AuthContext);
	const [bookings, setBookings] = useState([]);
	const [reFetch, setReFetch] = useState(true);
	const navigate = useNavigate();

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://cars-doctor-server-iota.vercel.app/bookings/${id}`, {
					method: 'DELETE'
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire({
								title: 'Deleted Successfully!',
								icon: 'success',
								showConfirmButton: false,
								timer: 2000
							});
							setReFetch(!reFetch);
						} else {
							Swal.fire({
								title: 'Failed to Delete!',
								text: 'Something went wrong!',
								icon: 'error'
							});
						}
					});
			} else {
				Swal.fire({
					title: 'Delete Canceled!',
					text: 'You have changed your decision!',
					icon: 'error',
					showConfirmButton: false,
					timer: 2000
				});
			}
		});
	};

	const handleConfirm = (id) => {
		fetch(`https://cars-doctor-server-iota.vercel.app/bookings/${id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ status: 'Confirm' })
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: 'Confirmed successfully!',
						icon: 'success',
						showConfirmButton: false,
						timer: 2000
					});
					setReFetch(!reFetch);
				} else {
					Swal.fire({
						title: ' Failed to update!',
						text: 'Please try again!',
						icon: 'error',
						showConfirmButton: false,
						timer: 2000
					});
				}
			});
	};

	const url = `https://cars-doctor-server-iota.vercel.app/bookings?email=${user.email}`;
	useEffect(() => {
		fetch(url, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${localStorage.getItem('cars-doctor-access-token')}`
			}
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.error) {
					setBookings(data);
				} else {
					// logOutUser();
					navigate('/');
				}
			});
	}, [url, reFetch, navigate]);

	return (
		<div>
			<SubBanner>Bookings</SubBanner>
			{bookings.length > 0 ? (
				<div className='overflow-x-auto w-full my-12'>
					<table className='table w-full'>
						{/* head */}
						<thead>
							<tr>
								<th>delete</th>
								<th>service</th>
								<th>cost</th>
								<th>date</th>
								<th>status</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{bookings.map((booking) => (
								<BookingRow
									key={booking._id}
									booking={booking}
									handleDelete={handleDelete}
									handleConfirm={handleConfirm}
								/>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<h3 className='text-3xl font-bold h-[50vh] flex justify-center items-center'>No Bookings</h3>
			)}
		</div>
	);
};

export default Bookings;

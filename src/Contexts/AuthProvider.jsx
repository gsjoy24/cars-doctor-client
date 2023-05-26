import { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	GithubAuthProvider,
	signOut,
	signInWithPopup
} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loader, setLoader] = useState(true);

	const createUser = (email, password) => {
		setLoader(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const googleAuthentication = () => {
		setLoader(true);
		return signInWithPopup(auth, googleProvider);
	};

	const githubAuthentication = () => {
		setLoader(true);
		return signInWithPopup(auth, githubProvider);
	};
	const loginUser = (email, password) => {
		setLoader(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOutUser = () => {
		setLoader(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoader(false);

			if (currentUser) {
				const loggedUser = {
					email: currentUser.email
				};
				fetch(`https://cars-doctor-server-iota.vercel.app/jwt`, {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(loggedUser)
				})
					.then((res) => res.json())
					.then((data) => {
						console.log('jwt response', data);
						localStorage.setItem('cars-doctor-access-token', data.token);
					});
			} else {
				localStorage.removeItem('cars-doctor-access-token');
			}
		});
		return () => unsubscribe();
	}, []);

	const authInfo = {
		user,
		loader,
		createUser,
		googleAuthentication,
		githubAuthentication,
		loginUser,
		logOutUser
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

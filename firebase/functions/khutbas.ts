import {
	doc,
	getDoc,
	getDocs,
	getFirestore,
	collection,
	query,
	orderBy,
	limit,
} from 'firebase/firestore';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';

import firebase from 'firebaseApp';

const db = getFirestore(firebase);
const storage = getStorage(firebase, 'gs://khubabank.appspot.com');

interface GetKhutba {
	id: string;
}

interface GetKhutbaImage {
	imageId: string;
}

export const getKhutbas = async () => {
	let result = null;
	let error = null;

	try {
		const res = await getDocs(collection(db, 'khutbas'));
		result = [];

		res.forEach((r) => {
			result.push(r.data());
		});
	} catch (e) {
		error = e;
	}

	return { result, error };
};

/* Limited to 5 khutbas */
export const getLatestKhutbas = async () => {
	let result = null;
	let error = null;

	try {
		const khutbasRef = collection(db, 'khutbas');
		const q = query(khutbasRef, orderBy('createdTimestamp'), limit(4));
		const res = await getDocs(q);
		result = [];

		res.forEach((r) => {
			result.push(r.data());
		});
	} catch (e) {
		error = e;
	}

	return { result, error };
};

export const getKhutbaImage = async ({ imageId }: GetKhutbaImage) => {
	let result = null;
	let error = null;

	try {
		const storageRef = ref(storage, imageId);

		await getDownloadURL(storageRef)
			.then((url) => {
				result = `https://ik.imagekit.io/khutbabank/o${url.split('/o')[1]}`;
				// result = url;
			})
			.catch((err) => {
				error = err;

				result = null;
			});
	} catch (e) {
		error = e;
	}

	return { result, error };
};

export const getKhutba = async ({ id }: GetKhutba) => {
	let result = null;
	let error = null;

	try {
		const docRef = doc(db, 'khutbas', id);
		const docSnap = await getDoc(docRef);

		// IDK what I am doing here ... welp
		result = docSnap.data() as {
			category: string;
			description: string;
			id: string;
			imageId: string;
			title: string;
			createdTimeStamp: string;
			imageUrl: string | null;
			khutba_first_part: string;
			khutba_second_part: string;
		};
	} catch (e) {
		error = e;
	}

	return { result, error };
};

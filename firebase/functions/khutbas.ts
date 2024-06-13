import { getDoc, getDocs, getFirestore, collection } from 'firebase/firestore';
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

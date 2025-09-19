// import { PrismaClient } from '@prisma/client';
import prisma from '@/lib/prisma';

interface GetKhutba {
	id: string;
}

export const getKhutbas = async () => {
	let result = null;
	let error = null;

	try {
		const res = await prisma.khutba.findMany();
		console.log('res', res);
		result = res;
	} catch (e) {
		error = e;
	}

	return { result, error };
};

/* Limited to 4 khutbas */
export const getLatestKhutbas = async () => {
	let result = null;
	let error = null;

	try {
		const res = await prisma.khutba.findMany({
			take: 4,
			orderBy: { createdAt: 'desc' },
		});
		result = res;
	} catch (e) {
		error = e;
	}

	return { result, error };
};

export const getKhutba = async ({ id }: GetKhutba) => {
	let result = null;
	let error = null;

	try {
		const res = await prisma.khutba.findFirst({
			where: {
				id: {
					equals: id,
				},
			},
		});
		result = res;
	} catch (e) {
		error = e;
	}

	return { result, error };
};

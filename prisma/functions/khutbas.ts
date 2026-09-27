// import { PrismaClient } from '@prisma/client';
import { getPrisma } from '@/lib/prisma';

interface GetKhutba {
  id: string;
}

export const getKhutbas = async () => {
  let result;
  let error;

  try {
    const res = await getPrisma().khutba.findMany({
      orderBy: { createdAt: 'desc' },
    });
    result = res;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

/* Limited to 4 khutbas */
export const getLatestKhutbas = async () => {
  let result;
  let error;

  try {
    const res = await getPrisma().khutba.findMany({
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
  let result;
  let error;

  try {
    const res = await getPrisma().khutba.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
    console.log(res);
    result = res;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

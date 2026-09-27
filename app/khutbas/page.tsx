import KhutbaList from '@/components/Khutbas/KhutbaList';
import { getKhutbas } from '@/prisma/functions/khutbas';

export const dynamic = 'force-dynamic';

const Khutbas = async () => {
	const { result: khutbas, error } = await getKhutbas();

	return (
		<>
			<KhutbaList khutbas={khutbas} />
		</>
	);
};

export default Khutbas;

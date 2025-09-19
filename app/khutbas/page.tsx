import KhutbaList from '@/components/Khutbas/KhutbaList';
import { getKhutbas } from '@/prisma/functions/khutbas';

const Khutbas = async () => {
	const { result: khutbas, error } = await getKhutbas();

	return (
		<>
			<KhutbaList khutbas={khutbas} />
		</>
	);
};

export default Khutbas;

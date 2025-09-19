import { getKhutba } from '@/prisma/functions/khutbas';
import Khutba from '@/components/Khutba';

const KhutbaPage = async ({ params }: { params: { id: string } }) => {
	const { result: khutba, error } = await getKhutba({ id: params.id });

	return (
		<>
			<Khutba khutba={khutba} />
		</>
	);
};

export default KhutbaPage;

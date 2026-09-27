import { getKhutba } from '@/prisma/functions/khutbas';
import Khutba from '@/components/Khutba';

export const dynamic = 'force-dynamic';

const KhutbaPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { result: khutba, error } = await getKhutba({ id });

  return (
    <>
      <Khutba khutba={khutba} />
    </>
  );
};

export default KhutbaPage;

import { PrismaClient } from '../prisma/generated/client';
import fs from 'fs';
import path from 'path';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });

const prisma = new PrismaClient({ adapter });

async function getCategoryByName(name: string) {
  const res = await prisma.category.findFirst({
    where: {
      name: {
        equals: name,
      },
    },
  });

  return res;
}

async function main() {
  const categories = [
    'Core Islamic Beliefs',
    'Worship',
    'Character & Ethics',
    'Spiritual Development',
    'Contemporary Issues',
    'Social Justice & Activism',
    'Islamic History & Role Models',
    'Friday & Seasonal Occasions',
    'Family & Society',
    'Youth & Education',
  ];

  for (const category of categories) {
    await prisma.category.create({ data: { name: category } });
  }

  // Read khutbas.json
  const filePath = path.join(__dirname, 'khutbas.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  const khutbas = JSON.parse(data);

  if (!Array.isArray(khutbas)) {
    throw new Error('khutbas.json must be an array of khutba objects');
  }

  for (const khutba of khutbas.slice().reverse()) {
    const category = await getCategoryByName(khutba.category);

    await prisma.khutba.create({
      data: {
        author: khutba.author === 'none' ? null : khutba.author,
        title: khutba.title,
        description: khutba.description,
        categoryId: category!.id,
        firstPart: khutba.khutba_first_part,
        secondPart: khutba.khutba_second_part,
        thumbnailPath: khutba.imageId + '.png',
      },
    });
  }

  console.log('✅ Seeded khutbas from khutbas.json');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

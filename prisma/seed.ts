import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

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

	for (const category in categories) {
		await prisma.category.create({ data: { name: category } });
	}

	// Read khutbas.json
	const filePath = path.join(__dirname, 'khutbas.json');
	const data = fs.readFileSync(filePath, 'utf-8');
	const khutbas = JSON.parse(data);

	if (!Array.isArray(khutbas)) {
		throw new Error('khutbas.json must be an array of khutba objects');
	}

	for (const khutba of khutbas) {
		// Ensure category exists before inserting khutba
		await prisma.category.upsert({
			where: { id: khutba.categoryId },
			update: {},
			create: {
				id: khutba.categoryId,
				name: khutba.categoryName ?? 'Uncategorized', // optional fallback
			},
		});

		await prisma.khutba.create({
			data: {
				author: khutba.author,
				title: khutba.title,
				categoryId: khutba.categoryId,
				firstPart: khutba.firstPart,
				secondPart: khutba.secondPart,
				thumbnailPath: khutba.thumbnailPath,
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

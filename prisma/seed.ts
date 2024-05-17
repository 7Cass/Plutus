const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const predefinedCategories = [
    { name: 'Food', isDefault: true },
    { name: 'Transport', isDefault: true },
    { name: 'Entertainment', isDefault: true },
    { name: 'Utilities', isDefault: true },
    { name: 'Health', isDefault: true },
    { name: 'Salary', isDefault: true },
    { name: 'Investment', isDefault: true },
  ];

  for (const category of predefinedCategories) {
    await prisma.category.create({
      data: category
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
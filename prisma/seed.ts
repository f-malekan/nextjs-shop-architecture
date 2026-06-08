import prisma from "@/lib/prisma";

// const prisma = new PrismaClient();

// const products = [
//   { name: 'Product 01', price: 199000, image: '/images/p01.jpg', stock: 12 },
//   { name: 'Product 02', price: 249000, image: '/images/p02.jpg', stock: 8 },
//   { name: 'Product 03', price: 99000, image: '/images/p03.jpg', stock: 25 },
//   { name: 'Product 04', price: 179000, image: '/images/p04.jpg', stock: 5 },
//   { name: 'Product 05', price: 459000, image: '/images/p05.jpg', stock: 3 },
//   { name: 'Product 06', price: 129000, image: '/images/p06.jpg', stock: 30 },
//   { name: 'Product 07', price: 319000, image: '/images/p07.jpg', stock: 7 },
//   { name: 'Product 08', price: 219000, image: '/images/p08.jpg', stock: 9 },
//   { name: 'Product 09', price: 149000, image: '/images/p09.jpg', stock: 16 },
//   { name: 'Product 10', price: 399000, image: '/images/p10.jpg', stock: 4 },
//   { name: 'Product 11', price: 189000, image: '/images/p11.jpg', stock: 11 },
//   { name: 'Product 12', price: 289000, image: '/images/p12.jpg', stock: 6 },
//   { name: 'Product 13', price: 109000, image: '/images/p13.jpg', stock: 22 },
//   { name: 'Product 14', price: 159000, image: '/images/p14.jpg', stock: 14 },
//   { name: 'Product 15', price: 549000, image: '/images/p15.jpg', stock: 2 },
//   { name: 'Product 16', price: 259000, image: '/images/p16.jpg', stock: 10 },
//   { name: 'Product 17', price: 139000, image: '/images/p17.jpg', stock: 18 },
//   { name: 'Product 18', price: 329000, image: '/images/p18.jpg', stock: 5 },
//   { name: 'Product 19', price: 119000, image: '/images/p19.jpg', stock: 27 },
//   { name: 'Product 20', price: 209000, image: '/images/p20.jpg', stock: 13 },
// ];

// async function main() {
//   // ۱. ایجاد رنگ و سایز پایه
//   const color = await prisma.color.upsert({
//     where: { name: 'پیش‌فرض' },
//     update: {},
//     create: { name: 'پیش‌فرض', hexCode: '#000000' },
//   });

//   const size = await prisma.size.upsert({
//     where: { name: 'Free' },
//     update: {},
//     create: { name: 'Free' },
//   });

//   // ۲. وارد کردن محصولات
//   for (const p of products) {
//     await prisma.product.create({
//       data: {
//         name: p.name,
//         description: `Basic description for ${p.name}`,
//         basePrice: p.price,
//         variants: {
//           create: {
//             colorId: color.id,
//             sizeId: size.id,
//             price: p.price,
//             stock: p.stock,
//             image: p.image,
//             sku: `SKU-${p.name.replace(' ', '-').toUpperCase()}`,
//           },
//         },
//       },
//     });
//   }
//   console.log('Seeding finished!');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// async function main() {
//   const black = await prisma.color.create({
//     data: {
//       name: "Black",
//       hexCode: "#000000",
//     },
//   });

//   const white = await prisma.color.create({
//     data: {
//       name: "White",
//       hexCode: "#ffffff",
//     },
//   });

//   const red = await prisma.color.create({
//     data: {
//       name: "Red",
//       hexCode: "#ff0000",
//     },
//   });

//   const s = await prisma.size.create({
//     data: { name: "S" },
//   });

//   const m = await prisma.size.create({
//     data: { name: "M" },
//   });

//   const l = await prisma.size.create({
//     data: { name: "L" },
//   });

//   const product = await prisma.product.create({
//     data: {
//       name: "Basic T-Shirt",
//       description: "Comfortable cotton t-shirt",
//       image: "/tshirt.jpg",
//       price: 199000,
//     },
//   });

//   await prisma.productVariant.createMany({
//     data: [
//       {
//         productId: product.id,
//         colorId: black.id,
//         sizeId: s.id,
//         stock: 10,
//         sku: "TS-BLK-S",
//       },
//       {
//         productId: product.id,
//         colorId: black.id,
//         sizeId: m.id,
//         stock: 5,
//         sku: "TS-BLK-M",
//       },
//       {
//         productId: product.id,
//         colorId: black.id,
//         sizeId: l.id,
//         stock: 0,
//         sku: "TS-BLK-L",
//       },
//       {
//         productId: product.id,
//         colorId: white.id,
//         sizeId: s.id,
//         stock: 3,
//         sku: "TS-WHT-S",
//       },
//       {
//         productId: product.id,
//         colorId: white.id,
//         sizeId: m.id,
//         stock: 8,
//         sku: "TS-WHT-M",
//       },
//       {
//         productId: product.id,
//         colorId: red.id,
//         sizeId: m.id,
//         stock: 6,
//         sku: "TS-RED-M",
//       },
//     ],
//   });

//   console.log("Seed done ✅");
// }

// main();


async function main() {
  const categories = [
    { name: "مانتو و رویه", slug: "manto" },
    { name: "شومیز و بلوز", slug: "blouses" },
    { name: "پیراهن مجلسی", slug: "dresses" },
    { name: "تی‌شرت و تاپ", slug: "t-shirts-tops" },
    { name: "شلوار و لگ", slug: "pants-leggings" },
    { name: "دامن", slug: "skirts" },
    { name: "لباس راحتی", slug: "home-wear" },
    { name: "بافت و سویشرت", slug: "knitwear" },
    { name: "کفش پاشنه‌دار", slug: "heels" },
    { name: "کتانی و اسپرت", slug: "sneakers" },
    { name: "کیف دستی و دوشی", slug: "bags" },
    { name: "شال و روسری", slug: "scarves" },
    { name: "زیورآلات", slug: "jewelry" },
    { name: "عینک و اکسسوری", slug: "accessories" },
    { name: "لباس زیر و خواب", slug: "lingerie" },
  ];

  console.log("🌱 در حال وارد کردن دسته‌بندی‌ها...");

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log("✅ ۱۵ دسته‌بندی با موفقیت ایجاد شد.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

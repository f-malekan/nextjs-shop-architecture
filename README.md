# 🛒 Mid-Level E-commerce Architecture

A high-performance, scalable e-commerce foundation built with **Next.js 16 (App Router)**. This project demonstrates a production-ready architecture focusing on server-side efficiency, advanced caching strategies, and SEO optimization.

## 🚀 Technical Highlights

- **Framework:** Next.js 16 (React 19 features)
- **Database:** MYSQL with **Prisma ORM**
- **State Management:** **Zustand** (Optimized for hydration & performance)
- **Styling:** Tailwind CSS
- **Type Safety:** 100% TypeScript with strict relation mapping

## 🏗️ Architecture & Optimization

### 1. Advanced Caching Strategy

- **Service Layer Caching:** Implemented React `cache()` in the service layer to prevent duplicate database queries (Request Memoization).
- **Route Optimization:** Used `revalidate = 60` for public pages (Home, Products) to balance between fresh data and blazing-fast TTFB.
- **Dynamic Headers:** Specifically handled authentication and checkout routes as fully dynamic to ensure security and data integrity.

### 2. SEO & Metadata Management

- **Dynamic SEO:** Implemented `generateMetadata` for product pages to ensure unique titles and descriptions for search engines.
- **Brand Consistency:** Used `title.template` in the root layout for unified branding across all sub-pages.
- **Performance:** Optimized LCP (Largest Contentful Paint) using the Next.js Image component with `priority` for main product visuals.

### 3. Server-First Logic

- Removed unnecessary `/api` routes and migrated to **Server Actions** to reduce network overhead and improve security.
- Standardized data flow by normalizing Prisma `Decimal` types to frontend-friendly numbers.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   `git clone https://github.com/f-malekan/nextjs-shop-architecture.git`

2. **Install dependencies:**
   `npm install`

3. **Database Setup:**
   Create a `.env` file in the root directory and add your connection string:
   `DATABASE_URL="your-database-url-here"`

4. **Prisma Configuration:**
   Generate the Prisma client to enable type-safe queries:
   `npx prisma generate`

5. **Run the Development Server:**
   `npm run dev`

   ## 📅 Roadmap

- [x] Initial Architecture & Database Schema
- [x] Product Listing with Optimized Metadata
- [ ] Shopping Cart Logic & Persistent Storage (In Progress)
- [ ] User Dashboard & Order History
- [ ] Admin Panel for Inventory Management


## Project info

**URL**: https://id-vault-dash.lovable.app

# User Hub Admin – Frontend Application

This project is a **React + TypeScript + Vite** Admin Panel built using modern UI libraries such as **ShadCN**, **Radix UI**, and **TailwindCSS**.
It provides a scalable frontend foundation for admin dashboards, user management, analytics views, configurable forms, and dynamic UI components.

---

## 🚀 Tech Stack

* **React 18 (TypeScript)**
* **Vite** (Fast build tool)
* **TailwindCSS**
* **ShadCN UI Components**
* **Radix UI**
* **React Hook Form + Zod**
* **Recharts** (Analytics/Charts)
* **ESLint + TypeScript ESLint**

---

## 📁 Project Structure

Your exact folder structure (from uploaded ZIP):

```
user-hub-admin-main/
│── .env
│── index.html
│── package.json
│── vite.config.ts
│── tailwind.config.js
│── postcss.config.js
│── bun.lockb
│── components.json
│── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│── src/
    ├── assets/
    ├── components/
    │   ├── layout/
    │   ├── ui/  (ShadCN components)
    │   ├── Chart.tsx
    │   ├── Sidebar.tsx
    │   └── Navbar.tsx
    ├── constants/
    ├── context/
    ├── hooks/
    ├── lib/
    ├── pages/
    ├── router/
    ├── services/
    ├── utils/
    └── main.tsx
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```
git clone <your-github-repo-url>
cd user-hub-admin-main
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
VITE_API_BASE_URL=<your backend url>
```

(Your ZIP already contains an `.env` file — replace values before sharing publicly.)

### 4️⃣ Run Development Server

```
npm run dev
```

### 5️⃣ Build for Production

```
npm run build
```

### 6️⃣ Preview Production Build

```
npm run preview
```

---

## 📘 API Documentation

Provide your documentation links here:

* **Postman Collection:** https://www.postman.com/sarbojits-workspace/api/user-hub-admin/collection/1234567890abcdef

* **Swagger URL:** http://localhost:5000/api-docs


---

## 🧩 ER / Architecture Diagram

Attach or link your diagrams here:

* **ER Diagram:** <img width="656" height="638" alt="image" src="https://github.com/user-attachments/assets/23702165-6fa8-4c0b-b5a6-b0e7725025c0" />

* **System Architecture:** <img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/40a41893-0254-42b0-9a97-96abed5965fe" />


---



## 📝 Approach

A professional short note already written for you:

1. Started by setting up a modern frontend stack using **Vite + React + TS** for high performance.
2. Integrated **TailwindCSS + ShadCN UI** to build a consistent, reusable design system.
3. Organized code using a clean folder structure (`components`, `pages`, `services`, `utils`, and `context`).
4. Added dynamic routing using **React Router** and separated layout wrappers.
5. Used **React Hook Form + Zod** for form handling and validation.
6. Built reusable UI components (tables, dialogs, charts, buttons, cards, dropdowns).
7. Implemented API layer inside `/services` with proper abstraction.
8. Ensured code quality via **ESLint + Prettier**.
9. Prepared build & environment-specific configurations for deployment.

---

## ⚠️ Challenges Faced

* Managing large number of ShadCN + Radix UI components.
* Maintaining clean TypeScript interfaces across pages.
* Handling responsive layout for sidebar + navbar across resolutions.
* Ensuring API layer remains scalable for future modules.
* Tailwind conflict resolution during complex component styling.

---

## 👤 Author

**Name:** SARBOJIT BHATTACHARJEE


---




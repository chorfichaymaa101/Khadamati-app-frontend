# Khadamati App – Frontend

A modern, responsive web platform built with **Next.js** and **TypeScript**, designed to connect users with local service providers (plumbers, electricians, carpenters, etc.) in Morocco.  
The application provides an intuitive and visually rich interface inspired by Moroccan design patterns, with advanced search, service listing, and clean user experience.

---

## ✨ Features

### 🏠 Home Page (Hero Section)
- Beautiful Moroccan-inspired UI design
- Search services by keyword and city
- Quick access to add a new service
- Smooth responsive layout for all devices

### 🔎 Search System
- Advanced filtering by:
  - Category (plumber, electrician, etc.)
  - City (Casablanca, Rabat, Marrakech…)
- Query-based search with dynamic routing
- Clean and fast results display

### ➕ Add Service
- Form to publish a new service
- Structured input for service details
- Easy submission workflow

### 📄 Service Details
- Dedicated page for each service
- Full information about provider
- Contact and interaction options

### 👤 Authentication (if included)
- Login / Register pages
- Protected routes (Dashboard, Add Service, etc.)

### 📱 Responsive Design
- Fully optimized for mobile, tablet, and desktop
- Smooth UI transitions and interactions
- Modern card-based layout

---

## 🧠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** React Hooks
- **Routing:** Next.js File-based Routing


---

## 📁 Project Structure


app/
├── layout.tsx
├── page.tsx
├── search/
├── add-service/
├── service/[id]/
├── login/
├── dashboard/

components/
├── ui/
├── moroccan-patterns/

lib/
├── language-context.ts
├── utils.ts


---

## 🚀 Installation & Setup

### 1. Clone the repository
``bash
git clone https://github.com/chorfichaymaa101/khadamati-app-frontend.git
cd khadamati-app-frontend
2. Install dependencies
npm install

or

pnpm install
3. Run the project locally
npm run dev

or

pnpm dev

Open:
http://localhost:3000

🎨 UI Design
Moroccan zellige patterns
Soft gradients
Animated decorative elements
Clean modern cards
Fully responsive design
📌 Pages
/ → Home (Hero + Search)
/search → Search services
/add-service → Add service form
/edit-service → Edit service form
/service/[id] → Service details
/login → Authentication
/dashboard → User panel


👩‍💻 Author

Chorfi Chaymaa
Full-Stack Developer (React / Next.js / PHP / Java)

📜 License

This project is for personal and educational use.

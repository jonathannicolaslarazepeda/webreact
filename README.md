# 🧩 Web React

**Web React** is a React + Vite web project that includes routing, reusable components, and interactive features such as maps built with Leaflet.  
The goal is to provide a modern, modular, and scalable web application structure.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 📖 About the Project

Webreact is a **React application powered by Vite** that uses:

- **React Router** for navigation
- **Reusable UI components**
- **React Leaflet** for interactive maps

It is designed as a clean starting point for building modern web interfaces.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- **Node.js** (recommended v16 or higher)
- **npm** (v8 or higher)

---

### Installation

1. Clone the repository:

git clone https://github.com/your_username/weblnd.git

2. Navigate into the project folder:

cd "Web LND/webreact"

3. Install dependencies:

npm install

4. Start the development server:

npm run dev

### 📦 Usage

After running the dev server, open:

http://localhost:5173


- **Available routes:**

/ or /home

/about

/comment

Example routing setup:

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<Fruits />} />
    <Route path="/comment" element={<Fruits />} />
    <Route path="*" element={<Home />} />
  </Routes>
</BrowserRouter>

### 🧠 Built With

Main technologies used:

- **⚛️ React**

- **⚡ Vite**

- **🚗 React Router**

- **🗺️ React Leaflet + Leaflet**

### 🛣️ Roadmap

Planned improvements:

 - **User authentication**

 - **More functional routes/pages**

 - **Full documentation**

 - **Semantic versioning**

### URL Firebase

https://webreact-abdab.web.app/

### RSS

<img width="1492" height="1020" alt="image" src="https://github.com/user-attachments/assets/71e36ade-3da4-4dce-a2a9-c8704a444843" />

### Export Examples

CSV - https://github.com/jonathannicolaslarazepeda/webreact/blob/main/public/export-examples/comments.csv

JSON - https://github.com/jonathannicolaslarazepeda/webreact/blob/main/public/export-examples/comments.json

XML - https://github.com/jonathannicolaslarazepeda/webreact/blob/main/public/export-examples/comments.xml

### 🤝 Contributing

Contributions are welcome!

1. Fork the project

2. Create a feature branch

git checkout -b feature/AmazingFeature

3. Commit your changes

git commit -m "Add some feature"

4. Push to the branch

git push origin feature/AmazingFeature

5. Open a Pull Request 🚀

### 📄 License

Distributed under the Unlicense.
See LICENSE for more information.

### 🙏 Acknowledgments

Best README Template inspiration

React & Vite documentation

Open-source community ❤️

---

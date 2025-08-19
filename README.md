# 💰 Spenza - Money Tracker App (React Native + Express.js)

A **full-stack finance tracker app** built using **React Native (Expo)** for the frontend and **Express.js + PostgreSQL** for the backend. The project allows users to **track income and expenses**, **tag transactions**, and **view summary via a dashboard**. It features **user authentication** with [Clerk](https://clerk.dev), **rate-limiting** using Upstash Redis, and a backend hosted on [Render.com](https://render.com) with a [Neon.tech](https://neon.com) PostgreSQL database.

---

## 🧰 Tech Stack

### Frontend
- **React Native (Expo)**
- **React Navigation**
- **Clerk** (Authentication)
- **fetch API** (for HTTP requests)

### Backend
- **Express.js**
- **PostgreSQL (Neon.tech)**
- **Upstash Redis** (Rate limiting)
- **Render.com** (Deployment)

---

## 🔐 Authentication

User authentication is handled by [Clerk](https://clerk.dev), which provides secure sign-up and login flows.

---

## 🚀 Features

- **User Auth**: Sign-up / Sign-in via Clerk
- **Dashboard**: Summary of all transactions
- **Transaction List**: View all past income/expenses
- **Add Transaction**:
  - Input income or expense
  - Tag your transactions (e.g., Food, Rent, Salary)
- **Rate Limiting**:
  - Currently Simple request limiting using **Upstash Redis**
  - Future plan: rate-limit **per user**

---

## 🎯 Frontend Overview (React Native + Expo)

The frontend is built using React Native with Expo, providing a smooth and cross-platform mobile experience. It handles user authentication, transaction management, and finance visualization.
### 🔧 Key Features

   - Authentication:

      - Sign In / Sign Up with Clerk

      - Seamless integration of secure user sessions

   - Dashboard:

      - View total income, expenses, and balance

      - Clean summary UI at the top

   - Transaction List:

      - Scrollable list of all previous transactions

      - Each item displays amount, type (income/expense), and tags

   - Create Transaction:

      - Add new income or expense

      - Tag each transaction (e.g., Food, Salary, Rent)

      - Automatically updates dashboard and list

---

## 🌐 Backend Overview

- Built with **Express.js**
- **PostgreSQL** database hosted on **Neon.tech**
- Backend hosted on **Render.com**
- **RESTful API** with protected endpoints
- **Rate-limiting middleware** using **Upstash Redis** for controlling request frequency

---

## 🛠 Setup Instructions

### Frontend

1. Install Expo CLI (if not already installed)
   ```bash
   npm install -g expo-cli
   ```
2. Clone the repo and install dependencies

   ```bash
   git clone https://github.com/USER1043/spenza-frontend.git
   npm install
   ```
3. Start the development server
   ```bash
    expo start
   ```
   
---

## 📈 Planned Improvements

    ✅ Per-user rate limiting (in progress)

    ⏳ Monthly transaction summaries

    ⏳ Data visualization (charts for spend/income patterns)

    ⏳ Offline support

## 📹 Tutorial Reference

Built by following this awesome tutorial by @codesistency:
👉 [YouTube Link](https://youtu.be/vk13GJi4Vd0?si=5Io6q3vR2CfVpuH6)

## 🤝 Contributing

Thanks for checking out Spenza!
Feel free to fork this repo, suggest improvements, or open a pull request — contributions are always welcome! 💸🚀


<h1 align="center"> Subscription Monitor API</h1>

<div align="center">

  <div>
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
    <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
  </div>

   <div align="center">
     Built by following the tutorial from <a href="https://www.youtube.com/watch?v=rOpEN1JDaD0" target="_blank"><b>JavaScript Mastery</b></a>.
    </div>
</div>

---

##  Table of Contents
1.  [Introduction](#introduction)
2. ️ [Tech Stack](#tech-stack)
3.  [Features](#features)
4.  [Quick Start](#quick-start)
5. ️ [Snippets](#snippets)
6.  [Assets & Links](#links)

---

##  Introduction <a name="introduction"></a>

This project is a **production-ready Subscription Management System API**.  
It allows you to manage **users, subscriptions, payments, and reminders** with scalable API architecture.

Built with Node.js, Express, and MongoDB, it covers:
- Authentication with JWT
- Data modeling with Mongoose
- Secure API practices with Arcjet
- Automated workflows with Upstash


---

##  Tech Stack <a name="tech-stack"></a>

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB

---

## Features <a name="features"></a>

✅ **JWT Authentication** – Secure login & CRUD operations  
✅ **Subscription Management** – Add, update, and track subscriptions  
✅ **Database Modeling** – With Mongoose & relationships  
✅ **Global Error Handling** – Centralized error responses  
✅ **Rate Limiting & Bot Protection** – Using Arcjet  
✅ **Email Reminders** – Automated subscription reminders via Upstash  
✅ **Logging & Debugging** – Structured logs for monitoring

---

##  Quick Start <a name="quick-start"></a>

### Prerequisites
Make sure you have installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Clone the Repo
```bash
git clone https://github.com/<your-username>/subscription-tracker-api.git
cd subscription-tracker-api

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5500](http://localhost:5500) in your browser or any HTTP client to test the project.

## <a name="snippets"> Snippets</a>

<details>
<summary><code>Dummy JSON Data</code></summary>

```json
{
  "name": "Javascript Mastery Elite Membership",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```

</details>

## <a name="links"> Links</a>

- **Arcjet** - [https://launch.arcjet.com/4g2R2e4](https://launch.arcjet.com/4g2R2e4)
- **Upstash** - [https://bit.ly/42ealiN](https://bit.ly/42ealiN)
- **Hostinger** - [https://hostinger.com/mastery10](https://hostinger.com/mastery10)
- **WebStorm** - [https://jb.gg/GetWebStormFree](https://jb.gg/GetWebStormFree)



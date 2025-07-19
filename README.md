# 🔗 URL Shortener Backend – Node.js + MongoDB

This is a backend project that converts long URLs into short and shareable links. When the short URL is visited, it automatically redirects the user to the original long URL.

This project was developed by **Gudla Karthik Goud** as a part of the **Campus Recruitment Drive online test**.

---

## 📌 About the Project

The goal of this project is to implement a URL shortening service using Node.js and MongoDB. It allows users to:

- Submit a long URL and receive a shortened version.
- Use the short URL to be redirected to the original link.
- (Optional) Set an expiry time for the link.
- View stats of the short link (like creation time and expiry).

All HTTP requests are logged into a file (`request_log.txt`) for tracking.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)
- Mongoose (ODM)
- shortid (for generating unique short codes)
- dotenv (for environment variables)
- fs module (for logging requests)

---

## 🚀 How I Built It

1. **Project Initialization**:  
   Set up a Node.js project using `npm init`, and installed necessary dependencies like `express`, `mongoose`, `dotenv`, `shortid`, and `body-parser`.

2. **MongoDB Setup**:  
   Created a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and connected it securely using a `.env` file.

3. **Model Creation**:  
   Defined a Mongoose schema for the URLs with fields like `originalUrl`, `shortCode`, `shortUrl`, and timestamps.

4. **Controllers & Routes**:  
   Implemented a POST endpoint to generate short URLs and a GET endpoint to handle redirection using Express routes.

5. **Logging Middleware**:  
   Built a logger using Node.js `fs` module to record each HTTP request into a `request_log.txt` file.

6. **Testing with Insomnia**:  
   Verified all endpoints using Insomnia:
   - POST to `/shorturls` to shorten a URL.
   - GET `/shortCode` to test redirection.
   - GET `/shorturls/stats/shortCode` to fetch statistics.

---

## 🔧 How to Run the Project

1. **Clone the Repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/url-shortener-backend.git
   cd url-shortener-backend
Folder architecture is added

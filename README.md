#  WanderLust

A full-stack Airbnb-inspired web application where users can browse, list, and book unique places to stay — built to master the fundamentals of full-stack development, from database design to authentication, file uploads, and deployment.

---

##  About the Project

WanderLust is a listings and booking platform inspired by Airbnb. Users can explore stays from around the world, sign up and log in securely, create and manage their own listings, upload photos, view listing locations on an interactive map, and leave reviews with star ratings.

This project was built to get hands-on, end-to-end full-stack experience — designing a MongoDB schema, building a RESTful Express backend, implementing secure authentication with Passport.js, integrating third-party services (Cloudinary, Mapbox), and deploying a production-ready app on Render.

---

##  Features

-  **Browse & Search Listings** — View all available stays and search by country
-  **Secure Authentication** — Sign up, log in, and log out with Passport.js (session-based auth)
-  **Create & Manage Listings** — Logged-in users can add, edit, and delete their own listings
-  **Image Uploads** — Listing photos stored and served via Cloudinary
-  **Interactive Maps** — Each listing shows its location on a Mapbox-powered map
-  **Reviews & Ratings** — Leave star ratings and written reviews on listings
-  **Flash Messages** — Clear success/error feedback after key actions
-  **Responsive Design** — Clean, mobile-friendly UI built with Bootstrap

---

##  Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | EJS, Bootstrap, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | Passport.js (Local Strategy) |
| **Image Storage** | Cloudinary |
| **Maps** | Mapbox GL JS |
| **Deployment** | Render |

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)
- Cloudinary account (for image uploads)
- Mapbox account (for map integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and setup on according to your thought.

4. **Start the server**
   ```bash
   node app.js
   ```

5. **Visit the app**

   Open `http://localhost:8080` in your browser.

---

## 📁 Project Structure

```
wanderlust/
├── controllers/      # Route logic (listings, reviews, users)
├── models/           # Mongoose schemas (Listing, Review, User)
├── routes/           # Express route definitions
├── views/            # EJS templates
├── public/           # Static assets (CSS, JS, images)
├── middleware.js      # Auth & validation middleware
├── schema.js          # Joi validation schemas
├── cloudConfig.js     # Cloudinary configuration
└── app.js             # App entry point
```




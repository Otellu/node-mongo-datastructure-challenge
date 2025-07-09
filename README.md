# 🧠 Node.js + MongoDB Data Modeling Challenge

Welcome! This challenge is designed to evaluate your ability to design clean, scalable data structures and APIs using Node.js and MongoDB (via Mongoose).

## 🎯 Objective

You're tasked with building a simplified version of **LinkedIn Groups** with a focus on **data modeling**, **basic REST API logic**, and **reasoning** behind your schema design decisions.

---

## 📦 Core Entities

You’ll need to design and implement the following entities:

- User
- Group
- Post
- Reaction

Please decide which fields each entity needs based on the scenario below and your own understanding of a practical, scalable schema.

---

## 🧪 Tasks

### 🛠 Required

1. **Schema Design**

   - Define Mongoose models for the entities above.
   - Use references and/or embedded documents where appropriate.
   - Add inline comments explaining **why** you made certain schema decisions.

2. **API Endpoints**

   - `POST /groups`: Create a new group.
   - `POST /groups/:id/join`: Add a user to a group.
   - `POST /groups/:id/posts`: Create a post inside a group (only if user is a member).
   - `POST /posts/:id/react`: Add or update a reaction for a post by a user.
   - `GET /groups/:id/feed`: Fetch all posts in the group with:
     - author’s name
     - number of reactions per post
     - user’s own reaction (if any)

3. **Validation Rules**
   - A user can only post in a group if they are a member.
   - A user can only have **one reaction per post**. Reacting again should update the previous one.

---

### 💡 Bonus (Optional)

- Seed the DB with some sample users, groups, and posts.
- Add pagination to the group feed.
- Add timestamps and sort posts by newest first.
- Leave a short note on how you’d scale or optimize this model at scale (e.g. denormalization, indexing strategies, etc.)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run MongoDB (use Docker or local instance)
mongod

# Start the server
nodemon app.js
```

# 🧠 Node.js + MongoDB Data Modeling Challenge

Welcome! This challenge is designed to evaluate your ability to design clean, scalable data structures and APIs using Node.js and MongoDB (via Mongoose).

## 🎯 Objective

You're tasked with building a simplified version of **LinkedIn Groups** with a focus on **data modeling**, **basic REST API logic**, and **reasoning** behind your schema design decisions.

---

## 📦 Entities

### 1. **User**

- name
- email (assume it's unique)

### 2. **Group**

- name
- description
- list of members (users)

### 3. **Post**

- group
- author (user)
- content
- createdAt

### 4. **Reaction**

- post
- user
- type (like, love, laugh, etc.)

---

## 🧪 Tasks

### 🛠 Required

1. **Schema Design**

   - Define Mongoose models for User, Group, Post, and Reaction.
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

- Seed the DB with 2 users, 1 group, and 2 posts.
- Add pagination to the group feed.
- Add `createdAt` timestamps and sort the feed by newest first.
- Add a brief comment or file explaining how you'd scale this model (e.g. denormalization, indexes, etc.)

---

## 🚀 Setup Instructions

```bash
# Install dependencies
npm install

# Run MongoDB (use Docker or local instance)
mongod

# Start the server
nodemon app.js
```
# node-mongo-datastructure-challenge

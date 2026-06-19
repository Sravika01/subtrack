# SubTrack – Subscription Management Dashboard

A modern subscription management dashboard built with React.js that helps users organize, monitor, and analyze recurring subscriptions in one place.

## Overview

SubTrack allows users to track subscription services such as Netflix, Spotify, Amazon Prime, Coursera, and more. The application provides cost analytics, renewal tracking, search and sorting capabilities, and persistent data storage using the browser's Local Storage API.

## Features

### Subscription Management
- Add new subscriptions
- Delete existing subscriptions
- Store service name, cost, renewal date, and category
- Input validation to prevent incomplete entries

### Dashboard Analytics
- Total active subscriptions
- Total monthly spending
- Estimated annual spending

### Search & Sort
- Search subscriptions by service name
- Sort subscriptions alphabetically
- Sort by cost (High → Low)
- Sort by cost (Low → High)

### Renewal Tracking
- Renewal alerts for subscriptions expiring within 7 days
- Easy visibility of upcoming payments

### Data Persistence
- Automatic data saving using Local Storage
- Data remains available after page refresh

## Tech Stack

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Framework |
| JavaScript (ES6+) | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |
| Vite | Build Tool |
| Local Storage API | Data Persistence |

## Application Architecture

```
User Input
    ↓
React State Management
    ↓
Subscription Processing
    ↓
Dashboard Analytics
    ↓
Local Storage Persistence
```

## Project Structure

```text
subtrack/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Sravika01/subtrack.git
```

### Navigate to Project

```bash
cd subtrack
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

## Live Demo

🔗 [https://your-vercel-url.vercel.app](https://subtrack-two-iota.vercel.app/)

## Future Improvements

- Edit Subscription Feature
- Category-Based Filtering
- Spending Analytics Charts
- Dark Mode Support
- Export Data to CSV
- User Authentication
- Backend Integration with Node.js and MongoDB
- Email Renewal Notifications

## Learning Outcomes

This project helped strengthen understanding of:

- React Hooks (useState, useEffect)
- Component-Based Architecture
- State Management
- Array Methods (map, filter, reduce, sort)
- Local Storage Integration
- Form Handling & Validation
- Responsive UI Design

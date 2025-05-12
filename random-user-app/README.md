# Random User App

A Next.js app that fetches 100 users from the Random User API, allows searching by first name via a dropdown, and displays user details in a professional, centered card layout.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

## Features
- Fetches 100 users from `https://randomuser.me/api/?results=100`.
- Searchable dropdown with keyboard navigation, centered at the top.
- Displays selected user's full name, gender, email, phone, country, and picture in a centered card with a professional design.
- Responsive, professional design with light grey and blue palette, gradient borders, animations, and loading state.

## Technologies
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Axios
- React Context
- Heroicons
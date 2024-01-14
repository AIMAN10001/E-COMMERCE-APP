![logo](https://github.com/AIMAN10001/E-COMMERCE-APP/blob/main/Project%20(2).png)
# Premium E-Commerce Solution App

Welcome to my premium e-commerce solution app! This app is built with HTML, CSS, JavaScript, React, Strapi, and Stripe. It's fully responsive, supporting both mobile and PC devices.

## Getting Started

### React Setup

1. Navigate to the client directory:
    ```bash
    cd client
    ```

2. Install dependencies using npm or yarn:
    ```bash
    npm install
    ```

3. Start the React app:
    ```bash
    npm start
    ```

### Strapi Setup

1. Return to the root directory:
    ```bash
    cd ..
    ```

2. Navigate to the API directory:
    ```bash
    cd api
    ```

3. Create a new Strapi app:
    ```bash
    npx create-strapi-app@latest
    ```

4. Start the Strapi development server:
    ```bash
    npm run develop
    ```

### Database Setup

Ensure the Strapi server is running to interact with the API and fetch data.

## Important Note

Since Strapi is used as the backend, make sure the Strapi server is running at http://localhost:1337 or the appropriate URL. Your React app (http://localhost:3000) will make requests to this server.

## Additional Tips

- Keep your dependencies updated using `npm update` or `yarn upgrade`.
- Make sure to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.


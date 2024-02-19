
# Hi, I'm pavanlasure! 👋


## Authors

- [@pavanlasure90](https://www.github.com/pavanlasure90)


## 🚀 About Me
I am a passionate and experienced web developer dedicated to building high-quality, scalable, and user-friendly web applications. With a strong foundation in front-end and back-end technologies, I strive to deliver innovative solutions that meet and exceed client expectations.



# Kraftsix E-commerce App

Welcome to the Kraftsix E-commerce App, a full-stack web application built with modern technologies to provide a seamless shopping experience for users. This project serves as a demonstration of my proficiency in React, Firebase, and Stripe integration, showcasing my ability to develop scalable and secure web applications.

## Overview

The Kraftsix E-commerce App allows users to browse a variety of products, add them to their cart, and securely checkout using the Stripe payment gateway. The application features user authentication, product browsing, product details pages, shopping cart functionality, and order confirmation.


## Features to Explore

- **User Authentication**: Users can create accounts or sign in securely using Firebase Authentication, ensuring personalized experiences and secure access to their information.

- **Product Browsing**: The application provides a rich catalog of products, allowing users to browse and explore various items with ease.

- **Shopping Cart**: Users can add products to their cart, view their cart contents, and modify quantities before proceeding to checkout.

- **Checkout with Stripe**: Securely checkout with Stripe payment processing, allowing users to make payments using credit cards and other payment methods.

- **Order Confirmation**: Upon successful checkout, users receive confirmation of their order, providing peace of mind and transparency throughout the purchasing process.

## Folder infrastructure

The project follows a structured folder hierarchy, separating components, context providers, and Firebase configuration for maintainability and scalability. The src/ directory contains all source code files, while the public/ directory includes static assets and the HTML template for the application.

## Features implemented

- User authentication (Login and Registration)
- Product browsing
- Product details page
- Shopping cart functionality
- Checkout with Stripe payment processing
- Order confirmation page

## Folder Structure

- `src/`: Contains all the source code files.
  - `components/`: React components.
  - `context/`: Context providers.
  - `firebase.js`: Firebase configuration and initialization.
  - `App.js`: Main component for routing.
- `public/`: Contains static assets and HTML template.

## Tech Stack

**Client:** React, Context, TailwindCSS, Stripe, Axios

**Server:** Firebase

- React
- Firebase (Authentication and Firestore)
- Stripe for payment processing
- Axios for making HTTP requests
- Tailwind CSS for styling

## Technologies Used

- **React**: Leveraging the power of React, the project provides a dynamic and responsive user interface, enabling seamless interaction with the application.
  
- **Firebase**: Firebase Authentication is utilized for user authentication, ensuring secure access to the application's features. Firestore serves as the database for storing product data and user information, providing real-time updates and scalability.

- **Stripe**: Integration with the Stripe payment gateway enables secure and convenient checkout for users. With Stripe, users can make payments using various payment methods while ensuring PCI compliance and data security.

- **Axios**: Axios is used for making HTTP requests to fetch product data from external APIs, enabling seamless integration of product information into the application.

- **Tailwind CSS**: Tailwind CSS is used for styling, providing a utility-first approach to styling components and ensuring a consistent and visually appealing user interface.

## API Reference

#### Get all items

```http
  GET /api/docs/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `string` | **Required**. https://dummyjson.com |

#### Get item

```http
  GET dummyjson.com/docs/products${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Demo

https://kraftsix-ecommerce-shopingsite.netlify.app/

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pavanlasure90/kraftSix-ecommerce-app.git
```

2. Navigate to the project directory:

```bash
cd kraftsix-ecommerce-app
```

3. Install dependencies:

```bash
npm install
```

4. Create a Firebase project and set up Firestore and Authentication. Obtain the Firebase configuration object and replace it in `firebase.js`.

5. Set up a Stripe account and obtain the publishable key. Replace it in `StripePay.js`.
## Usage/Examples

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and go to `http://localhost:3000` to view the application.

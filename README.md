# E-Book Platform Frontend

This is the frontend for the E-Book Platform, built using Next.js. It connects to a Node.js backend API that provides functionalities such as user authentication, e-book management, and file uploads. Users can log in, create accounts, and manage their collection of e-books, all with a seamless UI built in Next.js.

## Features

- **User Authentication**: Users can sign up and log in to access personalized content.
- **E-Book Management**: Users can view, add, edit, and delete e-books.
- **File Upload**: Users can upload e-books in PDF format and cover images.
- **Responsive Design**: Built to work smoothly on mobile, tablet, and desktop.
- **Next.js for SSR**: Server-side rendering for fast performance and SEO-friendly pages.

## Tech Stack

- **Next.js**: React framework with server-side rendering and static site generation.
- **React**: Frontend UI library.
- **TypeScript**: Provides type safety across the codebase.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the backend API.
- **JWT**: Used to securely authenticate users via tokens.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/cykoravish/E-book-Next-js-frontend.git
    cd E-book-Next-js-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables as described in sample env file:

    ```plaintext
    BACKEND_URL=
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

The server will start on `http://localhost:3000`.

## Available Pages and Routes

### Authentication

- **Login**: `/login` - User login page to access the platform.
- **Signup**: `/signup` - User registration page to create a new account.

### E-Book Management

- **Home**: `/` - Displays a list of available e-books.
- **My Books**: `/my-books` - Shows e-books created by the logged-in user.
- **Add Book**: `/add-book` - Form to add a new book.
- **Book Details**: `/books/[id]` - Page to view details of a specific book.

## Usage

1. **Sign Up**: Create an account to get access to your personalized e-book collection.
2. **Login**: Log in with your credentials to start adding and managing books.
3. **Manage E-Books**:
   - Add new e-books, including uploading PDF files and cover images.
   - View details, edit, and delete your e-books.

## Libraries Used

- **Next.js**: For SSR and client-side routing.
- **Axios**: For easy API calls to the backend.
- **Tailwind CSS**: For quick and responsive styling.
- **jwt-decode**: To decode JWT tokens and manage user authentication state.
- **Formik and Yup**: For form handling and validation in signup and login forms.

## Environment Variables

The `.env.local` file should contain:

- `NEXT_PUBLIC_API_BASE_URL`: The base URL of the backend API (e.g., `http://localhost:3000/api`).

## Best Practices Followed

- **TypeScript**: Used to enforce type safety across the application.
- **Component-Based Architecture**: Organized by reusable components for consistent design.
- **Error Handling**: Consistent error handling for API requests and form validation.
- **JWT Authentication**: User authentication is managed through JWT stored in cookies or localStorage.
- **Responsive UI**: Designed with mobile-first principles for a smooth experience on all devices.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

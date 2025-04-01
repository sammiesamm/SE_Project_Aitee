#  aitee_server

This is the server part of the aitee project. It is a RESTful API server that serves the aitee client.

## Installation

1. Clone the repository

```bash
git clone https://github.com/tungluongthanh03/aitee_server.git
cd aitee_server
```

2. Install dependencies

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
JWT_SECRET_KEY=your_jwt_secret_key
REFRESH_TOKEN_SECRET_KEY=your_refresh_token_secret_key
ADMIN_ID=your_admin_id
ADMIN_EMAIL=admin@admin.com
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PORT=your_db_port
DB_USER=your_db_user
DB_PASSWORD=your_db_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Getting Keys

-   **JWT_SECRET_KEY**: Generate a secure random string to use as your JWT secret key.
-   **REFRESH_TOKEN_SECRET_KEY**: Generate another secure random string for the refresh token secret key.
-   **CLOUDINARY_NAME**, **CLOUDINARY_API_KEY** and **CLOUDINARY_API_SECRET**: Sign up for a Cloudinary account and get your API keys from the Cloudinary dashboard.

## Connecting to the Database

The project uses PostgreSQL as the database. Ensure you have PostgreSQL installed and running. Update the `.env` file with your database credentials.

## Certificates

Place your CA certificate in the `certs/` directory. The `ca.pem` file should be located at `certs/ca.pem`.

## Running the Server

```bash
npm start
```

## API Documentation

API documentation is available at `http://localhost:3000/api/api-docs`.

## Project Structure

```
.DS_Store
.env
.gitignore
.prettierrc
.vscode/
    launch.json
    settings.json
certs/
    ca.pem
package.json
README.md
src/
    config/
        index.js
        swagger.config.js
    controllers/
        comment/
        friend/
        post/
        user/
    data-source.js
    index.js
    loader/
        express-loader.js
        index.js
    middlewares/
        auth/
        image-upload.js
        index.js
        media-upload.js
        rate-limiter.js
    models/
        entities/
        index.js
    routes/
        friend.js
        index.js
        post.js
        user.js
    services/
        auth/
        cloudinary/
    validators/
        ...
```

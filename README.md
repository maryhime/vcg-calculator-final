# VCG Savings Calculator

Welcome to the VCG Savings Calculator project! This repository contains a Laravel backend with a React frontend, utilizing Laravel Sanctum for authentication and a mailer for email functionalities.

## Table of Contents
- [VCG Savings Calculator](#vcg-savings-calculator)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation (For Local Development)](#installation-for-local-development)
  - [Running the Project](#running-the-project)
  - [Deployment](#deployment)
    - [Laravel](#laravel)
    - [React JS](#react-js)
  - [API Documentation](#api-documentation)
    - [Authentication](#authentication)
    - [Services / Roles Management](#services--roles-management)
    - [User Settings](#user-settings)
    - [Invoicing](#invoicing)
  - [Tips and Troubleshooting](#tips-and-troubleshooting)
  - [Learning Resources](#learning-resources)

## Prerequisites
Ensure you have the following software installed on your local development machine:
1. **WAMPSERVER or XAMPP** - Local server environment for PHP and MySQL. Download from [WampServer](https://www.wampserver.com/en/) or [XAMPP](https://www.apachefriends.org/index.html).
2. **Node.js** - JavaScript runtime environment. Download from [nodejs.org](https://nodejs.org/).
3. **Composer** - PHP dependency manager. Download from [getcomposer.org](https://getcomposer.org/).
4. **Git** - Version control system. Download from [git-scm.com](https://git-scm.com/).
5. **IDE (Optional)** - Integrated Development Environment (e.g., VS Code, PHPStorm). Download [VS Code](https://code.visualstudio.com/) or [PHPStorm](https://www.jetbrains.com/phpstorm/).

## Installation (For Local Development)
Follow these steps to set up the project on your local machine:

1. **Clone the project**:
    Open your terminal and run the following command:
    ```bash
    git clone <project-url>
    ```
    Replace `<project-url>` with the URL of your Git repository.

2. **Navigate to the project directory**:
    ```bash
    cd <project-name>  # e.g., cd vcg-calculator
    ```

3. **Open your IDE Terminal**:
    - In VS Code, press `Ctrl + J` or ``Ctrl + ` `` to open the integrated terminal.

4. **Copy .env.example to .env**:
    ```bash
    cp .env.example .env
    ```

5. **Update the .env file**:
    Open the `.env` file in your IDE and modify the necessary configuration settings as per the details provided to you. This includes database credentials, mailer settings, and any other environment-specific configurations.

6. **Install Node.js dependencies**:
    ```bash
    npm install
    ```

7. **Install PHP dependencies**:
    Open another terminal window and run:
    ```bash
    composer install
    ```

8. **Generate the application key**:
    ```bash
    php artisan key:generate
    ```

## Running the Project
After installation, follow these steps to run the project locally:

1. **Run the React development server**:
    ```bash
    npm run dev
    ```

2. **Run the Laravel development server**:
    Open another terminal and run:
    ```bash
    php artisan serve
    ```

3. **Access the application**:
    - Open your browser and navigate to `http://localhost:8000`.

4. **Happy Coding!**

## Deployment
For deploying the application to a production environment, ensure the following configurations. These steps may vary based on your specific deployment setup:

### Laravel
1. **Update .env variables**:
    - Set `APP_NAME` to your desired application name.
    - Set `APP_URL` to the URL of your application.
    - Change `APP_ENV` to `production`.
    - Set `APP_DEBUG` to `false`.

2. **Database configuration**:
    - Update the following variables to match your production database settings:
        ```env
        DB_CONNECTION=mysql
        DB_HOST=your-database-host
        DB_PORT=your-database-port
        DB_DATABASE=your-database-name
        DB_USERNAME=your-database-username
        DB_PASSWORD=your-database-password
        ```

3. **Mailer configuration**:
    - Update the following mailer settings:
        ```env
        MAIL_MAILER=smtp
        MAIL_HOST=your-mail-host
        MAIL_PORT=your-mail-port
        MAIL_USERNAME=your-mail-username
        MAIL_PASSWORD=your-mail-password
        MAIL_ENCRYPTION=your-mail-encryption
        MAIL_FROM_ADDRESS=your-mail-from-address
        MAIL_FROM_NAME="Your Application Name"
        ```

4. **Database Migration**:
    - Run the database migrations:
        ```bash
        php artisan migrate
        ```
    - Seed the database with a temporary user account:
        ```bash
        php artisan db:seed --class=UserSeeder
        ```
    - Temporary user credentials:
        - **Username**: `admin@example.com`
        - **Password**: `password`
    - It is advisable to change the username and password after you deploy your project.

5. **Sanctum Token configuration**:
    - Update the `SANCTUM_TOKEN_NAME` in your `.env` file to your desired token name for authentication.

6. **Happy Coding!**

### React JS
1. **Build the React application**:
    ```bash
    npm run build
    ```

2. **Deploy the build**:
    - The build process will generate a `build` directory containing static files. Ensure these files are served by your web server.

## API Documentation
### Authentication
1. **Login API**: No token required
   - **Endpoint**: `<url>/api/auth/login`
   - **Method**: POST
   - **Parameters**:
     ```json
     {
       "email": "<string>",
       "password": "<string>"
     }
     ```

2. **Logout API**: Requires bearer token
   - **Endpoint**: `<url>/api/auth/logout`
   - **Method**: POST

### Services / Roles Management
1. **Create Service / Role**: Requires bearer token
   - **Endpoint**: `<url>/api/service`
   - **Method**: POST
   - **Parameters**:
     ```json
     {
       "job_title": "<string>",
       "north_america_price": "<number>",
       "philippines_price": "<number>"
     }
     ```

2. **Update Service / Role**: Requires bearer token
   - **Endpoint**: `<url>/api/service/{id}`
   - **Method**: PUT
   - **Parameters**:
     ```json
     {
       "job_title": "<string>",
       "north_america_price": "<number>",
       "philippines_price": "<number>"
     }
     ```

3. **Delete Service / Role**: Requires bearer token
   - **Endpoint**: `<url>/api/service/{id}`
   - **Method**: DELETE

4. **List Services / Roles**: No token required
   - **Endpoint**: `<url>/api/service`
   - **Method**: GET
   - **Optional Query Parameters**:
     - `sort_by=asc`
     - `per_page=5`
     - `order_by="id"`
     - `search=""`

### User Settings
1. **Update Email**: Requires bearer token
   - **Endpoint**: `<url>/api/settings/update-email`
   - **Method**: PUT
   - **Parameters**:
     ```json
     {
       "current_email": "<current_email>",
       "new_email": "<new_email>"
     }
     ```

2. **Update Password**: Requires bearer token
   - **Endpoint**: `<url>/api/settings/update-password`
   - **Method**: PUT
   - **Parameters**:
     ```json
     {
       "old_password": "<old_password>",
       "new_password": "<new_password>",
       "new_password_confirmation": "<new_password_confirmation>"
     }
     ```

### Invoicing
1. **Send Invoice**: No token required
   - **Endpoint**: `<url>/api/invoice/send-email`
   - **Method**: POST
   - **Parameters**:
     ```json
     {
       "first_name": "<string>",
       "last_name": "<string>",
       "email": "<string>",
       "company_name": "<string>",
       "company_number": "<number>",
       "table_rows": "<array>",
       "summary": "<array>"
     }
     ```

## Tips and Troubleshooting
- **Common Issues**:
    - If you encounter issues with package installations, ensure that your versions of Node.js and Composer are up-to-date.
    - Check the Laravel and Node.js documentation for troubleshooting guides.

- **Useful Commands**:
    - **Clear Cache**:
        ```bash
        php artisan cache:clear
        ```
    - **Optimize the Project**:
        ```bash
        php artisan optimize:clear
        ```
    - **Migrate Database**:
        ```bash
        php artisan migrate
        ```
    - **Rollback Migrations**:
        ```bash
        php artisan migrate:rollback
        ```

- **Log Files**:
    - Laravel log files are located in the `storage/logs` directory. Check these logs for detailed error messages.

## Learning Resources
- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://reactjs.org/docs

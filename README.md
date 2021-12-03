# Setup instructions
To run the application first clone this git repository and then follow the instructions below.

# Frontend setup instructions
1. Run npm install to install necessary dependencies
2. Start the app with ng serve/npm start. The webapp will run on port 4200

# Database setup instructions
1. Create a new postgreSQL database. This can be done by using the query dataset.sql included in the backend directory or manually in pgadmin.

# IMGBB setup instructions
ImgBB is used to host the images used for products.
1. Create a imgBB account
2. Go to https://api.imgbb.com/ and generate an API key for your account

# Backend setup instructions
1. Add .env file to the backend folder.
2. Add the following content to the .env file and fill in the required fields:

    # API settings
    PORT=[desired port for the backend]

    # Webapp settings
    APP_PORT=4200


    # PostgreSQL settings
    PG_HOST=localhost
    PG_USER=postgres
    PG_PASSWORD=[Your postgreSQL password]
    PG_DATABASE=[Your postgreSQL database]
    PG_PORT=[Your PostgreSQL port, 5432 by default]

    # ImgBB settings
    IMGBB_KEY=[Your IMGBB API key]
    
3. Run npm install
4. Start the API with npm start

# Setup instructions
To run the application first clone this git repository and then follow the instructions below.

# Frontend setup instructions
1. Run npm install to install necessary dependencies
2. Start the app with npm start. The webapp will run on port 4200

# Database setup instructions
1. Create a new postgreSQL database with a desired name. The creation of tables and relations will all be handled by Sequelize.

# Backend setup instructions
1. Add .env file to the backend folder.
2. Add the following content to the .env file and fill in the required fields:

#API settings  
PORT=8080

#Webapp settings  
APP_PORT=4200

#PostgreSQL settings  
PG_HOST=localhost
PG_USER=[Your postgres user]  
PG_PASSWORD=[Your postgres user password]  
PG_DATABASE=[Your database name]  
PG_PORT=[Your postgres server port (5432 by default)]  

#Default admin settings  
DEFAULT_ADMIN_EMAIL=[Email for the default admin]  
DEFAULT_ADMIN_PASSWORD=[Password for the default admin]  

#JWT settings  
ACCESS_TOKEN_KEY=[Random string used for JWT generation]  
TOKEN_EXPIRATION_TIME=3600

#Cookie settings
COOKIE_PARSER_KEY=[Random string used for cookie parsing]  
    
3. Run npm install
4. Start the API with npm start

(Note on the default admin: The default admin settings are used to create a default admin user in the database. This user will have the Admin role. New Admin users will have to be manually inserted into the database.)

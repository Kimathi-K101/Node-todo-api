# Node-todo-api

# Project Introduction

I decided to take the initiative to explore other areas of engineering because I would be equipped with skills and practices that would benefit my future and current endeavours. So I decided to use what I was learning at my previous co-op term with The Co-operators Group and start a back-end development project. This would allow me to work with NoSQL databases, cloud-based services, proper unit testing and documentation, and asynchronous programming.

I was simply curios and was ready to focus and try something new.

# Description

So what I created was a RESTful API for a To-Do List application. Functionalities included:
Custom user accounts and authentication
Adding and removing tasks
Fetching and editing to-dos
Logging in and out of you personal account

Additionally, each function in the application is implemented with a corresponding unit testing function. This allows me to easily debug the code when I run into errors. 

# Source Code and Anatomy

The source code for the project is on my github( https://github.com/kimathikaai/Node-ToDo-List-API ).

Files and Directories:
“playground” Directory: Used to test MongoDB queries, connections and ID hashing.
“server/server.js” File: Implementation of POST, GET, DELETE and PATCH endpoint
“server/models” Directory: Used to setup the information required to add a to-do entry and create a user.
“server/middleware/authentication.js” File: Used to validate the user and secure their tasks.
“server/config/config.js” File: Sets up the configuration properties of the application.
“server/db/mongoose.js”: Sets up the connection with the database.
“server/test/server.test.js” File: Responsible for unit testing. Can be incorporated with CI software.
“package.json” File: Contains all the metadata.



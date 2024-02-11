***Npm install for both client and server directories*** <br>
Lab Assignment #1 – Designing and implementing a modern web app using MERN stack

Purpose:	The purpose of this assignment is to provide software engineering students with an opportunity to develop a student/course system using the MERN stack, while gaming students can apply their skills in the context of a game library management system and a UI with visually appealing 3D graphics and interactive elements. 

References:	Read the reference textbooks, lecture slides, and class examples. This material provides the necessary information that you need to complete the exercises.

Be sure to read the following general instructions carefully:
- This assignment must be completed individually by all the students.
- See the naming and submission rules at the end of this document
- You will have to provide an demonstration for your solution in class and upload the solution on eCentennial through the assignment link.



Exercise 2: Game Library Management System with Enhanced UI (for G-P students)

Requirements:

1.	Express REST API:
•	Develop an Express REST API that supports CRUD operations for managing games and user collections.
•	Create the following models with their respective fields:
o	Game Model:
	title (string): The title of the game.
	genre (string): The genre of the game.
	platform (string): The platform(s) on which the game can be played.
	releaseYear (number): The year the game was released.
	developer (string): The developer of the game.
	rating (number): The rating of the game.
	description (string): A description of the game.
o	User Model:
	username (string): The username of the user.
	password (string): The password of the user.
	games (array of game IDs): The collection of games owned by the user. This field in the game model can be defined  as: games: [{  type: Schema.Types.ObjectId, ref: Game'  }]

2.	React Front-end:
•	Design a user-friendly UI using functional components, composition, and React Hooks.
•	Implement the following features for users:
o	Register: Allow users to register an account with a unique username and password.
o	Login: Provide a login form for users to access their game library.
o	Add games: Allow users to add games to their collection by searching and selecting from the available games.
o	Remove games: Enable users to remove games from their collection.
o	Display game details: Show detailed information about each game in the user's collection.
o	List all games: Display a list of all available games in the library.
•	Integrate three.js into the React UI:
o	Incorporate three.js to enhance the UI of the game library management system.
o	Utilize three.js features to create visually appealing elements such as 3D buttons, dynamic backgrounds, or animated transitions.
o	Focus on incorporating simpler three.js elements that enhance the user experience.

3.	MVC Architecture:
•	Apply the MVC principles to maintain a structured codebase.

Evaluation: 
Functionality(including code explanation):	
React front-end (Correct components, forms, event handling, login, interactive graphics)	35%
MongoDB database (config files, models)	5%
Express Rest API (Correct models, controllers, routes code, correct implementation of MVC architecture, authentication/authorization, Correct server.js, express.js, mongoose.js and config.js files)	25%
Friendliness (using CSS to align the React elements, React-Bootstrap, etc.)	10%
Innovative features (extensive use of ES6+ syntax, UI design, Three.js, etc.)	15%
In class Code demonstration with explanation	10%
Total	100%

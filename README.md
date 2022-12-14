<h1 align="center">🌐 Closer | Geocoding API </h1>
<h1 align="center">
<img src="https://img.shields.io/static/v1?label=TypeScript&message=language&color=green&style=for-the-badge&logo=typescript"/>
<img src="https://img.shields.io/static/v1?label=Express&message=framework&color=blue&style=for-the-badge&logo=express"/>
<img src="https://img.shields.io/static/v1?label=Jest&message=unit+tests&color=blue&style=for-the-badge&logo=jest"/>

  
</h1>

<h2 align="center" >
<img src="https://i.pinimg.com/originals/57/99/c7/5799c7857a2b5bf4a5aa500923d051a2.gif" width="600" />
</h2>
<hr />

##### Synopsis:
  Ever wondered how far away you are from your friends or even that amazing japanese restaurant you want to visit? Ever had to decide who was the most suitable person for that last moment trip to the market? Well, no more. With Closer, you can rest assure that all that information is merely one click and one address away.


The closer the better! 

##### Description:

Closer is a project developed in TypeScript, in the Node + Express ecosystem. Through a RESTful API, it receives three or more addresses and proceeds to process them, calculating the distances between each one. It returns you a list of the distances between each pair of locations, and also the closest and farthest pair. 

<br><br>

##### Want to check it out by yourself?

<h2 align="center" >
<a href="https://closer-geocoding.herokuapp.com/"><img src="https://media.indiedb.com/images/articles/1/159/158317/auto/20140509082052-Button_play.png" height="64" />
</h2></a>
<hr />

### 🧠 Project Responsabilities:

- [x] Connect with an external service through an API
- [x] Receive three addresses and get their coordinates
- [x] Calculate the distance between each pair of addresses
- [x] Highlight both the nearest and farthest distances in the array
- [x] Assure code quality and maintenability through unit tests coverage.

### 🔥 The Extra Mile:

- [x] Configure project from scratch with TypeScript
- [x] Use the MVC model for maintaining good code practices
- [x] Configure .env for using a restrict API, without exposing sensible data
- [x] Documenting the application through Swagger
- [x] Deploying the application to Heroku for a smoother testing experience

### 🧰 Technologies:

- TypeScript
- NodeJS
- ExpressJS
- Google Geocoding API
- Axios
- Jest


### 🎯 Endpoints:

- GET /distances: Receives the query param "addresses", which is a string of addresses separated by ';'. It then returns a list of the distances between those addresses, as well as the farthest and nearest ones.

### 💻 How to use it:

For running this project, you will need to have Node installed and a valid Google API key for using their Geocoding API.

For the project to connect with the geocoding API, you will need to have a `.env` file with the following line:
```
API_KEY=<your_google_api_key_here>
```
After that, you're all set. Run `yarn` for installing the dependencies and `yarn dev` for running the project. For running the tests, a simple `yarn test` will do the trick as well.

Good hacking! 👊 🔥

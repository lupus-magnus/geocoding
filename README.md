<h1 align="center">🌐 Closer | Geocoding API </h1>
<h1 align="center">
<img src="https://img.shields.io/static/v1?label=TypeScript&message=language&color=green&style=for-the-badge&logo=typescript"/>
<img src="https://img.shields.io/static/v1?label=Node&message=framework&color=blue&style=for-the-badge&logo=nodedotjs"/>
<img src="https://img.shields.io/static/v1?label=Jest&message=unit+tests&color=blue&style=for-the-badge&logo=jest"/>

  
</h1>

<h2 align="center" >
<img src="https://i.pinimg.com/originals/57/99/c7/5799c7857a2b5bf4a5aa500923d051a2.gif" width="600" />
</h2>
<hr />

##### Synopsis:
  Ever wondered how far away you are from your friends or even that amazing japanese restaurant you want to visit? Ever had to decide who was the friend that was nearest to the market for those final arrangements in the last moment? Well, no more. With Closer, you can rest assure that all that information is merely one click and one address away.


The closer the better! 

##### Description:

Closer is a project developed in TypeScript, in the Node + Express ecosystem. Through a RESTful API, it receives three or more addresses and proceeds to process them, calculating the distances between each one.

<br><br>

##### Want to check it out by yourself? (Not deployed yet)

<h2 align="center" >
<a href="https://iboox.herokuapp.com/"><img src="https://media.indiedb.com/images/articles/1/159/158317/auto/20140509082052-Button_play.png" height="64" />
</h2></a>
<hr />

### 🧠 Project Responsabilities:

- [x] Configure project from scratch with TypeScript
- [x] Use the MVC model for maintaining good code practices
- [x] Configure env for using a restrict API, without exposing sensible data
- [x] Assure code quality and maintenability through unit tests coverage.

### 🧰 Technologies:

- TypeScript
- NodeJS
- ExpressJS
- Google Geocoding API
- Axios
- Jest


### 🎯 Endpoints:

- GET /distances: Receives the addresses parameter via header, which is a string of addresses separated by ';'. It then returns a list of the distances between those addresses, as well as the longest and closest ones.

#### 🔥 The Extra Mile:

- [x] Implement an efficient error handling approach for semantic http responses.
- [ ] Document the API through Swagger.

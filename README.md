## MERN - Wookie Movies

### Description

You are the owner of a movie theater in **Thikkiiana City,** on the Wookiee homeworld of Kashyyyk. Your customers are bored with the never changing selection and are asking for something completely different - they want to see what's playing on Earth. Create a Web App for them.

### Tasks

NodeJs:
- 	Import movie_db.json file to MongoDB. Do not alter DB contents. 
-   Create an API to list movie to fetch data
-   API should have authentication with Bearer token : FSMovies2023
-   Format data by Grouping Movies by Categories (Genres)
-   Return in below format
	[
		{
			"category":"Action",
			"movies":[
				{
				   "director": "Christopher Nolan",
		           "imdb_rating": 9.0,
		           "length": "2h 32min",
		           "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
		           "title": "The Dark Knight"
		           "slug": "the-dark-knight"
				},
				{
					// Details of another movie.. 
				},
				// and so on
			]
		},
		{
			"category":"Crime",
			"movies":[
				{
				   "director": "Christopher Nolan",
		           "imdb_rating": 9.0,
		           "length": "2h 32min",
		           "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
		           "title": "The Dark Knight"
		           "slug": "the-dark-knight"
				},
			],
			
		},
		{
			// Details of another category (Genres).. 
		},
		// and so on
	]

React:
-   Implement your designs using  **React Components** and style them using **CSS3**
-   Display the results as outlined in the design.
-   You may use any state management library of your choice as well as common routing libraries

### Evaluation Criteria

#### Level 1
-   NodeJs: Create API - Movies fetched, grouped by category.
-   ReactJs: Movies Listing Design implemented according to attached file using React Components

#### Bonus
-   Bonus: Use of creative design to showcase movies list

### Useful Links

[React Docs](https://reactjs.org/docs/context.html)

[NodeJs Docs](https://nodejs.org/en/docs/)

### Fortunesoft

All the best and happy coding,

The Fortunesoft Team

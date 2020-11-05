## Boozy API

### A platform to connect through drink recipes

Browse, create and share custom mixed drink recipes

<p float="left">
<img width="200" alt="BoozySS" src="https://user-images.githubusercontent.com/47507987/98051890-a9e6e900-1de9-11eb-88a4-d092b84d57e2.png">
<img width="200" alt="Screen Shot 2020-11-03 at 3 37 55 PM" src="https://user-images.githubusercontent.com/47507987/98052275-9daf5b80-1dea-11eb-8a36-4845422b1dbb.png">
<img width="200" alt="BoozySS" src="https://user-images.githubusercontent.com/47507987/98052146-4315ff80-1dea-11eb-93d4-0f357bda59a6.png">
</p>

- Live link: https://boozy.vercel.app/

- Tech stack: (PERN) PostgreSQL, Express, React, Node

### Endpoints

<ul>
<li>GET/drinks get all drinks</li>
<li>POST/drinks post a drink</li>
<li>GET/drinks/id to get a specific drink by id</li>
<li>PATCH/drinks/id edit a drink</li>
<li>DELETE/drinks/id delete a drink</li>
</ul>

# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

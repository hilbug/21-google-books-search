# Google Books Search

## Description
Search for books using the Google Books API and save books to reference later. This app leverages React for front-end and ExpressJS and MongoDB for back-end.

### App Screenshot
Search

<img width="600" alt="Screen Shot 2020-11-16 at 1 20 02 AM" src="https://user-images.githubusercontent.com/65197724/99219062-dd425400-27a9-11eb-8a01-ff7de8d3d312.png">

Saved

<img width="600" alt="Screen Shot 2020-11-16 at 1 21 21 AM" src="https://user-images.githubusercontent.com/65197724/99219148-0c58c580-27aa-11eb-8b7c-544977538c7c.png">

### App Link

Check out the app at [this link](https://thawing-dawn-74077.herokuapp.com/)!

### Technology
Front-end:
- React (create-react-app)
- React Router
- Bootstrap
- React Bootstrap

Back-end:
- Axios
- Express
- MongoDB/Mongoose

### Future Enhancements
- User authentication
- Prettify the site


# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

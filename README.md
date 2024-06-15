
![UI Image](https://github.com/patnz/dr-seuss-collection/assets/114084721/e4dfe90b-a17c-4bca-a047-eb9afcc0a2d9)

# Fullstack Collection App

This repo contains a function CRUD application for a Dr Seuss book collection.
You are welcome to repurpose the app for any other means.

Built using:

- TypeScript
- React (Redux)
- Express
- Knex
- Postgres
- SQLite

Database functions available:

- getBooks
- addBook
- deleteBook
- editBook

## Setup

- Clone this repo, navigate to it and install packages `npm install`
- Run `npm run knex migrate:latest` to run the latest migration (Dr Seuss book db table)
- Run `npm run knex seed:run` to populate the table with starter data
- Run `npm run dev` to run the development server
- Visit `localhost:3000` and CRUD it up!

For all other information about how to create your own database entries (e.g. `npm run knex migrate:make my_new_table`):

https://knexjs.org/

## Making changes

### 1. Choosing your data set

- [ ] First, decide what you would like to keep a collection of. This could be a repo for keeping track of movies, books, gifs, cars, rocks, anything you fancy, but keep it simple!
  <details style="padding-left: 2em">
    <summary>More about your collection</summary>

    **Note:** the aim is to have some simple data. If you think you might need more than one database table, or have lots of details you want to store, how could you simplify the information you're keeping track of? Leave more complex data until later in the project. For example, I want to keep track of books that I want to read, ones that I have read, and ones that I own. To start with though, let's keep track of the books themselves. My data might look like:

/// TODO ///

Our first job is getting something showing on the front end from our database. Here's a list of steps in case they are useful. You can build in any order you like though ;)

## Back end

### 2. Building the database

- [ ] Design a database to store a list of your things (e.g. books)
- [ ] Build the migrations and seed data

### 3. Building the API
- [ ] Build an API (back end route) to get the information from your database
- [ ] Test your API with Insomnia

## Front end

### 4. Setting the stage

- [ ] Build a React component with static html
- [ ] Build Redux reducer. Start with a hardcoded initial state
  <details style="padding-left: 2em">
    <summary>Tip</summary>
    
    For example:
    ```js
    const initialState = [{ id: 1, title: 'Ready Player One', author: 'Ernest Cline' }]
    ```
  </details>

- [ ] Use `useAppSelector` to display the redux state you hardcoded in the React Component

### 5. Building the API client
- [ ] Build an API client in the front end to request the information from your routes

### 6. Building thunky actions
- [ ] Build Thunk actions to use the API and get the information
- [ ] Build Redux actions to save task data from the thunk
- [ ] Use `useAppDispatch` and `useEffect` to dispatch the thunk when your app loads

## Additional functionality

### 7. Adding, deleting, and updating records
- [ ] Include the ability to add a new record (will need a form in your components)
- [ ] Include the ability to remove/delete records
- [ ] Include the ability to update records (e.g. for correcting typos)

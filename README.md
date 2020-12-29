# Citizen Report Application

## Description
The Citizen Report App is designed for users (Citizens) to be able to submit a complaint about local infrastructure.  Users must login with Google's OAuth, where they will be directed to a dashboard to see their previous complaints, as well as an option to create new complaints.

For now, 28 Dec 2020, we are giving citizen users full CRUD access.  Cities do not currently exist, but can be implemented by creating a new table and associating by zipcode.  

*Stretch:*
Responsible parties (Cities) can login, also with Google, to update the status of any complaint associated with their city.  Cities are currently set to be one per zipcode (for demonstration purposes).

***cities Table does not currently exist*
![Citizen Database Schema](./server/images/citizenschema.jpg)

<br />

## Let's Get Started!
* Fork & Clone this repo
* Run &nbsp;`npm install`
* Run &nbsp;`node server/server.js`
* Run (in a separate terminal) &nbsp;`npm run dev`
* Open your browser to [local8080](http://localhost:8080)

<br />

## What's Working?
* [Dashboard](http://localhost:8080/dashboard) (and home page) loads an interactive map from Google maps
* Map displays pins of reports with valid Lat/Long entries
* [Create Complaint](http://localhost:8080/createComplaint) works to add a complaint to the database
* [login](http://localhost:8080/login) loads a page with a Google Login button
  * Page displays "You are not logged in" or your Google avatar + " | Hi, `name`"
  * G Login button opens a modal for OAuth2, allowing users to select their google account to login
  * 
* On the Backend
  * Database uses Postgres
  * Full CRUD functionality for reports and citizens tables


## What Needs Work?
* The entire City half, primarily
  * City login
  * City UI
  * City functionality (view reports with city's zipcode, update status of one of said reports)
* Keeping our users logged in
  * Redux to manage state,
  * LocalStorage/LocalSession to handle JWTs and verifying user each time

<br />
<br />

### ⭐ Developers: ⭐
  * Caner Demir
  * Chris Docuyanan
  * Chung, Daeun
  * Courtney Doss
  * Windu Sayles
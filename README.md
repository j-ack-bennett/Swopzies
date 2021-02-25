# Jack Of All Trades

## Final Group Project

Goods and services are expensive... why not offer a way for the community to come together and trade skills, knowledge and home baked goods.

This is an app for people to list goods and services that they need, or want to share within their community.

The idea of the app is for people to add posts when they are in need of specific goods and services for trade, or are wanting to provide their own goods and services for trade. It is aimed at people of all demographics, whether it's someone who is retired and offering their services in their spare time, or a busy young professional wanting someone to walk their dog.

The hope is to provide a platform for people who are wanting to trade their skills and crafts, but don't have money in mind while doing so. Who doesn't like a good old barter??

## The Tech

This is a list of tech we will be using throughout our project:

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [Bulma (CSS framework)](https://bulma.io/documentation/)
* [JWT Auth (Local)](https://jwt.io/)
* [SCSS/Sass (CSS pre-processor)](https://sass-lang.com/install)

## User Stories

### MVP

As a non-registered user:
  * I want to register for the App under my name.
  
As a registered user:
  * I want to login with my registered details.
  * I want to browse "I'm looking for. . ." on the site to see what goods/services are needed in my community. 
  * I want to browse "I can offer. . ." on the site to see what other goods/services are offered in my community. 
  * On either page, I want to filter via tag/category to find specific a specific good/service.
  * I want to create and add a new post for the "I'm looking for. . ." on the site and provide a MAXIMUM of one tag. 
  * I want to create and add a new post for the "I can offer. . ." on the site and provide a MAXIMUM of one tag. 
  * I want to view my user profile through a button on the nav bar and see a list of all of my current posts.
  * I want to update/edit my current post(s) through my profile.
  * I want to delete my current post(s) through my profile.
  * I want to comment on "I'm looking for. . ." listings to let the author know I am interested in trading for the good/service they require. 
  * I want to comment on "I can offer . ." listings to let the author know in the goods/services they're offering. 

### Stretch

As a registered user:
  * I want to create and add a new post for the "I'm looking for. . ." section on the site and provide a MINIMUM of one tag. 
  * I want to create and add a new post for the "I can offer. . ." section on the site and provide a MINIMUM of one tag. 
  * I want to view posts by region in NZ, not just my local community.
  * I want to browse "Free stuff" on the site, to see what goods people are offering free of charge in my community.
  * I want to create and add a new post for "Free stuff" I am offering on the site.
  * I want the option to upload a profile picture to my user profile.
  * I want the option to upload pictures to my post(s).
  * I want to provide a user with feedback, if I have traded with them previously.
  * I want to see the page view count for each post on the site.
  * I want to see the comment count for each post on the site.
  * I want to be able to edit my user profile details (name, location, phone number etc.).
  * I want to save/bookmark any post(s) on the site to view later on my profile.
  * I want to be notified on my profile when another user comments on my post(s).
  * I want the ability to trade between three people.

  ---

## Views (Client Side)

  | name | purpose |
  | --- | --- |
  | Home | View to display each section of the App (I'm looking for. . .), (I can offer . . .) and (Add a post) |
  | Landing | View for user when they first enter the App |
  | Listing | View to display a specific listing and all the details provided by the author |
  | ListingCard | View of each specific post on the *Listings* page |
  | ListingForm | View of the edit form within the user's own post |
  | Listings | View to display the whole page of listings within (I'm looking for. . .) and (I can offer . . .)  |
  | Login | View for user to enter their login credentials |
  | Nav | View to display the navigation bar at the top of each component |
  | Profile | View for the user to see their profile information |
  | Register | View for user to sign up for the App |

## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  |MORE TO BE ADDED|MORE TO BE ADDED|

 ## Actions

 | type | data | purpose |
 | --- | --- | --- |
 |TO BE ADDED|TO BE ADDED|

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token (TO BE CHANGED)|
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token (TO BE CHANGED)|
| Get | /api/meetings | Yes | Get a Users Meeting Histroy | An Array of Meetings (TO BE CHANGED)|
| Post | /api/meetings | Yes | Save a completed meeting | The Meeting that has been saved in db read format (TO BE CHANGED)|
| Get | /api/meetings/:id/users | Yes | Get the attendees of a Meeting | An Array of User objects (TO BE CHANGED)|
| Get | /api/users | Yes | Get the users of the app | An Array of User Objects (TO BE CHANGED)|

## DB (Server Side)
  There should be five tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | username | String |
  | first_name | String |
  | last_name | String |
  | password | Hash |
  | email | String |
  | bio | String |
  | image | String |
  | location | String |
  | phone | Integer |

### Listings
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_id | Integer |
  | type | String |
  | title | String |
  | description | String |
  | image | String |
  | time | Timestamp |
  
### Comms
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | listing_id | Integer |
  | user_id | Integer |
  | text | String |
  | time | Timestamp |
  
### Listing_Tags
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | listing_id | Integer |
  | tag_id | Integer |
  
### Tags (Join Table M2M)
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | tag_name | String |

 ---

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!

# Jack Of All Trades

## Final Group Project

Preamable - I don't always have money, but I still need stuff done. 

What is this app? 

What is the idea of the app? Small local community.

What is the intended effect of this App?

## The Tech

This is a list of tech we will be using throughout our project:

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [Bulma (CSS framework)](https://bulma.io/documentation/) (MAYBE)
* [JWT Auth (Local)](https://jwt.io/)

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
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | LandingPage | View for user when they first enter the App |
  | Home | View to display each section of the App (I'm looking for. . .  I can offer . . .  and Add a post) |

## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors (TO BE CHANGED)|
  | currentMeeting | Track meeting progress such as current cost and current duration (TO BE CHANGED)|
  | meetings | store the list of meetings the user has attended in the past (TO BE CHANGED)|
  | users | store the list of users who can attend meetings (TO BE CHANGED)|

 ## Actions

 ### meetings (TO BE CHANGED)

 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_MEETINGS | meetings | retreive meetings from the db and store in redux (TO BE CHANGED)|
 | ADD_MEETING | meeting | Add a single meeting to the history after it is created (TO BE CHANGED)|

 ### users (TO BE CHANGED)
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server (TO BE CHANGED)|

 ### currentMeeting (TO BE CHANGED)
  | type | data | purpose |
| --- | --- | --- |
| START_MEETING | attendees ([]), meeting_name | a meeting has started, set initial meeting state (TO BE CHANGED)|
| END_MEETING | null | Set meeting in progress flag to false (TO BE CHANGED)|
| TICK_ONE_SECOND | null | Increase running total by 1s worth of $ (TO BE CHANGED)|
| RESET_MEETING | null | Revert to initial state (TO BE CHANGED)|

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/meetings | Yes | Get a Users Meeting Histroy | An Array of Meetings |
| Post | /api/meetings | Yes | Save a completed meeting | The Meeting that has been saved in db read format |
| Get | /api/meetings/:id/users | Yes | Get the attendees of a Meeting | An Array of User objects |
| Get | /api/users | Yes | Get the users of the app | An Array of User Objects |

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

### Attendees (Join Table M2M)

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | user_id | Integer |
 | meeting_id | Integer |

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

# Swopzies

## Enspiral Dev Academy - Final Group Project

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
* [React-paginate](https://npmjs.com/package/react-paginate)


## User Stories

### MVP

As a non-registered user:
  * I want to register for the App under my name.
  
As a registered user:
  * I want to log in with my registered details.
  * I want to browse "I'm looking for. . ." to see what goods/services are needed in my community. 
  * I want to browse "I can offer. . ." to see what other goods/services are offered in my community. 
  * On either page, I want to filter via tag/category to find a specific good/service.
  * I want to create and add a new post for the "I'm looking for. . ." section of the site and provide a MAXIMUM of one tag. 
  * I want to create and add a new post for the "I can offer. . ." section of the site and provide a MAXIMUM of one tag. 
  * I want to view my user profile via a button on the nav bar and see a list of all of my current post(s).
  * I want to update/edit my current post(s) through my profile.
  * I want to delete my current post(s) through my profile.
  * I want to comment on "I'm looking for. . ." listings to let the author know I am interested in trading for the good/service they require. 
  * I want to comment on "I can offer . ." listings, to let the author know I am interested the good/service they're offering. 
 

### Stretch

As a registered user:
  * I want to create and add a new post for the "I'm looking for. . ." section on the site and provide a MINIMUM of one tag. 
  * I want to create and add a new post for the "I can offer. . ." section on the site and provide a MINIMUM of one tag. 
  * I want to view posts by region in NZ, not just my local community.
  * I want to browse "Free stuff" on the site, to see what goods people are offering free of charge in my community.
  * I want to create and add a new post for "Free stuff" I am offering on the site.
  * I want the option to upload a profile picture to my user profile.
  * I want the option to upload a picture to my post(s).
  * I want to provide a user with feedback, if I have traded with them previously.
  * I want to see the page view count for each post on the site.
  * I want to see the comment count for each post on the site.
  * I want to be able to edit my user profile details (name, location, phone number etc.).
  * I want to save/bookmark any post(s) on the site to view later on my profile.
  * I want to be notified on my profile when another user comments on my post(s).
  

  ---

## Views (Client Side)

  | Name | purpose |
  | --- | --- |
  | Home | View to display each section of the App (I'm looking for. . .), (I can offer . . .) and (Add a Listing) |
  | Landing | View for user when they first enter the App |
  | Listing | View to display a specific listing and all the details provided by the author including date                                                                      posted/updated. If it is your post a 'delete post' & an 'edit post' button are visible. An 'Add a comment' 
             section,a text input to allow people to leave a  comment on a listing which can be viewed
             only by the sender and the author of the listing. |
  | ListingCard | View of each specific post on the *Listings* page |
  | Editlisting | View of the edit form, so a user can update their own post |
  | ListingForm | View a form containing all inputs required for a new listing, that can be posted |
  | Listings | View to display the whole page of listings within (I'm looking for. . .) and (I can offer . . .)  |
  | Login | View for user to enter their login credentials |
  | Nav | View to display the navigation bar at the top of each component |
  | Profile | View for the user to see their profile information and to see their listings and bookmarked listings |
  | Register | View for user to sign up for the App |
  | Edit profile | view for th euser to edit their profile details |
  | Contact | A page to contact the admins in regards to any query using the website. Showing a form for the user to submit their details and a message stating the query. |
  
 

## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | listings | Store the listings that have been added by users |
  | register | Stores information regarding the user registration |
  | tags | Stores information regarding category tags |

 ## Actions

  | type | data | purpose |
  | --- | --- | --- |
  | SET_LISTINGS | listings | Stores listings in global state |
  | ADD_LISTING | listing | Adds a newly created single post |
  | SET_REGO | rego | Stores user registrations in global state |
  | CLEAR_REGO |  | Clears registration information from state after created |
  | SET_TAGS | tags | Stores category tags in global state |

## API (Client - Server)

| Method |      Endpoint      |    Protected    | Usage |                 Response |
| --- | --- | --- | --- | --- |
| Post   | /api/auth/login          | Yes | Log In a User              | The Users JWT Token |
| Post   | /api/auth/register       | Yes | Register a User            | The Users JWT Token |
| Patch  | /api/v1/profile          | Yes | Update a user profile      | Update a user profile |
| Get    | /api/v1/listings         | No  | Get Listings               | All Listings |
| Post   | /api/v1/listings         | No  | Add New Listing            | All Listings |
| Get    | /api/v1/listings/:id     | No  | Get Listing By ID          | Listings that match ID |
| Delete | /api/v1/listings/:id     | No  | Delete Listing By ID       | status 200 |
| Patch  | /api/v1/listings/:id     | No  | Update A Listing By ID     | Updated Listing |
| Post   | /api/v1/listings/bookmark| Yes | Add a bookmark             |  status 200 |
| Delete | /api/v1/listings/bookmark| Yes | Delete a bookmark          | status 200  |
| Get    | /api/v1/listings/bookmark/id| Yes | Get your bookmarked listings as a user | Users bookmarked listings |
| Get    | /api/v1/listings/tag/:id | No  | Get Listings By Tag ID     | Listings that match Tag id |
| Get    | /api/v1/comms/id         | Yes | Get comments for a listing | Listing with existing comments | 
| Post   | /api/v1/comms/           | Yes | Post a new comment         | status 200 |
| Post   | /api/v1/comms/           | Yes | Show comment thread        | showing comment thread |


  There should be six tables for MVP

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
  | thread_id | integer |
  
### Listings_Tags
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
  
### Users_Listings
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | listing_id | Integer |
  | user_id | Integer |

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

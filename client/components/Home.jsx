import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchListings } from "../actions/listings"
import { Link } from "react-router-dom"
import ListingCard from './ListingCard'

function Home(props) {

  const listings = props.listings


  return (
    <>
      <div className="text-box">
          <Link to="/listingform" className="btn btn-blue btn-animate">
              Add a Listing
          </Link>
      </div>

      <div className="columns has-same-height home-panels home-margin">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h3 className="is-4 has-text-centered">I'm Looking For...</h3>

              <div className="content">
                <table className="table-profile">
                  <tbody>
                    <tr>
                      <th colSpan="1"></th>
                      <th colSpan="2"></th>
                    </tr>
                    <tr>
                      <td>{listings.map(listing => {
                        if (listing.type == "looking") {
                          return <ListingCard key={listing.id} listing={listing} />
                        }
                      })}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="buttons has-addons is-centered">
                <Link
                  to="/listings"
                  className="button is-primary"
                  onClick={() => localStorage.setItem("type", "looking")}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="column">
          <div className="card home-columns">
            <div className="card-content">
              <figure className="is-4 has-text-centered add-text">

              </figure>
            </div>
          </div>
        </div> */}

        <div className="column">
          <div className="card home-columns">
            <div className="card-content">
              <h3 className="is-4 has-text-centered">I Can Offer...</h3>

              <div className="content">
                <table className="table-profile">
                  <tbody>
                    <tr>
                      <th colSpan="1"></th>
                      <th colSpan="2"></th>
                    </tr>
                    <tr>
                      <td>{listings.map(listing => {
                        if (listing.type == "offer") {
                          return <ListingCard key={listing.id} listing={listing} />
                        }
                      })}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="buttons has-addons is-centered">
                <Link
                  to="/listings"
                  className="button is-primary"
                  onClick={() => localStorage.setItem("type", "offer")}
                >
                  Read More
          </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    listings: globalState.listings
  }
}

export default connect(mapStateToProps)(Home)







{/* <div className="container">
      <div>
        <Link to="/listingform">
        <button >+ Add listing</button>
        </Link>
      </div>
      <div>
        <h1>I'm Looking For...</h1>
          {listings.map(listing => {
            if(listing.type == "looking"){
              return <ListingCard key={listing.id} listing={listing} />
            }
          })}
          <Link
          to="/listings"
          onClick={() => localStorage.setItem("type", "looking")}
          >
          See more...
        </Link>
      </div>
      <hr />
      <div>
        <h1>I Can Offer...</h1>
          {listings.map(listing => {
            if(listing.type == "offer"){
              return <ListingCard key={listing.id} listing={listing} />
            }
          })}
          <Link
          to="/listings"
          onClick={() => localStorage.setItem("type", "offer")}
          >
          See more...
        </Link>
      </div>
    </div> */}
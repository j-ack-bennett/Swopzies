import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import ListingCard from "./ListingCard"

function Listings(props) {
  const type = localStorage.getItem("type")
  const tags = props.tags
  const allListings = props.listings
  const [filter, setFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [listings, setListings] = useState([{}])

  const locations  = ['Auckland', 'Bay of Plenty', 'Canterbury', 'Gisborne', 'Hawke\'s Bay', 'Manawatu-Whanganui', 'Marlborough', 'Nelson', 'Northland', 'Otago', 'Southland', 'Taranaki', 'Tasman', 'Waikato', 'Wellington', 'West Coast']
  //pagenation


  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    filterListings()
  }, [filter, locationFilter])


  useEffect(() => {
    setListings(allListings)
  }, [allListings])


  // pagenation
  const pageLisitngs = listings.filter(listing => listing.type == type)

  const PER_PAGE = 5
  const offset = currentPage * PER_PAGE

  const currentPageLisings = pageLisitngs.slice(offset, offset + PER_PAGE)

  const pageCount = Math.ceil(pageLisitngs.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  //pagenation ends

  const filterListings = () => {
    if (filter === "all") {
      if (locationFilter == 'all') {
        
        setListings(props.listings)
      } else {
        setListings(
          allListings.filter(listing => {
            if (listing.location == locationFilter) {
              return listing
            }
          })
        )
      }
    } else {
      if (locationFilter == 'all') {
        setListings(
          allListings.filter((listing) => {
            if (listing.tag_name === filter) {
              return listing
            }
          })
        )
      } else {
        setListings(
          allListings.filter(listing => {
            if (listing.tag_name == filter && listing.location == locationFilter) {
              return listing
            }
          })
        )
      }
    }
  }

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value)
  }

  return (
    <>
    <div className="container margin-top margin-bottom">
      <div className="add-listing-page">
        <div className="add-listing-page add-listing-center add-listing-centering">
          <div className="auto-margin">
            <div className="auto-margin2">
              {type == "looking" ? (
                <h1 className="center-text margin-bottom"> People are Seeking!</h1>
              ) : (
                  <h1 className="center-text margin-bottom"> People are Offering!</h1>
                )}
              <div className="text-box-listings">
                <Link to="/listingform" className="btn btn-blue btn-animate">
                  Add a Listing
                </Link>
              </div>
              <div className="inline-flex">
                <div className="listingForm margin-right-listings">
                  <div className="auto-margin2">
                    <select className="capitalize add-listing-dropdown is-size-4" name="tag" onChange={handleChange} value={filter}>
                      <option value="all" disable="true" hidden>
                        Choose category
                      </option>
                      {tags.map((tag) => {
                        return (
                          <option value={tag.tag_name} key={tag.id}>
                            {tag.tag_name}
                          </option>
                        )
                      })}
                    </select>
                    <div className="inline margin-reset">
                      <button className="button is-primary" onClick={() => setFilter('all')}>Reset</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="inline-flex">
                <div className="listingForm">
                  <div className="auto-margin2">
                    <select className="capitalize add-listing-dropdown is-size-4" name="location" onChange={handleLocationFilterChange} value={locationFilter}>
                      <option className="margin-left" value={"all"} disable="true" hidden>
                        Choose location
                      </option>
                      {locations.map((l) => {
                        return <option key={l} value={l}>{l}</option>
                      })}
                    </select>
                    <div className="inline margin-reset">
                      <button className="button is-primary margin-bottom" onClick={() => setLocationFilter('all')}>Reset</button>
                    </div>
                  </div>
                  </div>
                  </div> 
                  <div className="container">

                  <div className="card">
                  <div className="card-content">
                    {console.log("currentpagelistings:", currentPageLisings, "listings:", listings)}
                    {currentPageLisings.map((listing) => {
                      if (listing.type == type) {
                        return <ListingCard key={listing.id} listing={listing} />
                      }
                    })}
                  </div>
                  </div>
                  </div>

                  <div className="margin-top">
                    <ReactPaginate
                      previousLabel={"← Previous"}
                      nextLabel={"Next →"}
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      containerClassName={"pagination"}
                      previousLinkClassName={"pagination__link"}
                      nextLinkClassName={"pagination__link"}
                      disabledClassName={"pagination__link--disabled"}
                      activeClassName={"pagination__link--active"}
                    />
                  </div>
               
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
    listings: globalState.listings,
    tags: globalState.tags,
  }
}

export default connect(mapStateToProps)(Listings)

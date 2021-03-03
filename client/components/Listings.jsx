import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import ReactPaginate from 'react-paginate'
import ListingCard from "./ListingCard"

function Listings(props) {
  const type = localStorage.getItem("type")
  const tags = props.tags
  const allListings = props.listings
  const [filter, setFilter] = useState("all")
  const [locations, setLocations] = useState([])
  const [locationFilter, setLocationFilter] = useState("all")
  const [listings, setListings] = useState([{}])

  //pagenation
  const [ currentPage, setCurrentPage ] = useState(0)

  
  
  
  
  
  
  
  useEffect(() => {
    filterListings()
  }, [filter, locationFilter])
  
  useEffect(() => {
    setListings(allListings)
  }, [allListings])
  
  useEffect(() => {
    setLocations(findListingLocations())
  }, [listings])
  


  // pagenation
  const pageLisitngs = allListings.filter(listing => listing.type == type)

  const PER_PAGE = 2
  const offset = currentPage * PER_PAGE

  const currentPageLisings = pageLisitngs.slice(offset, offset + PER_PAGE)

  const pageCount = Math.ceil(pageLisitngs.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  //pagenation ends




  const findListingLocations = () => {
    return allListings.reduce((arr, lst) => {
      const location = lst.location
      if (!arr.includes(location)) {
        arr.push(location)
      }
      return arr
    }, [])
  }

  const filterListings = () => {
    if (filter === "all" ) {
      if(locationFilter == 'all'){
        setListings(props.listings)
      } else {
        setListings(
          allListings.filter(listing => {
            if(listing.location == locationFilter){
              return listing
            }
          })
        )
      }
    } else {
      if(locationFilter == 'all'){
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
            if (listing.tag_name == filter && listing.location == locationFilter){
              return listing
            }
          })
        )
      }
    }
  }



  //if tag filter is all, and location filter is all, just use setListings
  //if tag filter is all and location filter is something, just use allListing filtered by location
  //if tag filter is something and location filter is all, just use allListings filtered by tag
  //if tag filter is something and location filter is something, filter by both

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value)
  }

  return (
    <>
      {type == "looking" ? (
        <h1 className="title"> People are seeking!</h1>
      ) : (
        <h1 className="title"> People are offering!</h1>
      )}
      <div>
        <select name="tag" onChange={handleChange} value={filter}>
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
        <button onClick={() => setFilter('all')}>reset</button>
      </div>
      <div>
        <select className='locationSelect' name="location" onChange={handleLocationFilterChange} value={locationFilter}>
          <option value={"all"} disable="true" hidden>Choose location</option>
          {locations.map((l) => {
            return <option key={l} value={l}>{l}</option>
          })}
        </select>
        <button onClick={() => setLocationFilter('all')}>reset</button>
      </div>
      <div className="container">
        {console.log(currentPageLisings)}
        {currentPageLisings.map((listing) => {
          if (listing.type == type) {
            return <ListingCard key={listing.id} listing={listing} />
          }
        })}
      </div>
      {pageCount}
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

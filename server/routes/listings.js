const express = require("express");
const db = require("../db/listings");
const router = express.Router();
const {
  addNewListing,
  addNewListingTag,
  getListingById,
  deleteById,
  updateListing,
  getListingsByTagId,
  addBookmark,
  deleteBookmark,
  getBookmarks,
  updateListingTag
} = require("../db/listings");



//Get all listings
router.get("/", (req, res) => {
  db.getListings()
    .then((listings) => {
      res.json(listings);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    });
});

router.delete('/bookmark', (req, res) => {
  const id = req.body.id
  deleteBookmark(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })

})

router.post("/", (req, res) => {
  const newListing = req.body.listing;
  const tagId = req.body.tagId;
  return addNewListing(newListing).then((listingId) => {
    addNewListingTag(listingId, tagId).then(() => {
      res.sendStatus(200);
      return null;
    });
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  getListingById(id).then((listing) => {
    res.json(listing);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  deleteById(id)
    .then(() => {
      res.json({});
    });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  updateListing(id, req.body.newListing)
  .then(listing => {
    updateListingTag(listing.id, req.body.tagId)
    .then(() => {
      res.sendStatus(200)
    })
  })
});

router.get("/tag/:id", (req, res) => {
  const id = req.params.id;  //req.body doesn't exist on a get!!!
  getListingsByTagId(id)
    .then((listings) => {
      res.json(listings);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    });
});

router.post("/bookmark", (req, res) => {
  const newBookmark = req.body
  addBookmark(newBookmark)
    .then(() => {
      res.sendStatus(200)
      return null
    })
})

router.get('/bookmark/:id', (req, res) => {
  const user_id = req.params.id
  getBookmarks(user_id)
    .then((bookmarks) => {
      res.json(bookmarks)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    })
})


module.exports = router;
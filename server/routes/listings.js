const express = require("express");
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3')

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

aws.config.update({
  region: "us-west-2",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});


const s3 = new aws.S3({ /* ... */ })

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      console.log('1', file)
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      console.log('2', file)
      cb(null, Date.now().toString())
    }
  })
})


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

router.post("/", upload.single('img'), (req, res) => {
  // console.log(req.body);
  // let newListing = {user_id: null, type: req.body.type, title: req.body.title, description: req.body.description, image: "", time: null}
  const newListing = {
    "type": req.body.type,
    "title": req.body.title,
    "description": req.body.description,
    "user_id": req.body.user_id,
    "time": req.body.time,
  };

  if (req.file && req.file.location) {
    console.log('adding image')
    newListing.image_url = req.file.location
  }

  // let imagePath = req.file.path;
  // const imageName =


  const tagId = req.body.tagId;
  return addNewListing(newListing).then((listingId) => {
    // if (req.file !== undefined) {
    //   if (req.file.originalname.endsWith(".jpg")) {
    //     fs.rename(req.file.path, "server/public/listings-images/" + listingId + ".jpg", () => {})
    //   } else {
    //     fs.unlink(req.file.path, () => {})
    //   }
    // }

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
    // console.log(id)
    .then(() => {
      res.json({});
    });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id, req.body.newListing, req.body.tagId)
  updateListing(id, req.body.newListing)
  .then(listing => {
    // console.log(req.body.tagId)
    updateListingTag(listing.id, req.body.tagId)
    .then(() => {
      res.sendStatus(200)
    })
  })
});

router.get("/tag/:id", (req, res) => {
  const id = req.params.id;  //req.body doesn't exist on a get!!!
  // console.log(id);
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

const express = require('express');
//create backend application
const app = express();


//import  modules
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');


//connect application to db
mongoose.connect('mongodb://localhost:27017/campingDB', { useNewUrlParser: true, useUnifiedTopology: true });


//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//define image folder destination
app.use('/images', express.static(path.join('backend/images')))

// import objects
const Center = require('./models/center');
const User = require('./models/user');

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});


//define images to insert
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    // verify if image is correspends to mime type
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});

//centers
//get centers
app.get('/allCenters', (req, res) => {
  console.log('i am here for allCenters');
  Center.find((err, docs) => {
    if (err) {
      console.log(('Error'), err);
    } else {
      res.status(200).json({
        message: 'here all objects',
        centers: docs
      });
    }
  })
})
//add center
app.post('/addCenter', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('Here in adding Center');
  console.log('req;file', req.file);
  url = req.protocol + '://' + req.get('host');
  const center = new Center({
    name: req.body.name,
    location: req.body.location,
    phone: req.body.phone,
    description: req.body.description,
    email: req.body.email,
    socialMedia: req.body.socialMedia,
    region: req.body.region,
    facilities : req.body.facilities,
    rate: req.body.rate,
    image: url + '/images/' + req.file.filename
  });
  //stocker dans DB
  center.save().then(
    result => {
      if (result) {
        res.status(200).json({
          message: "Added Successfully"
        });
      }
    }
  );
});
//get one center
app.get('/getCenter/:id', (req, res) => {
  console.log('Here in get', req.params.id);
  Center.findOne({ _id: req.params.id }).then(
    data => {
      if (data) {
        res.status(200).json({
          center: data
        })
      }
    }
  )
})
//edit Center
app.put('/editCenter/:id', (req, res) => {
  console.log("here in edit", req.params.id);
  const newCenter = new Center({
    _id: req.body._id,
    name: req.body.name,
    location: req.body.location,
    phone: req.body.phone,
    description: req.body.description,
    email: req.body.email,
    socialMedia: req.body.socialMedia,
    rate: req.body.rate
  });
  //update takes 2 params : 1st for search object and 2nd to repl
  Center.update({ _id: req.params.id }, newCenter).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Center updated Successfully'
        })
      }
    }
  );
});
//deleteCenter
app.delete('/deleteCenter/:id', (req, res) => {
  console.log('here in delete', req.params.id);
    Center.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'center Deleted Successfully'
        });
      }
    }
  )
});


//user Functions
//sign up
app.post('/addUser', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('Here in adding User');
  console.log('req;file', req.file);
  url = req.protocol + '://' + req.get('host');
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone : req.body.phone,
    password: req.body.password,
    image: url + '/images/' + req.file.filename
  });
  //stocker dans DB
  user.save().then(
    result => {
      if (result) {
        res.status(200).json({
          message: "Added Successfully"
        });
      }
    }
  );
});
//get all users 
app.get('/allUsers', (req, res) => {
  console.log('i am here for allusers');
  User.find((err, docs) => {
    if (err) {
      console.log(('Error'), err);
    } else {
      res.status(200).json({
        message: 'here all objects',
        users: docs
      });
    }
  })
});
//delete user
app.delete('/deleteUser/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  //recuperer l'id : req.params.id
  //delete 
  User.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'user Deleted Successfully'
        });
      }
    }
  )
});
//get user by id
app.get('/getUser/:id', (req, res) => {
  console.log('Here in get', req.params.id);
  User.findOne({ _id: req.params.id }).then(
    data => {
      if (data) {
        res.status(200).json({
          user: data
        })
      }
    }
  )
})
//editUser
app.put('/editUser/:id', (req, res) => {
  console.log("here in edit", req.params.id);
  const newUser = new User({
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone : req.body.phone,
    password: req.body.password,
  });
  //update takes 2 params : 1st for search object and 2nd to repl
  User.update({ _id: req.params.id }, newUser).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'updated Successfully'
        })
      }
    }
  );
});
//login
app.post('/login',(req,res) => {
  console.log('here in logging',req.body);
  User.find({email : req.body.email, password : req.body.password}).then(
    data  => {
    if (data) {
      res.status(200).json({
        user : data 
      })
    }
  })
});
module.exports = app;
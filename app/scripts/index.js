'use strict';

////////////////////////
// Selector variables //
////////////////////////

var fb = new Firebase('https://exandoh.firebaseio.com/'),
    createUsers;


////////////////////////////////
// Create Player //////////////
////////////////////////////////


  $('#createUser').click(function(event){
    console.log('button clicked')
    event.preventDefault();

    createUsers = {
        username: $('#newUser').val()
      }
    console.log(createUsers);
     addUser(createUsers, function(data){});
  });

  function addUser(data, cb) {
    var addUserToDB = fb.push(data);
    cb(addUserToDB)
  }

  //if authenticated, go to app page

  // fb.child('users').once('value', function(snap){
  //   if (fb.getAuth()) {
  //     $('.loginForm').toggleClass('hidden');
  //     $('.gameBoard').toggleClass('hidden');
  //   }
  // });
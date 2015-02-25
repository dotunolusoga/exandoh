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
    event.preventDefault();

    createUsers = {
        username: $('#newUser').val()
      }
     addUser(createUsers, function(data){});
  });

  function addUser(data, cb) {
    cb(fb.push(data));
  }

  //if authenticated, go to app page

  // fb.child('users').once('value', function(snap){
  //   if (fb.getAuth()) {
  //     $('.loginForm').toggleClass('hidden');
  //     $('.gameBoard').toggleClass('hidden');
  //   }
  // });
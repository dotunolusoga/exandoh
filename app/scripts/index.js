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
     $('.welcomePlayers').attr('data-uuid', data.username);
  });

  function addUser(data, cb) {
    cb(fb.push(data));
  }

//APPEND DATA TO PAGE
function appendPlayersToPage(data) {
  $('.welcomePlayers').append('<div> Welcome ' + data.username + '</div>');
}

//PULL DATA FROM FIREBASE
fb.on('child_added', function(snap){
  var data = snap.val();
  appendPlayersToPage(data);
});


$('.table').on('click', function() {
  // var $td = $($('tbody')).closest('td');
  $('.output').html(event.target.className);
  console.log("You have clicked on the table.")
})

  function createNewGame() {
  }




  //if authenticated, go to app page

  // fb.child('users').once('value', function(snap){
  //   if (fb.getAuth()) {
  //     $('.loginForm').toggleClass('hidden');
  //     $('.gameBoard').toggleClass('hidden');
  //   }
  // });
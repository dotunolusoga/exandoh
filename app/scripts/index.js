'use strict';

////////////////////////
// Selector variables //
////////////////////////

var fb = new Firebase('https://exandoh.firebaseio.com/'),
    createUsers;
var board = [['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']];


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


$('.output').on('click', function() {
  // var $td = $($('tbody')).closest('td');
  $('.clickOutput').html(event.target.className);
  console.log("You have clicked on the table.")
})

$('.newGame').on('click', function() {
  createBoard(board);
  console.log('clicking button!')
})

// function createNewGame() {
//   createBoard(board);
// }

function createBoard(board) {
  board = [['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']];
  var $table = $('<table class="table"></table>');
  board.forEach(function(row) {
    var $tr = $('<tr></tr>');
    row.forEach(function(cell) {
      $tr.append('<td class="cell">' + cell + '</td>');
    });
    $table.append($tr);
  });
  $('.output').append($table);
}


  //if authenticated, go to app page

  // fb.child('users').once('value', function(snap){
  //   if (fb.getAuth()) {
  //     $('.loginForm').toggleClass('hidden');
  //     $('.gameBoard').toggleClass('hidden');
  //   }
  // });
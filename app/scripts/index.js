'use strict';

////////////////////////
// Selector variables //
////////////////////////

var fb = new Firebase('https://exandoh.firebaseio.com/'),
    createUsers,
    board = [['', '', ''], ['', '', ''], ['', '', '']],
    playerOne = 'X',
    playerTwo = 'O',
    playerTurn = true,
    turns = 0;


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


// $('.output').on('click', function() {
//   $('.clickOutput').html(event.target.className);
//   console.log("You have clicked on the table.")
// })

$('.newGame').on('click', function() {
  createBoard(board);
  console.log('clicking button!')
})

function createBoard(board) {
  board = [['', '', ''], ['', '', ''], ['', '', '']];
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

$('.output').on('click', function () {
  console.log('one click is working!')
  var index = $('.cell').index(this);
  $('.clickOutput').text("Index #" + index);
  if(playerTurn === true) {
    $('.cell').append(playerOne);
    playerTurn = false;
    turns += 1;
    turnCount();
  }
  else {
    $('.cell').append(playerTwo);
    playerTurn = true;
    turns  += 1;
    turnCount();
  }
})

function turnCount() {
  if (turns === 9) {
    $('.clickOutput').append('<h1>GAME OVER!!!</h1>')
  }
}

  //if authenticated, go to app page

  // fb.child('users').once('value', function(snap){
  //   if (fb.getAuth()) {
  //     $('.loginForm').toggleClass('hidden');
  //     $('.gameBoard').toggleClass('hidden');
  //   }
  // });
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


  $('#createGame').click(function(event){
    event.preventDefault();

    createGame = {
        username: $('#newUser').val()
      }
     addUser(createUsers, function(data){});
     $('.welcomePlayers').attr('data-uuid', data.username);
  });

  $('#joinGame').click(function(event){
    event.preventDefault();

    joinGame = {
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

function createGameRoom {
  if
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
  $('td').empty();
  $('.clickOutput').empty();
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

$('.output').one('click', function() {
  console.log('one click is working!')
  findCellIndex();
})

function findCellIndex(){
  $('td').one('click', function(){
    var index = $('td').index(this);
    if(playerTurn === true) {
      $(this).text(playerOne);
      playerTurn = false;
    }
    else {
      $(this).text(playerTwo);
      playerTurn = true;
    };
    turns += 1;
    turnCount();
    console.log('td click working!')
  });
}

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
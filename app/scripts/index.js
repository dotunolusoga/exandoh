'use strict';

////////////////////////
// Selector variables //
////////////////////////

var fb = new Firebase('https://exandoh.firebaseio.com/'),
    createUsers,
    board = ['', '', '', '', '', '', '', '', ''],
    playerOne = 'X',
    playerTwo = 'O',
    playerTurn = true,
    turns = 0,
    index;


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

// function createGameRoom {
//   if
// }

//PULL DATA FROM FIREBASE
fb.on('child_added', function(snap){
  var data = snap.val();
  appendPlayersToPage(data);
});

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
      $tr.append('<td id="cell">' + cell + '</td>');
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
    index = $('td').index(this);
    if(playerTurn === true) {
      $(this).append(playerOne);
      board.splice(index, 1, playerOne);
      playerTurn = false;
    }
    else {
      $(this).append(playerTwo);
      board.splice(index, 1, playerTwo);
      playerTurn = true;
    };
    turns += 1;
    turnCount();
    console.log(index)
  });
}

function turnCount() {
  if (board[0] && board[1] && board[2] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  } else if (board[3] && board[4] && board[5] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  } else if (board[6] && board[7] && board[8] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  } else if (board[0] && board[3] && board[6] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  } else if (board[1] && board[4] && board[7] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  } else if (board[2] && board[5] && board[8] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  } else if (board[0] && board[4] && board[8] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  } else if (board[2] && board[4] && board[6] === "X") {
    $('.clickOutput').append('<h1>PLAYER ONE WINS!!!</h1>');
  // } else if
  //     ((board[0] && board[1] && board[2] === "O")
  //   || (board[3] && board[4] && board[5] === "O")
  //   || (board[6] && board[7] && board[8] === "O")
  //   || (board[0] && board[3] && board[6] === "O")
  //   || (board[1] && board[4] && board[7] === "O")
  //   || (board[2] && board[5] && board[8] === "O")
  //   || (board[0] && board[4] && board[8] === "O")
  //   || (board[2] && board[4] && board[6] === "O")) {
  //   $('.clickOutput').append('<h1>PLAYER TWO WINS!!!</h1>');
  } else if(turns === 9) {
    $('.clickOutput').append('<h1>GAME OVER!!!</h1>');
  }
}

  //if authenticated, go to app page

  // fb.child('users').once('value', function(snap){
  //   if (fb.getAuth()) {
  //     $('.loginForm').toggleClass('hidden');
  //     $('.gameBoard').toggleClass('hidden');
  //   }
  // });
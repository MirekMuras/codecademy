// Object/Content team
const team = {
    _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11,
    }],
    _games: [{
      opponent: 'Broncos',
      teampoints: 42,
      opponentpoints: 27,
    }],
  
  // constractor
    get players () {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
  
  // add new player method
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastname: lastName,
        age: age,
      };
  
      this.players.push(player)
    }, 
  
  // add game recording results method
    addGame(opponent, teampoints, opponentpoints){
      const game = {
        opponent: opponent,
      teampoints: teampoints,
      opponentpoints: opponentpoints,
      }
  
      this.games.push(game)
    } 
  }
  
  // invoke methods
  team.addPlayer('Steph', 'Cury', 28)
  team.addPlayer('Lisa','Leslie',44)
  team.addPlayer('Bugs','Bunny',76)
  
  team.addGame('Titans', 100, 98)
  
  // print results
  console.log(team._players)
  console.log(team._games)
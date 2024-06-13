const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer',
  'Vader',
  'Slingo',
];

// Player Class
class Player {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.strength = this.getRandomStrength();
    this.image = `images/super-${id + 1}.png`; // Adjust index to start from 1
    this.type = type;
  }

  // Getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Create a player for displaying
  view = () => {
    const player = document.createElement('div');
    player.className = 'player';
    player.dataset.id = this.id;

    const img = document.createElement('img');
    img.src = this.image;
    player.appendChild(img);

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.innerText = this.name;
    player.appendChild(nameDiv);

    const strengthDiv = document.createElement('div');
    strengthDiv.className = 'strength';
    strengthDiv.innerText = this.strength;
    player.appendChild(strengthDiv);

    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Create a field players
    this.players = players.map((player, index) => {
      // Determine player type based on index (alternating)
      const type = index % 2 === 0 ? 'hero' : 'villain';
      return new Player(index, player, type); // Index starts from 0
    });
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type === type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// Uncomment this part -- only after you complete progression 3
window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
 
/////////////////////////////////////////////
// CONTENTS
/////////////////////////////////////////////
// VARIABLES
// UTILITIES
  // RANDOM NUMBER GENERATOR
  // CHARACTER BUILD
  // ATTACK MULTIPLIER
  // SFX PLAYER
  // HP BAR ANIMATION
// RESET
// CHARACTER CHOICE
// HERO ATTACK
// ENEMY ATTACK
// ATTACK SEQUENCE
// MODAL CONTROLS


/////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////
var music = {},
    types = [],
    gameData = {}
    attackName = '',
    curAttack = {},
    randInt = 0,
    enemyAttack = {},
    characters = [],
    defendProgressInt = null,
    defendProgressComplete = 0,
    progressInt = null,
    progressComplete = 0;

function buildVars(){
  // all the music for the game
  // http://downloads.khinsider.com/game-soundtracks/album/pokemon-gameboy-sound-collection
  music = {
    opening: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/aipycrsoym/101-opening.mp3",
    battle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3",
    victory: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/csqodhnibz/108-victory-vs-wild-pokemon-.mp3",
    pikachu: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/hpjacpzwof/170-pikachu.mp3",
    charmander: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/wfwdwleyga/149-charmander.mp3",
    squirtle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/soagplijvq/152-squirtle.mp3",
    bulbasaur: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/gvqmhhryki/146-bulbasaur.mp3",
    machop: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/viaskmobgb/213-machop.mp3"
  }



  types = ['corallivore','coral','herbivore','predator'];



  // the data for the game in play
  gameData = {
    step: 1,
    hero: {},
    enemy: {}
  }



  // attack variables
  attackName = '';
  curAttack = {};
  randInt = 0;
  enemyAttack = {};
  defendProgressInt = null;
  defendProgressComplete = 0;
  progressInt = null;
  progressComplete = 0;




  // available characters
  characters = [
    {
      name: "finger coral",
      type: 'coral',
      weakness: ['corallivore'],
      resistance: ['herbivore'],
      img: {
        default: "https://i.imgur.com/BI5AD0k.png",
        front: "https://i.imgur.com/ocBKa1z.png",
        back: "https://i.imgur.com/ocBKa1z.png"
      },
      hp: {
        current: 2000,
        total: 2000
      },
      attacks: [
        {
          name: "sting with nematocysts",
          hp: randomNum(20,0),
          avail: {
            total: 50,
            remaining: 50
          }
        },
        {
          name: "photosynthesize",
          hp: randomNum(2,0),
          avail: {
            total: 100,
            remaining: 100
          }
        },
        {
          name: "filter feed",
          hp: randomNum(10,0),
          avail: {
            total: 50,
            remaining: 50
          }
        },
        {
          name: "grow",
          hp: randomNum(1,0),
          avail: {
            total: 50,
            remaining: 50
          }
        }
      ]
    },
    {
      name: "white spotted pufferfish",
      type: 'corallivore',
      weakness: ['predator'],
      resistance: ['corallivore','herbivore','coral'],
      img: {
        default: "https://i.imgur.com/fSWyico.png",
        front: "https://i.imgur.com/eX14SJt.png",
        back: "https://i.imgur.com/jthGXxA.png"
      },
      hp: {
        current: 200,
        total: 200
      },
      attacks: [
        {
          name: "puff",
          hp: randomNum(10,5),
          avail: {
            total: 15,
            remaining: 15
          }
        },
        {
          name: "munch",
          hp: randomNum(30,20),
          avail: {
            total: 15,
            remaining: 15
          }
        },
        {
          name: "hide",
          hp: randomNum(5,0),
          avail: {
            total: 20,
            remaining: 20
          }
        },
        {
          name: "get large",
          hp: randomNum(800, 700),
          avail: {
            total: 1,
            remaining: 1
          }
        }
      ]
    },
     {
      name: "plate and pillar coral",
      type: 'coral',
      weakness: ['corallivore'],
      resistance: ['herbivore','predator'],
      img: {
        default: "https://i.imgur.com/yekzaTP.png",
        front: "https://i.imgur.com/HtGceiR.png",
        back: "https://i.imgur.com/HtGceiR.png"
      },
      hp: {
        current: 1500,
        total: 1500
      },
      attacks: [
        {
          name: "sting with nematocysts",
          hp: randomNum(20,0),
          avail: {
            total: 50,
            remaining: 50
          }
        },
        {
          name: "photosynthesize",
          hp: randomNum(2,0),
          avail: {
            total: 100,
            remaining: 100
          }
        },
        {
          name: "filter feed",
          hp: randomNum(10,0),
          avail: {
            total: 50,
            remaining: 50
          }
        },
        {
          name: "grow",
          hp: randomNum(1,0),
          avail: {
            total: 50,
            remaining: 50
          }
        }
      ]
    },
        {
      name: "whitetip reef shark",
      type: 'predator',
      weakness: ['predator'],
      resistance: ['herbivore','corallivore'],
      img: {
        default: "https://i.imgur.com/5GKd2OH.png",
        front: "https://i.imgur.com/UWJX0Gw.png",
        back: "https://i.imgur.com/rxCOuYN.png"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "tail whack",
          hp: randomNum(100,80),
          avail: {
            total: 1,
            remaining: 1
          }
        },
        {
          name: "bite",
          hp: randomNum(40,20),
          avail: {
            total: 8,
            remaining: 8
          }
        },
        {
          name: "chomp",
          hp: randomNum(60,50),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "countershade",
          hp: randomNum(10,5),
          avail: {
            total: 15,
            remaining: 15
          }
        }
      ]
    },
    {
      name: "yellow tang",
      type: 'herbivore',
      weakness: ['predator'],
      resistance: ['herbivore'],
      img: {
        default: "https://i.imgur.com/93g7t8S.png",
        front: "https://i.imgur.com/5tnu1BU.png",
        back: "https://i.imgur.com/a2t4XAQ.png"
      },
      hp: {
        current: 300,
        total: 300
      },
      attacks: [
        {
          name: "nibble",
          hp: randomNum(15,5),
          avail: {
            total: 20,
            remaining: 20
          }
        },
        {
          name: "school",
          hp: randomNum(30,20),
          avail: {
            total: 8,
            remaining: 8
          }
        },
        {
          name: "hide",
          hp: randomNum(1,0),
          avail: {
            total: 15,
            remaining: 15
          }
        },
        {
          name: "fin wiggle",
          hp: randomNum(85, 75),
          avail: {
            total: 1,
            remaining: 1
          }
        }
      ]
    },
    {
      name: "cauliflower coral",
      type: 'coral',
      weakness: ['corallivore'],
      resistance: ['herbivore','predator'],
      img: {
        default: "https://i.imgur.com/AxrLnlF.png",
        front: "https://i.imgur.com/8I7aSUL.png",
        back: "https://i.imgur.com/8I7aSUL.png",
        deranged: "https://i.imgur.com/8I7aSUL.png",
        sleep: "https://i.imgur.com/8I7aSUL.png"
      },
      hp: {
        current: 1500,
        total: 1500
      },
      attacks: [
        {
          name: "sting with nematocysts",
          hp: randomNum(20,0),
          avail: {
            total: 50,
            remaining: 50
          }
        },
        {
          name: "photosynthesize",
          hp: randomNum(2,0),
          avail: {
            total: 100,
            remaining: 100
          }
        },
        {
          name: "filter feed",
          hp: randomNum(10,0),
          avail: {
            total: 50,
            remaining: 50
          }
        },
        {
          name: "grow",
          hp: randomNum(1,0),
          avail: {
            total: 50,
            remaining: 50
          }
        }
      ]
    },
    {
      name: "saddle wrasse",
      type: 'corallivore',
      weakness: ['predator'],
      resistance: [],
      img: {
        default: "https://i.imgur.com/fuRbZ9A.png",
        front: "https://i.imgur.com/yUsFM6d.png",
        back:  "https://i.imgur.com/u0eezbx.png"
      },
      hp: {
        current: 300,
        total: 300
      },
      attacks: [
        {
          name: "bite",
          hp: randomNum(35,20),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "go fast",
          hp: randomNum(15,10),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "shelter in reef crevice",
          hp: randomNum(4,1),
          avail: {
            total: 25,
            remaining: 25
          }
        },
        {
          name: "dazzle",
          hp: randomNum(130, 120),
          avail: {
            total: 1,
            remaining: 1
          }
        }
      ]
    }
  ];
}





/////////////////////////////////////////////
// UTILITY
/////////////////////////////////////////////
// RANDOM NUMBER GENERATOR
// min is optional
function randomNum(max, min){
  // generate a random number

  // min not required
  if(min === undefined || min === '' || min === null){
    // min default value
    min = 0;
  }

  // random number, yay
  return Math.floor(Math.random() * (max - min) + min);
}



// CHARACTER BUILD
// build the character UI
function populateChar(container,character){
  // which img
  var facing = 'front';
  if(character === 'hero'){
    // we see the back of our hero
    // a real hero faces danger
    facing = 'back';
  }

  // build the character
  container.append('<section class="char"><img src="'+gameData[character].img[facing]+'" alt="'+gameData[character].name+'"><aside class="data"><h2>'+gameData[character].name+'</h2><div><progress max="'+gameData[character].hp.total+'"></progress><p><span>'+gameData[character].hp.current+'</span>/'+gameData[character].hp.total+'</p></div></aside></section>');
}



// ATTACK MULTIPLIER
// modify attack value for weaknesses & strengths
function attackMultiplier(attacker, curAttack){
  var defender = 'enemy';
  if(attacker === 'enemy'){
    defender = 'hero';
  }

  if(gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0){
    // weakness exists
    curAttack.hp *= 2;
  }

  if(gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0){
    // weakness exists
    curAttack.hp /= 2;
  }

  curAttack.hp = Math.floor(curAttack.hp);
  return curAttack.hp;
}



// SFX PLAYER
// stops music and plays sfx
function playSound(name){
  // load sfx src
  $('audio.sfx').attr('src', music[name])
  // pause game music
  $('audio.music')[0].pause();
  // character announce yourself
  $('audio.sfx')[0].play();

  // timeout to stop music at given point
  setTimeout(function(){
    // pause the sfx
    $('audio.sfx')[0].pause();
    // start the music again
    $('audio.music')[0].play();
    // reset the sfx
    $('audio.sfx')[0].currentTime = 0;
  },2000);
}


// HP BAR ANIMATION
// stop and set health bar
function setHP(){
  // stop health animation and set value
  clearInterval(defendProgressInt);
  clearInterval(progressInt);
  $('.stadium .enemy progress').val(gameData.enemy.hp.current);
  $('.stadium .hero progress').val(gameData.hero.hp.current);
}





/////////////////////////////////////////////
// RESET
/////////////////////////////////////////////
function resetGame(){
  // set default values for game variables
  buildVars();

  // clear the stadium
  $('.hero').empty();
  $('.enemy').empty();

  // reset
  $('.attack-list li').unbind('click');
  $('.attack-list').empty();
  $('.stadium .enemy').css({'padding':'0'});
  $('.instructions p').text('select your REEF CHAMPION');

  // set & start the opening game music
  $('audio.music').attr('src',music["opening"]);
  $('audio.music')[0].play();

  // empty characters
  $('.characters').empty();
  $('.characters').removeClass('hidden');

  for(var i in characters){
    // build the character list
    $(".characters").append('<div class="char-container"><img src="'+characters[i].img.default+'" alt="'+characters[i].name+'"><h2>'+characters[i].name+'</h2><span class="type '+characters[i].type+'"></span></div>')
  }
  characterChoice();
}
resetGame();
$('.logo').click(function(){resetGame();});





/////////////////////////////////////////////
// CHARACTER CHOICE
/////////////////////////////////////////////
function characterChoice(){
  $('.characters .char-container').click(function(){
    // you have chosen a character

    // your chosen character name
    var name = $(this).children('h2').text().toLowerCase();

    switch(gameData.step){
      // switch for the current step in the game

      case 1:
        // step 1: choose your hero
        for(var i in characters){
          if(characters[i].name === name){
            // find and save your chosen hero's data
            gameData.hero = characters[i];
          }
        }

        // remove the character from the available list
        var char = $(this).remove();
        // build my hero
        populateChar($('.stadium .hero'), 'hero');

        for(var i in gameData.hero.attacks){
          // populate attack list
          $('.attack-list').append('<li><p class="attack-name"><strong>'+gameData.hero.attacks[i].name+'</strong></p><p class="attack-count"><small><span>'+gameData.hero.attacks[i].avail.remaining+'</span>/'+gameData.hero.attacks[i].avail.total+'</small></p></li>');
        }

        $('.attack-list').addClass('disabled');

        // update instructions
        $('.instructions p').text('select your ENEMY');
        // set health bar value
        $('.stadium .hero progress').val(gameData.hero.hp.current);

        // let your hero roar
        playSound(name);

        // move on to choosing an enemy
        gameData.step = 2;
        break;

      case 2:
        // step 2: choose your enemy
        for(var i in characters){
          if(characters[i].name === name){
            // find and save the enemy data
            gameData.enemy = characters[i];
          }
        }

        // remove the enemy from the list
        var char = $(this).remove();
        // build the enemy
        populateChar($('.stadium .enemy'), 'enemy');
        // pad the stadium - give them some breathing room
        $('.stadium .enemy').css({'padding':'25px 0'});

        // update instructions
        $('.instructions p').text('FIGHT');

        // hide the hero list
        $('.characters').children().slideUp('500', function(){
          $('.characters').addClass('hidden');
        });

        // update enemy health bar value
        $('.stadium .enemy progress').val(gameData.enemy.hp.current);

        // the enemy whimpers in fear
        playSound(name);

        // update step to attack phase and bind click events
        gameData.step = 3;
        attackList();
        break;
    }
  });
}





/////////////////////////////////////////////
// HERO ATTACK
/////////////////////////////////////////////
function attackEnemy(that, callback){
  // attack the enemy!!!

  // name of your attack
  attackName = that.children('.attack-name').children('strong').text().toLowerCase();

  for(var i in gameData.hero.attacks){
    if(gameData.hero.attacks[i].name === attackName){
      // get chosen attack data
      curAttack = gameData.hero.attacks[i];
    }
  }

  // if there are attacks left
  if(curAttack.avail.remaining > 0){
    // attack!!!
    $('.attack-list').addClass('disabled');

    $('.hero .char img').animate(
      {
        'margin-left': '-30px',
        'margin-top': '10px'
      },
      50,
      'swing'
    );
    $('.hero .char img').animate(
      {
        'margin-left': '30px',
        'margin-top': '-10px'
      },
      50,
      'swing'
    );
    $('.hero .char img').animate(
      {
        'margin-left': '0px',
        'margin-top': '0px'
      },
      50,
      'swing'
    );

    // attack enemy
    gameData.enemy.hp.current -= attackMultiplier('hero', curAttack);

    if(gameData.enemy.hp.current <= 0){
      // Enemy is dead

      clearModal();
    $('.modal-in header').append('<h1>VICTORY</h1><span class="close">x</span>');
    $('.modal-in section').append('<p>choose your next enemy');
    $('.modal-out').slideDown('400');
      modalControls();

      gameData.enemy.hp.current = 0;
      // clear the stadium of the dead
      $('.enemy').empty();
      // show the available characters
      $('.characters').removeClass('hidden');
      $('.characters').children().slideDown('500');

      gameData.enemy = {};

      // choose enemy
      gameData.step = 2;
      // unbind click for reset
      $('.attack-list li').unbind('click');
    }else{
      // enemy is still alive (Attack!!!)

      // subtract attack
      curAttack.avail.remaining--;

      // interval to animate health bar
      progressInt = setInterval(function(){
        // get current value of health bar
        var val = $('.stadium .enemy progress').val();
        val--;

        // update health bar value
        $('.stadium .enemy progress').val(val);

        if(val === gameData.enemy.hp.current){
          // if you've hit your target clear interval
          clearInterval(progressInt);
          progressComplete = 1;
        }
      },1);

      // update health numbers
      $('.stadium .enemy .data p span').text(gameData.enemy.hp.current);
      that.children('.attack-count').children('small').children('span').text(curAttack.avail.remaining);

      // wait a second to recover
      setTimeout(function(){
        // now defend that attack
        defend(that);
      }, 1000);
    }
  }
}





/////////////////////////////////////////////
// ENEMY ATTACK (DEFEND)
/////////////////////////////////////////////
function defend(that){
  // random attack
  randInt = randomNum(gameData.enemy.attacks.length);
  enemyAttack = gameData.enemy.attacks[randInt];

  // enemy attack animation sequence
  $('.enemy .char img').animate(
    {
      'margin-right': '-30px',
      'margin-top': '-10px'
    },
    50,
    'swing'
  );
  $('.enemy .char img').animate(
    {
      'margin-right': '30px',
      'margin-top': '10px'
    },
    50,
    'swing'
  );
  $('.enemy .char img').animate(
    {
      'margin-right': '0px',
      'margin-top': '0px'
    },
    50,
    'swing'
  );

  // attack the hero
  gameData.hero.hp.current -= attackMultiplier('enemy', enemyAttack);

  if(gameData.hero.hp.current <= 0){
    // ding dong the hero's dead

    clearModal();
    $('.modal-in header').append('<h1>DEFEAT</h1><span class="close">x</span>');
    $('.modal-in section').append('<p>just another day on the reef!');
    $('.modal-out').slideDown('400');
    modalControls()

    gameData.hero.hp.current = 0;

    resetGame();
  }else{
    // the hero lives

    // subtract attack from enemy count
    gameData.enemy.attacks[randInt].avail.remaining--;

    // health bar animation
    defendProgressInt = setInterval(function(){
      // get current val of health bar
      var val = $('.stadium .hero progress').val();
      val--;

      // update health bar value
      $('.stadium .hero progress').val(val);

      if(val === gameData.hero.hp.current){
        // stop the interval when target is attained
        clearInterval(defendProgressInt);
        defendProgressComplete = 1;
      }
    },1);

    // update health value
    $('.stadium .hero .data p span').text(gameData.hero.hp.current);

    setTimeout(function(){
      if(defendProgressComplete && progressComplete){
        $('.attack-list').removeClass('disabled');
      }else{
        setHP();
        $('.attack-list').removeClass('disabled');
      }
    }, 500);
  }
}





/////////////////////////////////////////////
// ATTACK SEQUENCE
/////////////////////////////////////////////
function attackList(){
  // attack instantiation
  $('.attack-list').removeClass('disabled');

  $('.attack-list li').click(function(){
    // attack choice is clicked
    var doAttack = 1;

    if(gameData.step === 3){
      // attack step - start attack sequence
      attackEnemy($(this));
    }
  });

  setTimeout(function(){
    // characters chosen - set & start the battle music
    $('audio.music').attr('src',music["battle"]);
    $('audio.music')[0].play();
  },1500);
}





/////////////////////////////////////////////
// MODAL
/////////////////////////////////////////////
function modalControls(){
  $('.modal-out').click(function(){
    $(this).slideUp('400');
  });
  $('.modal-in .close').click(function(e){
    $('.modal-out').slideUp('400');
  });

  $('.modal-in').click(function(e){
    e.stopPropagation();
    e.preventDefault();
  });
}

function clearModal(){
  $('.modal-in header').empty();
  $('.modal-in section').empty();
  $('.modal-in footer').empty();
  setHP();
}
// code remixed from https://glitch.com/embed/#!/dive-the-game?path=readme.md%3A1%3A0

// hides the game text before 'start' is clicked
document.getElementById("game").style.visibility = "hidden";

// makes the start screen disappear and the game text begin when the start button is clicked
document.getElementById("startGame").addEventListener("click", function() {
  document.getElementById("screen").style.display = "none";
  document.getElementById("moon").style.display = "none";
  document.getElementById("game").style.visibility = "initial";
});

// * comments  with 3 /// taken from remixed code *

const loadDisk = (disk, config = {}) => {
  /// build default (DOM) configuration
  const defaults = {
    /// retrieve user input
    getInput: () => document.querySelector("#input").value,
    /// overwrite user input
    setInput: str => {
      document.querySelector("#input").value = str;
    },
    /// render output
    println: (str, isImg = false) => {
      const output = document.querySelector("#output");
      const newLine = document.createElement("div");

      output.appendChild(newLine).innerText = str;
      output.scrollTop = output.scrollHeight;
    },
    /// prepare the environment
    // this allows you to press enter to input text in the textbox which trigger the next direction
    setup: ({ applyInput = () => {}, navigateHistory = () => {} }) => {
      const inputBox = document.querySelector("#input");
      inputBox.onkeypress = e => {
        const ENTER = 13;

        if (e.keyCode === ENTER) {
          applyInput();
        }
      };
    }
  };

  // makes all game text appear on screen
  const { getInput, setInput, println, setup } = Object.assign(
    defaults,
    config
  );

  /// disk -> disk
  // makes game start/ textbox disappear on the first page
  const init = disk => {
    const initializedDisk = Object.assign({}, disk);
    initializedDisk.rooms = disk.rooms.map(room => {
      room.visits = 0;
      return room;
    });

    return initializedDisk;
  };

  disk = init(disk);

  // allows them to import and respond in textbox
  const inputs = [""];
  let inputsPos = 0; /// store all user commands

  /// string to find the correct room when typed
  const getRoom = id => disk.rooms.find(room => room.id === id);

  // when a room is typed in, the name and description of that room appears, along with the next room options
  const enterRoom = id => {
    const room = getRoom(id);

    println(room.img, true);

    println(`---${room.name}---`);

    println(room.desc);

    disk.roomId = id;

    // triggers the switch to the other html pages when you get stuck or escapet
    if (room.name === "Stay Put") {
      window.location.href = "/stayput-gameover.html";
    }

    if (room.name === "Side Yard") {
      window.location.href = "/sideyard-escape.html";
    }

    if (room.name === "Garden") {
      window.location.href = "/garden-escape.html";
    }

    if (room.name === "Basement") {
      window.location.href = "/basement-gameover.html";
    }
  };

//starts game

  const startGame = disk => {
    enterRoom(disk.roomId);
  };

  startGame(disk);
// sets up the input field at the bottom of the screen
   const applyInput = () => {     const input = getInput();     inputs.push(input);     inputsPos = inputs.length;     println("> " + input);

    const val = input.toLowerCase();
    setInput(""); // reset input field

    // makes error text appear if you type an input that doesn't exist
    const exec = cmd => {
      if (cmd) {
        cmd();
      } else {
        println("Sorry, I didn't understand your input.");
      }
    };

    const args = val.split(" ");
    const cmd = args[0];
    const room = getRoom(disk.roomId);
    

    /// nested strategy pattern
    /// 1st tier based on # of args in user input
    /// 2nd tier based on 1st arg (command)

    // response if there's nowhere to go
    const strategy = {
      1() {
        const cmds = {
          go() {
            const exits = room.exits;
            if (!exits) {
              println("There's nowhere to go.");
              return;
            }
          }
        };
        exec(cmds[cmd]);
      },
      //response if someone types in a wrong room or there is no exit
      2() {
        const cmds = {
          go() {
            const exits = room.exits;
            if (!exits) {
              println("There's nowhere to go.");
              return;
            }
            const nextRoom = exits.find(exit => exit.dir === args[1]);
            if (!nextRoom) {
              println("That's not an option, choose somewhere else to go.");
            } else {
              enterRoom(nextRoom.id);
            }
          }
        };
        exec(cmds[cmd]);
      }
    };

    strategy[args.length]();
  };

//keeps running list of navigation history 
  const navigateHistory = dir => {
    if (dir === "prev") {
      inputsPos--;
      if (inputsPos < 0) {
        inputsPos = 0;
      }
    } else if (dir === "next") {
      inputsPos++;
      if (inputsPos > inputs.length) {
        inputsPos = inputs.length;
      }
    }

    setInput(inputs[inputsPos] || "");
  };

  setup({ applyInput, navigateHistory });
};

// makes confetti appear when the 'congrats' text is hovered over in the escape html pages.

document.getElementById("congrats");
"congrats"({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

// Add this if we want a mouseover: .addEventListener("mouseover", function mouseOver()

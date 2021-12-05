// code remixed from https://glitch.com/embed/#!/dive-the-game?path=readme.md%3A1%3A0

// this javascript file makes all of the room options available, includes a written description of each room, and provides set options for which rooms can be navigated to next

const unlimitedAdventure = {
  roomId: "houseIntro",
  numPhotos: [],

  rooms: [
    {
      name: "Haunted House Horror!",
      id: "houseIntro",
      img: `

      `,
      desc:
      // provide directions for how to navigate through the game and back story to explain the story of the haunted house
        `DIRECTIONS: Type to navigate through the haunted house with the goal of escaping. Type "Go" with an option that follows (EX: GO basement, GO garden)
                     Don't forget to include the hyphen!
        
 It was a cold October night and you and your friends decide to enter the haunted house you have heard rumors about for years. It is at the end of Grave Road, a long dead end street with poor lighting. Each time you drive past you are convinced you hear the sounds of bats and the ghost who lives in house 13. There is allegedly gold in house 13, but no one has found it yet. Some people enter and never escape. Do you dare to take this leap?

 To begin, enter GO FORWARD 
      `,
      exits: [{ dir: "forward", id: "goForward" }]
    },
    
    // command to begin the game
    {
      name: "Haunted House",
      id: "goForward",
      img: `

`,
      desc: `
You have approched the house. How do you wish to enter?
You can go through a BROKEN-WINDOW, the BACK-DOOR, or the CELLAR-DOOR.
      `,
      exits: [
        { dir: "broken-window", id: "brokenWindow" },
        { dir: "back-door", id: "backDoor" },
        { dir: "cellar-door", id: "cellarDoor" }
      ]
    },
    
    
    {
      name: "Dining Room",
      id: "brokenWindow",
      img: `

`,
      desc: `
You have now entered the dining room! Congrats, but be quiet, you never know who's around the corner. Where to next?
You can STAY-PUT, escape to the SIDE-YARD, or go to the KITCHEN, BASEMENT, LIVING-ROOM, or UPSTAIRS-HALLWAY.
      `,
      exits: [
        { dir: "upstairs-hallway", id: "upstairsHallway" },
        { dir: "stay-put", id: "stayPut" },
        { dir: "kitchen", id: "kitchen" },
        { dir: "basement", id: "basement" },
        { dir: "living-room", id: "livingRoom" },
        { dir: "side-yard", id: "sideYard" }
      ]
    },
    
    
    {
      name: "Kitchen",
      id: "backDoor",
      img: `

`,
      desc: `
You have now entered the kitchen! Congrats, but be quiet, you never know who's around the corner. Where to next?
You can STAY-PUT, escape to the GARDEN, or go to the DINING-ROOM.
      `,
      exits: [
        { dir: "garden", id: "garden" },
        { dir: "stay-put", id: "stayPut" },
        { dir: "dining-room", id: "diningRoom" }
      ]
    },
     
 // since entering the following 5 rooms trigger a new webpage, they have no description or exit options.
    {
      name: "Basement",
      id: "cellarDoor",
      img: `

`,
    },
    
    
    {
      name: "Basement",
      id: "basement",
      img: `

`,
     },
    
    
    {
      name: "Garden",
      id: "garden",
      img: `
`,
     },
    
    
    {
      name: "Side Yard",
      id: "sideYard",
      img: `

`,
    },
    
    
    {
      name: "Stay Put",
      id: "stayPut",
      img: `

`,
    },
    
    
    {
      name: "Kitchen",
      id: "kitchen",
      img: `

`,
      desc: `
The unmarked bottles on the kitchen counter look dusty and unfamiliar. The head of a large antelope looms over the dining room table, which strikes you as slightly suspicious. You don't know if you have time to stay investigate. Where to now?
You can STAY-PUT, escape to the GARDEN, or go to the DINING-ROOM.
      `,
      exits: [
        { dir: "stay-put", id: "stayPut" },
        { dir: "dining-room", id: "diningRoom" },
        { dir: "garden", id: "garden" }
      ]
    },
    
    
    {
      name: "Dining Room",
      id: "diningRoom",
      img: `

`,
      desc: `
A broken chandelier hangs from the ceiling over the dining table. Six stained upholstered chairs surround the table, and an empty china cabinet stands against the wall. You wander through the space, but don't see anything of value. Where to next?
You can STAY-PUT, escape to the SIDE-YARD, or go to the KITCHEN, BASEMENT, LIVING-ROOM, or the UPSTAIRS-HALLWAY.
      `,
      exits: [
        { dir: "kitchen", id: "kitchen" },
        { dir: "basement", id: "basement" },
        { dir: "living-room", id: "livingRoom" },
        { dir: "side-yard", id: "sideYard" },
        { dir: "stay-put", id: "stayPut" },
        { dir: "upstairs-hallway", id: "upstairsHallway" }
      ]
    },
      
      
   {
      name: "Living Room",
      id: "livingRoom",
      img: `

`,
      desc: `
Long white sheets lay draped over the massive couches. It might look pretty if you take them off and redecorate, but you could also continue your exploration. Where to next?
You can STAY-PUT, or go to the DINING-ROOM.
`,
      exits: [
        { dir: "dining-room", id: "diningRoom" },
        { dir: "stay-put", id: "stayPut" }
      ]
    },
      
      
    {
      name: "Upstairs Hallway",
      id: "upstairsHallway",
      img: `

`,
      desc: `
You look down the slanted hallway, deciding where to go next. Will you continue exploring, or head back downstairs?
You can go back downstairs to the DINING-ROOM, or decide to go to the MASTER-BEDROOM, BATHROOM, BEDROOM, or ATTIC.
`,
      exits: [
        { dir: "master-bedroom", id: "masterBedroom" },
        { dir: "bedroom", id: "bedroom" },
        { dir: "bathroom", id: "bathroom" },
        { dir: "attic", id: "attic" },
        { dir: "dining-room", id: "diningRoom"}
      ]
    },
    
    
    {
      name: "Master Bedroom",
      id: "masterBedroom",
      img: `

`,
      desc: `
You open the door and look around the abandoned bedroom. You see an unmade bed, old clothes left in the closet, and ripped window shades. But there's nothing interesting here.
Do you STAY-PUT, or go back to the UPSTAIRS-HALLWAY?
      `,
      exits: [
        { dir: "upstairs-hallway", id: "upstairsHallway" },
        { dir: "stay-put", id: "stayPut" }
      ]
    },
    
    
    {
      name: "Attic",
      id: "attic",
      img: `

`,
      desc: `
You climb the last step into the dark attic. In the corner, you see a chest partially hidden under a sheet. You open it up and discover a golden crown! You decide to take the valuable treasure for yourself. Now, let's see if you can escape without being caught.
Do you STAY-PUT, or go back to the UPSTAIRS-HALLWAY?
      `,
      exits: [
        { dir: "upstairs-hallway", id: "upstairsHallway" },
        { dir: "stay-put", id: "stayPut" }
      ]
    },
      
      
    {
      name: "Bedroom",
      id: "bedroom",
      img: `

`,
      desc: `
You feel you are getting close, but are still unsure of where the crown might be. An old closet sits to the right of a large window, which may lead you to some answers. However, there are a few rooms you still have yet to check out.
Do you STAY-PUT, or go back to the UPSTAIRS-HALLWAY?
`,
      exits: [
        { dir: "upstairs-hallway", id: "upstairsHallway" },
        { dir: "stay-put", id: "stayPut" }
      ]
    },
    
    
    {
      name: "Bathroom",
      id: "bathroom",
      img: `

`,
      desc: `
The soap smells like lavender, but you can get that at Star Market.
Do you STAY-PUT, or go back to the UPSTAIRS-HALLWAY?
      `,
      exits: [
        { dir: "upstairs-hallway", id: "upstairsHallway" },
        { dir: "stay-put", id: "stayPut" }
      ]
    }
  ]
};

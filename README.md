# Haunted House Horror!

A text-based adventure game created by: Alyssa Fell, Ally McCabe, and Shreya Subramaniam

-----

# What is our project?

Try to escape a haunted house!

It was a cold October night and you and your friends decide to enter the haunted house you have heard rumors about for years. It is at the end of Grave Road, a long dead-end street with poor lighting. Each time you drive past you are convinced you hear the sounds of bats and the ghost who lives in house 13. There is allegedly gold in house 13, but no one has found it yet. Some people enter and never escape. Do you dare to take this leap?

To play the game and navigate the haunted house with the goal of escaping after finding gold, type "Go" with an option that follows (EX: GO basement, GO garden) Be sure to include the hyphen if the location has two words.

# More on the code:

The `index.html` page serves as a visual framework for the opening page and defines the game going forward. It organizes our site so the page can be dynamically updated as the game progresses using the various JavaScript pages and styled using CSS, as it contains references to the JS and CSS files.

The `script.js` file controls the functionality and interactivity of the game. There were many gameplay features that were made in this file, including the text box input and the user's room navigation history.

The `haunted-house.js` file contains the elements that control the flow of the storyline. The 'start' and 'play again' buttons are programmed in this file, and when users enter location names in response to the game text, `haunted-house.js` controls the new room names, descriptions, and navigation options that appear.

The `style.css` file programs the styling of the game including fonts, animations, spacing, and other visual attributes. Key elements that were enhanced by this CSS file include the hovering ghost button, the "Road Rage" font present throughout all screens, and the overarching color scheme.

The location-specific HTML files include `basement-gameover.html`, `garden-escape.html`, `sideyard-escape.html`, and `stayput-gameover.html`. Each of these files directs the user to separate end-game pages depending on the outcome of their choices. They are shown a screen that lets them know whether they won or lost as a result of entering the room they did, which then gives them the option to restart the game and try a different route.

# Method:

To establish a framework and plan of action, we used class time to storyboard on Figma and Miro. We pulled inspiration from "dive-the-game" on Glitch as well as the layouts of text-based adventure games in general. Once we had an idea of what we wanted our game to look like, we set up `index.html`, `script.js`, and `style.css` as starting files. 

We also leveraged class time to be able to ask Professor Bhargava and the TAs any questions we needed. One key strength of the final project was our ability to effectively collaborate on every element of the code. We were proactive in setting up meetings with each other and working through challenges in the code so that the work didn't get pushed to the last minute. We were able to add embellishments and animations, although we didn't get in as many as we'd like. We also set up our GitHub repository early on, which gave us time to troubleshoot any issues we had uploading files.

If we were to extend this project, we would add a confetti that appears when the game is won. We would also add more to the storyline and come up with other endings and actions the user can take. Overall, the project was a success and we were able to achieve all the goals we set.

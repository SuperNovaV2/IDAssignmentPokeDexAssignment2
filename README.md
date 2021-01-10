# PokeDex Website
In this project the goal of the project is to make a PokeDex website where you will be able to search for various pokemons by name,
search for different pokemons by regions and be able to learn more about these pokemons. This project will be fixing the problem statement of
having so many generations of pokemon (up to 8 at the moment) and all these pokemons will be in 1 handler which is easy to use. You will be able to use
this handler to find the pokemon you are looking for and be able to find out its types, abilities, height, weight and base stats for IV evolution and pokemon
team building. The audience for this website will be anyone who plays any pokemon game as this handler includes ALL generations up to date.
# Design Process
This website will be for anyone who plays pokemon games so it will target mainly the younger generation hence i want to make the website colorful yet simplistic and
easy to use as possible to attract their attention easily. Using this website will enable you to  learn more about the important information any pokemon that you desire
This website will go 1 step further and not just show basic information about pokemons but allow you to click on the pokemon to learn more indepth information such as
base stats of a pokemon which is essential in the game which will be displayed on a bar chart to read.
- As a user, i want to be able to search for the pokemon i want by name
- As a user, i want to be able to search for the pokemon im interested in by regions
- As a user, i want to be able to find more indepth information about pokemon by clicking on them
- As a user, i want to be able to go back and fourth easily
- [ADOBE XD Wireframe](https://xd.adobe.com/view/04d1e1e8-2eb8-4c1d-8975-ab0eab39fc0a-5182/)
# Features
Search bar - Allows users to search for the pokemon of their choice by either name or id
Search by regions - Allows users to view all the pokemons in a region through radio buttons
Basic PokemonCard - Allows users to view basic information about the pokemon such as name, id and main type.
Indepth PokemonCard - Allows users to click on the basic pokemoncard to view more indepth information about that pokemon such as possible secondary type, height, weight, Abilities.
Bar chart - This bar chart will be in the indepth pokemoncard where you will be able to see all basic stats of the pokemon in a barchart format.
# Technologies Used
- [Jquery](https://jquery.com/)
    - The project uses JQuery to simplify DOM manipulation.
- [Chart.js](https://www.chartjs.org/)
    - The project uses charts to show stats easier and nicer.
- HTML
    - This project uses HTML to code the website itself.
- CSS
    - This project uses CSS to beautify the websitet itself,
- Javascript
    - This project uses javascript to gather information about the pokemon from the API and for other functions.
- [PokeAPI](https://pokeapi.co/)
    - The project uses pokeapi to get the information about the different pokemons
- [PokeRes](https://pokeres.bastionbot.org/)
    - This project also uses this api to get images of the pokemons
- Adobe XD
    - To make the wireframe for this project
# Testing
- Automated Testing
    - [W3C MarkUp Validation](https://validator.w3.org)
    - [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
    - [JS Validation](https://jshint.com/)
- Search bar
    - Try to search for a pokemon by name and ensure that it works
    - Try to search for a pokemon by id and ensure that it works
    - Try to search for a non-existent pokemon and ensure the correct error message shows
- Search by regions
    - Try to search for all pokemon in each region one by one and ensure they display properly
    - Check if displayed pokemon for each region are correct
- Click on pokemoncard
    - Try to click on any pokemoncard and ensure it loads after 3 seconds to prevent any errors
- Information in pokecard when clicked
    - Check if information in pokecard is correct
    - Check if bar graph is functioning properly
- Back button
    - Check if the back button brings you back to the pokedex main search page
- Bar graph
    - Ensure details are correctly displayed
    - Ensure that after going back and clicking on another pokecard bar graph is reset and correct details are displayed
- Responsive
    - Ensure that main page it is responsive for phones and displayed properly (eg used IPhone8 Plus)
    - Ensure that information in pokecard when clicked is responsive and displayed properly (eg ysed IPhone8 Plus)
# Deployment
 [Page is here](https://supernovav2.github.io/IDAssignmentPokeDexAssignment2/)
    - Downloading this website locally:
        - After signing into GitHub/Making a new account clone the project
        - Download the code and open the website through a source-code editor like visual studio code
# Credits
- Content
    - [Youtube video #1](https://www.youtube.com/watch?v=L0pPRauLP2E&ab_channel=JamesQQuick)
    - [Youtube video #2](https://www.youtube.com/watch?v=i6PMwsgpnyg&ab_channel=ROYALSCODECAMP)
    - [Youtube video #3](https://www.youtube.com/watch?v=XL68br6JyYs&ab_channel=FlorinPop)
    - [Submit button](https://www.jotform.com/help/118-how-to-customize-the-submit-button-with-css)
    - [Search bar](https://codepen.io/RajRajeshDn/pen/MroGMz)
    - [Radio Button](https://codepen.io/avstorm/pen/jxjKGj)
- Media
    - The photos used in the site was obtained from [PokeRes](https://pokeres.bastionbot.org/) API
- Acknowledgements
    - I received inspiration for this project from all the varios youtube videos which i have credited above.


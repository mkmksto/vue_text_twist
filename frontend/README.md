# changes from svelte ver

-   animate fetching of data (i.e. show every word it is trying to fetch)

# Misc TODO's

-   create a computed promise (?) that resolves when the data from the backend has been fetched, you can maybe await this before doing stuff

# TODO

-   update gameState.js gameOverState (computed) to take into account the timer value

# Roadmap

-   (not yet completed) create a win state store (simple ref with method to set if game is won or lost), maybe also create a computed property for this (or maybe it's the other way around, but it might be better for one to be a computed prop of the other, rather than 2 separate stores)

-   do the countdown timer last (prob a store)
-   update lose state when timer goes to 0

-   how to icons (prob font awesome) for vue
-   hover tooltip for keyboard shortcuts
-   implement pausing (a button, and when you enter settings, hide the current word when game is paused)

-   ! PRACTICE refactoring (creating some retarded branch then name you variables and functions better!)
-   also practice git then

# Future TODO's

-   persist scores inside localstorage? create a modal that shows maybe your top 5 highest score, and when u got that score

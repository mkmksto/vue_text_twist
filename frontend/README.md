# changes from svelte ver

-   animate fetching of data (i.e. show every word it is trying to fetch)

# Misc TODO's

-   create a computed promise (?) that resolves when the data from the backend has been fetched, you can maybe await this before doing stuff
-

# Roadmap

-   implement a function for checking if a guess is valid (probably would be coupled to guess store) (maybe can also be a computed???)
-   implement a guess store function for validating guesses (https://github.com/mkmksto/svelte_text_twist/blob/master/frontend/src/functions/guessValidation.js)
-   (additional details) - update GameControls.vue's Enter key, first test guess is true (testGuess), then update the win state

-   implement guessing subwords @ SubWords.vue, each row (from each column) should have a conditional (dynamic?) class that determines whether it shows or not @ the card (also, BG should change when guessed)

-   create a win state store (simple ref with method to set if game is won or lost), maybe also create a computed property for this (or maybe it's the other way around, but it might be better for one to be a computed prop of the other, rather than 2 separate stores)
-   game lost modal

-   implement give up btn (invokes a reveal your secrets function, the func simply sets the has_been_guessed prop of each subword to true), prob make this a composable
-   complete buttons functionality
-   current round store (functions: increment round, reset round)
-   current round score store
-
-   do the countdown timer last (prob a store)

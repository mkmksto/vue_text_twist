# Installation instructions
- (backend installation steps)
- `git clone`
- to clone to the same folder do `git clone git@<> .` where . is the current directory
- on `linux`: `pip3 install virtualenv`
- do virtualenv path/to/venv
- if `virtualenv` is not recognized by the shell, do `python3 -m virtualenv /path/to/venv`
- `source /path/to/venv/bin/activate`
- remember to check that the virtualenv has a minimal setup using `pip list` or `pip freeze` (might need to use pip3 on linux)
- while inside the virtual environment, do `pip3 install -r requirements.txt`
- (frontend installation steps)
- `cd backend`, then `pnpm i`


# changes from svelte ver

-   animate fetching of data (i.e. show every word it is trying to fetch)

# Misc TODO's

-   create a computed promise (?) that resolves when the data from the backend has been fetched, you can maybe await this before doing stuff

# Roadmap

-   build to dist folder, then copy to `FLask's` `templates` and `static` folders
-   ! FIX: change the code for `Subwords`. The current code shows the words if i use dark reader. Simply don't include the letter if the word has not yet been guessed.
-   ESC key exits settings modal
-   how to icons (prob font awesome) for vue
-   option to change settings on game lost
-   hover tooltip for keyboard shortcuts
-   implement pausing (a button, and when you enter settings, hide the current word when game is paused)

-   try to check if using dot notation for store functions does work(inspired by svelte stores)
-   ! PRACTICE refactoring (creating some retarded branch then name you variables and functions better!)
-   also practice git then
-   refactor your stores (and their methods) to have a `$` at the end of their names (to indicate that they actually are store), also to differentiate from local variables and refs
-   extract the lines @ `app.py` involved in creating the final `sub_words` and `shuffled_word` props
-   test commit

# Future TODO's

-   persist scores inside localStorage? create a modal that shows maybe your top 5 highest score, and when u got that score

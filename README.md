# IMPORTANT! (issues regarding python)

- ensure that vscode always selects the venv python binary (`venv/bin/python` in linux, `venv/Scripts/python` for windows)
- also ensure that `pylint` is installed inside the venv, also check pylint's path inside workspace settings
- if in doubt, just checked the root folder's `.vscode` folder

# Installation instructions

- (backend installation steps)
- `git clone`
- to clone to the same folder do `git clone git@<this repo> .` where . is the current directory
- on `linux`: `pip3 install virtualenv`
- do virtualenv path/to/venv (in this case `virtualenv backend/tt_py_venv` or whatever you can to call the virtual env)
- if `virtualenv` is not recognized by the shell, do `python3 -m virtualenv /path/to/venv`
- `source /path/to/venv/bin/activate`
- remember to check that the virtualenv has a minimal setup using `pip list` or `pip freeze` (might need to use pip3 on linux)
- while inside the virtual environment, do `pip3 install -r requirements.txt`

- (frontend installation steps)
- `cd frontend`, then `pnpm i`

# Setting up black

- ensure `black is installed` from the pip install step
- if black doesn't format on save, check if vscode is detecting the proper interpreter path (had a case of black not formatting because vscode couldn't find the path to the interpreter)

# Configuring black

- (no need to install the VScode extension for black AFAIK), do check tho if they do make a better plugin in the future
- create a file `pyproject.toml` at the root of the folder (should be @ the same level as `.gitignore`) if it doesn't already exist yet

# Building instructions

- `pnpm build`
- above command would run `vite build` in addition to removing the `templates` and `static` folders inside `backend` if they exist
- would then run a series of shell commands to copy the `html`, `css` and `js` files from `frontend/dist` to the proper flask folders
- last script is a shell script to rename the `css`'s href and the `js` src to point to the proper flask folders using `sed` (some sort of shell regex i suppose)

# Misc TODO's

- create a computed promise (?) that resolves when the data from the backend has been fetched, you can maybe await this before doing stuff

# Roadmap

- ! FIX: change the code for `Subwords`. The current code shows the words if i use dark reader. Simply don't include the letter if the word has not yet been guessed.
- ESC key exits settings modal
- option to change settings on game lost

- try to check if using dot notation for store functions does work(inspired by svelte stores)
- ! PRACTICE refactoring (creating some retarded branch then name you variables and functions better!)
- also practice git then
- refactor your stores (and their methods) to have a `$` at the end of their names (to indicate that they actually are store), also to differentiate from local variables and refs
- extract the lines @ `app.py` involved in creating the final `sub_words` and `shuffled_word` props
- test commit

# Future TODO's

- persist scores inside localStorage? create a modal that shows maybe your top 5 highest score, and when u got that score

# Vue Text Twist

Full-stack Clone of the popular word game `Text Twist` using Vue on the frontend and Flask on the backend.

The Flask backend works in a very similar way to the backend of my Wordle app, except written in python.

# Features

- [x] Countdown Timer
- [x] Dynamic scoring based on word length
- [x] Word validation through backend that compares words against a large dictionary
- [x] Word validation based on frequency of use
- [x] Shuffle and Shuffle animation
- [x] Skipping to the next round if the longest word has been guessed

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
- double quotes. See [black docs](https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html#strings)

# Configuring black

- (no need to install the VScode extension for black AFAIK), do check tho if they do make a better plugin in the future
- create a file `pyproject.toml` at the root of the folder (should be @ the same level as `.gitignore`) if it doesn't already exist yet

# Building instructions

- `pnpm build`
- above command would run `vite build` in addition to removing the `templates` and `static` folders inside `backend` if they exist
- would then run a series of shell commands to copy the `html`, `css` and `js` files from `frontend/dist` to the proper flask folders
- last script is a shell script to rename the `css`'s href and the `js` src to point to the proper flask folders using `sed` (some sort of shell regex i suppose)

## Vscode Notes

- ensure that vscode always selects the venv python binary (`venv/bin/python` in linux, `venv/Scripts/python` for windows)
- also ensure that `pylint` is installed inside the venv, also check pylint's path inside workspace settings
- if in doubt, just checked the root folder's `.vscode` folder

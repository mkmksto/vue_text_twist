import glob
import json
import os
import random


def get_dict_file_paths(debug: bool = False) -> list:
    """Return the file paths of all the dictionary files
    Args:
        debug (bool):
            if False, opens the files relative to this file
            if True, gets the paths relative to the flask app, app.py
    Returns:
        list: List of file paths
    """

    if debug:
        return glob.glob(os.path.join("..", "dictionary_files/D*.json"))
    return glob.glob("dictionary_files/D*.json")


def get_random_dict_path(file_paths: str) -> str:
    return random.choice(file_paths)


def dict_path_to_dict_data(file_path: str) -> dict:
    """
    Get the data (in dict format) of a random json file
    Args:
        file_path (str): path to the JSON file
    Returns:
        dict: Dictionary data as a python dict
    """
    with open(file_path, "r", encoding="utf8") as fh:
        dict_data = json.load(fh)

    return dict_data


def get_all_dict_data(file_paths: list[str]) -> dict:
    """Given a list of file paths, read all the embedded
    JSON info, then combine them and then return
    Args:
        file_paths (list[str]): ['path/1/DA.json', 'path/2/DZ.json,..]
    Returns:
        dict: Consolidated Dictionary as a python dict
    """
    consolidated_dict = dict()
    for path in file_paths:
        with open(path, "r", encoding="utf8") as fh:
            data: dict = json.load(fh)
            consolidated_dict = consolidated_dict | data

    return consolidated_dict


if __name__ == "__main__":
    dict_file_paths = get_dict_file_paths(debug=True)
    print(dict_file_paths)

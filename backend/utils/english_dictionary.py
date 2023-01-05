import random

import requests
from bs4 import BeautifulSoup

from . import json_utils


class EnglishDict:
    """
    Get a random word with its associated information
    from a dictionary file
    Args:
        data: Dictionary of English dict data
    """

    def __init__(self, data: dict) -> None:
        self._data = data
        self._word = list(data.keys())

    def get_random_word(self) -> str:
        """Return a random lowercase word

        Returns:
            str:
        """
        return random.choice(self._word).lower()

    def get_definition(self, word: str) -> dict:
        return self._data.get(word)

    def get_part_of_speech(self, word: str) -> str or None:
        """Get the english Part of speech given a word
        Args:
            word (str):
        Returns:
            str or None:
        """
        defn: dict = self.get_definition(word)
        meanings: dict = defn.get("MEANINGS", None)
        if meanings:
            meaning_keys = meanings.keys()
            first_key = list(meaning_keys)[0]

        if first_key:
            return meanings.get(first_key)[0]

        return None

    def get_frequency(self, word: str) -> float or None:
        """Return the frequency (per million) for
        a particular word
        Args:
            word (str):
        Returns:
            str: 0.1324
        """
        data_muse = f"https://api.datamuse.com/words?sp={word}&qe=sp&md=fr&max=1"
        res = requests.get(data_muse, timeout=5)
        if res:
            res = res.json()
            res = res[0]
            res = res.get("tags", None)
            res: str = res[-1]
            res = float(res.split(":")[-1])
            return res
        else:
            return None

    def get_subwords(self, word: str, max_num: int = 30) -> list[str] or list:
        """Get the subwords of a particular word
        Args:
            word (str): rainbow
        Returns:
            list[str] or None: [brown, rain, bow, etc..]
        """

        site = f"https://www.degraeve.com/subwords.php?w={word}"
        resp = requests.get(site, timeout=5)
        if resp:
            resp = resp.text
            soup = BeautifulSoup(resp, "html.parser")
            soup = soup.find_all("ul")
            soup = soup[-1]
            soup = soup.find_all("li")
            soup = [s.contents[0] for s in soup]
            if len(soup) >= max_num:
                soup = soup[:max_num]
            return soup

        return []


if __name__ == "__main__":

    dict_file_paths = json_utils.get_dict_file_paths(debug=True)
    all_data = json_utils.get_all_dict_data(dict_file_paths)

    eng_dict = EnglishDict(all_data)
    rand_word = eng_dict.get_random_word()
    subword = eng_dict.get_subwords(rand_word)
    print(rand_word)
    print(subword)

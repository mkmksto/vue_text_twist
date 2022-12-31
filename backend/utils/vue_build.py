import glob
import os
import re

from bs4 import BeautifulSoup


def main():
    """Largely useless now lol
    superseded by flask_build.sh @ the frontend directory
    """
    index_html = glob.glob('../../frontend/dist/index.html')[0]
    index_html = os.path.abspath(index_html)
    print(index_html)
    with open(index_html, 'r', encoding='UTF8') as fh:
        soup = BeautifulSoup(fh, features='html.parser')
        # print(soup)

    print(soup)


if __name__ == '__main__':
    main()

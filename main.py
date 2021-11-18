import requests
from bs4 import BeautifulSoup
import certifi
import urllib3
import re


def find_title(some_soup):
    check = re.search('<title>(.+?) -', str(some_soup.title))
    if check:
        real_title = check.group(1)
    return real_title


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    response = requests.get("https://en.wikipedia.org/wiki/Ecuadorian_Army")
    html_doc = response.text
    soup = BeautifulSoup(html_doc, "html.parser")
    safeCount = 0
    title = find_title(soup)

    while (title != "Philosophy"):
        html_doc = response.text
        soup = BeautifulSoup(html_doc, "html.parser")
        target_div = soup.find(id="mw-content-text").find(class_="mw-parser-output")
        for element in target_div.find_all("p", recursive=False):
            if element.find("a", recursive=False):
                first_relative_link = element.find("a", recursive=False).get('href')
                break
        response = requests.get("https://en.wikipedia.org" + str(first_relative_link))
        safeCount += 1
        title = find_title(soup)
        print(title)
        if safeCount > 30:
            print("taking too long")
            break
    print("Website chain led to the Philosophy wiki page!")

# See PyCharm help at https://www.jetbrains.com/help/pycharm/

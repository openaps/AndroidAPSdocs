import requests
import json
import time
import sys
import re

PROJECT = 'androidaps'
URL = 'https://readthedocs.org/api/v3/projects/' + PROJECT + '/redirects/'
TOKEN = len(sys.argv) == 2 and sys.argv[1]
HEADERS = {'Authorization': f'token {TOKEN}'}

def delItem (url) :
    delResponse = requests.delete(url, headers=HEADERS)
    if delResponse.status_code == 204 :
        print('removed ' + url)
    elif delResponse.status_code == 429:
        detail = delResponse.json()['detail']
        wait = int(re.search(r'\d+', detail).group())
        print('Throttled, wait for ' + str(wait + 1) + ' seconds')
        time.sleep(wait + 1)
        delItem(url)
    else : 
        results = delResponse.json()
        print(results)

def deleteList() :
    response = requests.get(URL, headers=HEADERS)
    listResult = response.json()

    if response.status_code == 200:
        redirects = listResult['results']
        for redirect in redirects :
            url = redirect['_links']['_self']
            delItem(url)
        return listResult['count']
    elif response.status_code == 429:
        detail = response.json()['detail']
        wait = int(re.search(r'\d+', detail).group())
        print('Throttled, wait for ' + str(wait + 1) + ' seconds')
        time.sleep(wait + 1)
        deleteList()
    else :
        print('ERROR code:', response.status_code, listResult)
        return 0

def main() :
    while True:
        count = deleteList()
        print('Removed, still counting: ' + str(count))
        if count == 0 :
            break
    print('done')

if not TOKEN :
    print('Please provide a API token as parameter')
    print('useage: $ python deleteAllRedirects.py <apikey>')
else :
    main()

import requests
import json
import time
import sys
import re

PROJECT = 'androidaps'
URL = 'https://readthedocs.org/api/v3/projects/' + PROJECT + '/redirects/'
TOKEN = len(sys.argv) == 2 and sys.argv[1]
HEADERS = {'Authorization': f'token {TOKEN}'}
FILE = 'redirect.json'

def create(redirect, index) :
    response = requests.post(
            URL,
            json=redirect,
            headers=HEADERS,
    ) 
    if response.status_code == 201 :
        print ('create redirect (' + str(index) + ') ' + redirect['from_url'])
    elif response.status_code == 429:
        detail = response.json()['detail']
        wait = int(re.search(r'\d+', detail).group())
        print('Throttled, wait for ' + str(wait + 1) + ' seconds ')
        time.sleep(wait + 1)
        create(redirect, index)
    else :
        print(response.status_code , response.json())

def main():
    try:
        with open(FILE) as json_file:
            redirects = json.load(json_file)
            print('Creating ' + str(len(redirects)) + ' redirects ')
            for index, redirect in enumerate(redirects):
                create(redirect, index)
        print ('done')
    except IOError:
        print('File ' + FILE + ' is not accessible, please make sure you run the "generateRedirect" script')


if not TOKEN :
    print('Please provide a API token as parameter')
    print('useage: $ python importRedirects.py <apikey>')
else :
    main()

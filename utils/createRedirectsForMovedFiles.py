import json
import subprocess
from datetime import date

import requests
import time
import sys
import re
from itertools import islice

# This script can be used when a lot of reorganisation has been done in the files, with a lot of git moves.
# For each moved files, this script creates a redirection in Read The Docs, so that previous URLs do not result in 404 pages.
# The scripts :
#   lists existing redirects in RTD
#   lists moved files from a given list of commits (hardcoded below)
#   compute the differences between the 2 lists to create only missing redirects
#   create the redirects (by batch of 10 redirects, prompting for confirmation before each batch)
# usage: $ python createRedirectsForMovedFiles.py <read-the-docs-api-token>

PROJECT = 'androidaps'
URL = 'https://readthedocs.org/api/v3/projects/' + PROJECT + '/redirects/'
TOKEN = len(sys.argv) == 2 and sys.argv[1]
HEADERS = {'Authorization': f'token {TOKEN}'}

GIT_COMMITS = [
    'c87672ed', #getting started
    '60631acf', #etting up
    'e0833ffa', #remote features
    '4f009d14', #daily life
    'e5361a45', #daily life 2
    '7bbe3f40', #Maintenance & Getting Help
    'd5312fe0', #Useful Links, Advanced Options, How to Support
    '2ddf7acd', #lost files
]

def chunks(data, size=10000):
    it = iter(data)
    for i in range(0, len(data), size):
        yield {k:data[k] for k in islice(it, size)}

def list_redirects() :
    print ('Listing redirects')
    existing_redirects = {}
    response = requests.get(
        URL+"?limit=1000",
        headers=HEADERS,
    )
    if response.status_code == 200 :
        for index, redirect in enumerate(response.json()['results']):
            existing_redirects[redirect['from_url']] = redirect['to_url']
    elif response.status_code == 429:
        detail = response.json()['detail']
        wait = int(re.search(r'\d+', detail).group())
        print('Throttled, wait for ' + str(wait + 1) + ' seconds ')
        time.sleep(wait + 1)
        list_redirects()
    elif response.status_code == 403:
        print(response.status_code , response.json())
        exit()
    else :
        print(response.status_code , response.json())

    # print(json.dumps(existing_redirects, indent=4))
    print ('Found %s existing redirects' % len(existing_redirects))
    return existing_redirects

def format_url(param):
    return param[7:-2]+'html'

def list_files_moved():
    print ('Listing files moved from Git history')
    moved_files = {}
    p = re.compile('R[0-9]+\t(.*)\t(.*)')
    for git_commit in GIT_COMMITS:
        git_log = subprocess.check_output(['git', 'log', '--name-status', git_commit, '-n', '1']).decode("utf-8")
        lines = git_log.split('\n')
        for line in lines:
            matches = p.search(line)
            if(type(matches) is re.Match):
                moved_files[format_url(matches.group(1))] = format_url(matches.group(2))

    # print(json.dumps(moved_files, indent=4))
    print ('Found %s moved files in Git history' % len(moved_files))
    return moved_files

def get_redirects_to_create(moved_files, existing_redirects):
    print ('Creating list of redirections to create')
    duplicates = set(existing_redirects) & set(moved_files)
    #redirect_to_create = dict.fromkeys(set(moved_files) - set(existing_redirects), 0)
    redirect_to_create = { k : moved_files[k] for k in set(moved_files) - set(existing_redirects) }

    print ('%s redirects already exist and will be ignored' % len(duplicates))
    # print(json.dumps(redirect_to_create, indent=4))
    print ('%s redirects will be created' % len(redirect_to_create))
    return redirect_to_create

def create_redirects(redirects_to_create):
    for sublist in chunks(redirects_to_create, 10):
        print ('The following redirects are about to be created, do you wish to proceed ?')
        print(json.dumps(sublist, indent=4))
        proceed = input("Proceed ? y/n")
        if proceed == "y":
            for from_url, to_url in sublist.items():
                data = {
                    "from_url" : from_url,
                    "to_url" : to_url,
                    "type" : "page",
                    "description" : "Created on %s" % date.today()
                }
                create_redirect(data)

        else:
            exit()

def create_redirect(redirect) :
    response = requests.post(
        URL,
        json=redirect,
        headers=HEADERS,
    )
    if response.status_code == 201 :
        print ('Created redirect %s => %s ' % (redirect['from_url'], redirect['to_url']))
    elif response.status_code == 429:
        detail = response.json()['detail']
        wait = int(re.search(r'\d+', detail).group())
        print('Throttled, wait for ' + str(wait + 1) + ' seconds ')
        time.sleep(wait + 1)
        create_redirect(redirect)
    else :
        print(response.status_code , response.json())

def main():
    existing_redirects = list_redirects()
    moved_files = list_files_moved()
    redirects_to_create = get_redirects_to_create(moved_files, existing_redirects)
    create_redirects(redirects_to_create)
    print ('Done')

if not TOKEN :
    print('Please provide a API token as parameter')
    print('usage: $ python createRedirectsForMovedFiles.py <read-the-docs-api-token>')
else :
    main()

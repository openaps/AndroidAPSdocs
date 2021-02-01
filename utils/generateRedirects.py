import os
import json

FILE = 'redirect.json'

dir_path = os.path.dirname(os.path.realpath(__file__))
language_path = os.path.join(dir_path, '..\\', 'docs', 'CROWDIN') + '\\'
print('Generate redirect for al .md and .rst files in path ' + language_path)

redirects = []

class Object:
    def toJSON(self):
       return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

for path, subdirs, files in os.walk(language_path):
    for filename in files:
        if filename.endswith(('.md', '.rst')):
            file = os.path.splitext(os.path.join(path, filename))[0] + '.html'
            relative_file = file[len(language_path):]
            original = '\\' + os.path.join('en', 'latest', 'CROWDIN', relative_file)
            to = '\\' + os.path.join(relative_file[:2], 'latest', relative_file[3:])
            r = Object()
            r.from_url = original.replace('\\', '/')
            r.to_url = to.replace('\\', '/')
            r.type = 'exact'
            redirects.append(r)

def obj_dict(obj):
    return obj.__dict__

json_object = json.dumps(redirects, indent=4, default=obj_dict) 

with open(FILE, 'w') as outfile: 
    outfile.write(json_object) 

print('Done, ' + str(len(redirects)) + ' results are stored in ' + FILE)

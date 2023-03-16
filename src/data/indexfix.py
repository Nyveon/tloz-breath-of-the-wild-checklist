import json

# set directory to where the .py file is located
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# open index.json
with open('questData.json', 'r') as f:
    index = json.load(f)
    categories = []
    for category in index:
        for i, quest in enumerate(category['quests']):
            quest['index'] = i
    # write the new index.json
    with open('index.json', 'w') as f:
        json.dump(index, f, indent=4)

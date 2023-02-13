import json

# set directory to where the .py file is located
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# open index.json
with open('index.json', 'r') as f:
    index = json.load(f)
    categories = index['categories']
    # for each category in index
    for category in categories:
        # add the index of each quest in the category
        for i, quest in enumerate(category['quests']):
            quest['index'] = i
    # write the new index.json
    with open('index.json', 'w') as f:
        json.dump(index, f, indent=4)

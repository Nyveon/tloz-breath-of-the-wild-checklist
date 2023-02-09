# HTML Awesome Templating Engine (HATE)
# Because I HATED how complicated every other templating
# Engine was
# By Nyveon, 2023
# Version 0

# -- Folder structure:
# hate
# 	pages
# 		- index.hate
#   partials
# 		- header.hate
# 		- footer.hate
# 	data
# 		- index.json
# 	- hate.py
# 	+ index.html

# -- Directives:
# {{@data <index>}} - Loads the data from data/index.json into the data object
# {{@part <header>}} - Loads the partial from partials/header.hate into the page
# {{<value>}} - Replaces the directive with the data object
# TODO
# {{@each <data> as <name>}} - Loops through the data object and replaces the directive with the data
# {{@done}} - Ends the loop


import os
import json

# Config
pages_directory = "pages"
partials_directory = "partials"
data_directory = "data"


def parse_expression(line: str, data: dict) -> str:
	directive_start = line.find("{{")
	directive_end = line.find("}}")

	if directive_start == -1 or directive_end == -1:
		return line

	directive = line[directive_start + 2:directive_end]
	if directive.startswith("@data"):
		directive = directive.split(" ")[1]
		with open(pages_directory + "/" + directive + ".json", "r") as f:
			data[directive] = json.loads(f.read())
		return ""
	elif directive.startswith("@part"):
		directive = directive.split(" ")[1]
		indentation = line[:line.find("{{")]
		with open(partials_directory + "/" + directive + ".phate", "r") as f:
			partial = f.read()
		return indentation + partial.replace("\n", "\n" + indentation)
	elif directive.startswith("@each"):
		return ""
	else:
		directive = directive.split(".")
		current = data
		for i in range(len(directive)):
			current = current[directive[i]]
		line = line.replace("{{" + ".".join(directive) + "}}", current)
		return parse_expression(line, data)


# Go through all pages
for file in os.listdir(pages_directory):
	if file.endswith(".phate"):
		print("Templating: ", file)
		new_file = ""
		data = {}

		with open(pages_directory + "/" + file, "r") as f:
			filedata = f.read()

		for line in filedata.splitlines():
			new_file += parse_expression(line + "\n", data)

		with open(file[:-5] + "html", "w") as f:
			f.write(new_file)

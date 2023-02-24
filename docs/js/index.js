const sorts = {
	asc: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
	desc: (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1),
	none: () => 0,
};

function questFilter(quests, search, sorting, completedLast) {
	const filteredQuests = quests
		.filter((quest) => {
			return quest.name.toLowerCase().includes(search.toLowerCase());
		})
		.sort(sorts[sorting]);

	if (completedLast) {
		return filteredQuests.sort((a, b) => a.completed - b.completed);
	} else {
		return filteredQuests;
	}
}

function completedQuests(allQuests, includeDLC) {
	let count = 0;
	for (const category in allQuests) {
		for (const quest of allQuests[category]) {
			if (quest.completed && (includeDLC || !quest.dlc)) {
				count++;
			}
		}
	}
	return count;
}

function totalQuests(allQuests, includeDLC) {
	let count = 0;
	for (const category in allQuests) {
		for (const quest of allQuests[category]) {
			if (includeDLC || !quest.dlc) {
				count++;
			}
		}
	}
	return count;
}

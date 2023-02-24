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

function completedQuests(quests, includeDLC) {
	let completed = 0;
	let total = 0;

	for (const quest of quests) {
		if (!includeDLC && quest.dlc) {
			continue;
		}

		total++;
		if (quest.completed) {
			completed++;
		}
	}

	const percentage = Math.round((completed / total) * 100);

	return { completed, total, percentage };
}

const sorts = {
	'asc': (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
	'desc': (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1),
	'none': () => 0,
};

function questFilter(quests, search, sorting) {
	return quests
		.filter((quest) => {
			return quest.name.toLowerCase().includes(search.toLowerCase());
		})
		.sort(sorts[sorting]);
}

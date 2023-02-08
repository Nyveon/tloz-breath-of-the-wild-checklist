const sorts = {
	'asc': (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
	'desc': (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1),
	'none': () => 0,
};

function questData() {
	return {
		categories: [],
		search: "",
		sorting: 'none',
		get filteredQuests() {
			return this.categories.map((category) => {
				return {
					...category,
					quests: category.quests
						.filter((quest) => {
							return quest.name
								.toLowerCase()
								.includes(this.search.toLowerCase());
						})
						.sort(sorts[this.sorting]),
				};
			});
		},
	};
}

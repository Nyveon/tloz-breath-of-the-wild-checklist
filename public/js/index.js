const sorts = {
	'asc': (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
	'desc': (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1),
	'none': () => 0,
};

function questData() {
	return {
		search: "",
		sorting: 'none',
		activeTab: 'main',

		isActiveTab(id) {
			return this.activeTab === id;
		},

		questFilter(quests) {
			return quests
				.filter((quest) => {
					return quest.name.toLowerCase().includes(this.search.toLowerCase());
				})
				.sort(sorts[this.sorting]);
		}		
	};
}



import data from './api.js';

data().then((data_) => {
	console.log(data_[0]);
	$('#table_id').DataTable({
		data: data_,
		columns: [
			{ data: 'country' },
			{ data: 'cases' },
			{ data: 'todayCases' },
			{ data: 'deaths.' },
			{ data: 'todayDeaths' },
			{ data: 'recovered' },
			{ data: 'todayRecovered' },
			{ data: 'critical' },
			{ data: 'tests' },
		],
	});
});
console.log(data());

import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
	    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
		datasets:[
		{
		    label:'Population',
		    data:[
			10000,
			20000,
			30000,
			40000,
			50000,
			60000
		    ],
		    backgroundColor:[
			'rgba(255, 99, 132, 0.6)',
			'rgba(54, 162, 235, 0.6)',
			'rgba(255, 206, 86, 0.6)',
			'rgba(75, 192, 192, 0.6)',
			'rgba(153, 102, 255, 0.6)',
			'rgba(255, 159, 64, 0.6)'
		    ]
		}
	    ]
	}

const Home = () => {
	return(
	    <div className='chart'>
		<Bar
		    data={data}
		    options={{ maintainAspectRatio: false }}
		/>
	    </div>
	);
}

export default Home;

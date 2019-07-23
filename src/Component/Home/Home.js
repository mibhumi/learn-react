import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Home extends Component {

    constructor(props) {
        super( props );
	this.state = {
	    chartData: {
	    labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
		datasets:[
		{
		    label:'Total contribution in billion U.S.dollars',
		    data:[
			113.2,
			125.21,
			129.49,
			208.9,
			234,
			492.2
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
	}
    }

    render() {
	return (
	    <div>
	    	<h3>Total contribution of travel and touism to GDPin india from 2013 to 2018</h3>
		<div className='chart'>
		    <Bar
			data={this.state.chartData}
			options={{
			    maintainAspectRatio: false
			}}
		    />
		</div>
		<div className='btnRegister'>
		    <a href='/form' >Click to register</a>
		</div>
	    </div>
	)
    }
}

export default Home;

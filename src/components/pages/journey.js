import React, { Component } from 'react';
import car from './photos/car.jpg';

class Journey extends Component {
	render() {
		return (
			<div className="container-fluid">
				<p>
					<img
						src={car}
						alt=""
						style={{
							float: 'right',
							width: '50%'}} />
				</p>
				<p>
        From Friday 14th September 2018, our cavalcade of madness will take in the following route…
				</p>
				<p>
        MIDDAY FRIDAY<br />
        MEET AT MARGATE: DREAMWORLD FOR A STAR STUDDED SEND OFF<br />
				DRIVE TO: CALAIS, FRANCE<br />
				</p>
				<p>
        SATURDAY<br />
        DRIVE TO: LAKE GENEVA, SWITZERLAND<br />
				</p>
				<p>
        SUNDAY<br />
        DRIVE (THROUGH THE ALPS) TO: VILLACH, AUSTRIA<br />
				</p>
				<p>
        MONDAY<br />
        DRIVE TO: SARAJEVO, BOSNIA<br />
				</p>
				<p>
        TUESDAY<br />
        DRIVE TO: KOLASIN MOUTAIN RESORT, MONTENEGRO<br />
				</p>
				<p>
        WEDNESDAY<br />
        DRIVE TO: KOSOVO<br />
				</p>
				<p>
        THURSDAY<br />
        DRIVE TO: DURRES BEACH, ALBANIA<br />
				</p>
				<p>
        FRIDAY<br />
        DRIVE TO: CORFU, GREECE<br />
				</p>
				<p>
        SATURDAY<br />
        PARTY PARTY PARTY: SECRET LOCATION<br />
				</p>
			</div>
		);
	}
}

export default Journey;

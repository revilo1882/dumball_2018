import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class MobileHeader extends Component {
	render() {
		return (
			<header>
				<nav style={{align: 'center', display: ''}}>
					<ul>
						<li className="first">
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Journey">Journey</Link>
						</li>
						<li>
							<Link to="/Map">Map</Link>
						</li>
						<li>
							<Link to="/Photos">2016</Link>
						</li>
						<li className="last">
							<a href = 'https://www.justgiving.com/fundraising/matt-reade1'>Donate</a>
						</li>
					</ul>
				</nav>

			</header>
		);
	}
}

export default MobileHeader;

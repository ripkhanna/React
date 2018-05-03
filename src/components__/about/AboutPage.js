import React from "react";

class AboutPage extends React.Component
{
    render()
    {
        return(
            <div>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Redux</li>
						<li>Node</li>
						<li>Babel</li>
						<li>Webpack</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
        );
    }
}

export default AboutPage;
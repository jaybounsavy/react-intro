
import React from 'react';

//----------------------------------------------------------------------------------------
// This is a React component to display the navigation menu at the top of the login page.
//----------------------------------------------------------------------------------------

export default class TopNavigation extends React.Component {

    render() {

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <a className="navbar-brand" href="#">Application</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="menu_detail.html">Menu</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </>

        );

    }

}
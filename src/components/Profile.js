import React from 'react';

import LoginUsername from './LoginUsername';
import LoginPassword from './LoginPassword';
import LoginButton from './LoginButton';

import TopNavigation from './TopNavigation';


//----------------------------------------------------------------------------------------
// This is a main page for the login page.
// It contains, uses, and reference multiple components that makes up the login. 
//----------------------------------------------------------------------------------------

export default class Profile extends React.Component {

    constructor(props) {

      super(props);

    }

    render() {

        return (

            <div className="card" style= { { borderRadius: '15px' } }>
              <div className="card-body text-center">
              <TopNavigation />
              <h4 className="mb-2">Login</h4>

                  <LoginUsername />
                  <LoginPassword />
                  <LoginButton />

                </div>

            </div>
        
        );

    }


}
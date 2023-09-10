
import React from 'react';

//----------------------------------------------------------------------------------------
// This is a React component to display the input box for the username in the login page.
//----------------------------------------------------------------------------------------

export default class LoginUser extends React.Component {

    render() {

        return (
            <>
                <div>
                    <label for="username">Username:&nbsp;&nbsp;</label>
                    <input type="password"  id="username"  placeholder="Username"/>
                </div>    
            </>

        );

    }

}
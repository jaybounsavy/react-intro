
import React from 'react';

//----------------------------------------------------------------------------------------
// This is a React component to display the input box for the password in the login page.
//----------------------------------------------------------------------------------------

export default class LoginPassword extends React.Component {

    render() {

        return (
            <>
                <div>
                    <label for="user_password">Password:&nbsp;&nbsp;</label>
                    <input type="text" id="user_password" placeholder="Password" />
                </div>    
            </>

        );

    }

}
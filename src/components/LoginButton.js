
import React from 'react';

//----------------------------------------------------------------------------------------
// This is a React component to display the button in the login page.
//----------------------------------------------------------------------------------------

export default class LoginButton extends React.Component {

    render() {

        return (
            <>
                <button type="button" className="btn btn-primary position-relative btn-lg btn-rounded">
                Login
                </button>
            </>

        );

    }

}
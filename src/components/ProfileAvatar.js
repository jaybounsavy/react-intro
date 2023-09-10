import React from 'react';

import Property from '../Property';





export default class ProfileAvatar extends React.Component {

    render() {

        const image = `${Property.avatar.baseUrl}/${this.props.photo}`;
        console.log("image=" + image );


        return (

            <img src={ image }
            className="rounded-circle img-fluid" style= {{ width: '100px'  }} />

        );

    }

}


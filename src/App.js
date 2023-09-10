
import React from 'react';
import './App.css';
import Profile from './components/Profile';

//----------------------------------------------------------------------------------------
// This is a web application page.
//----------------------------------------------------------------------------------------


export default class App extends React.Component {

  render() {

    const sectionStyle = {
      backgroundColor: '#eee'
    };

    return (
      
      <section className="vh-100" style={ sectionStyle }>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <Profile />
            </div>  
          </div>
        </div>
      </section>

    );

  }





}


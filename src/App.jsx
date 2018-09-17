import React, {Component} from 'react';
import './index.css';
import staticWeb from './staticweb.jpg';
import wordpress from './wordpress.jpg';
import {Link} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div>
        <div className="banner">
          <div className="container-fluid">

            <h1
              style={{
                marginLeft: 40,
                color: 'whitesmoke',
                fontSize: '32',
                fontWeight: 'bolder',
                letterSpacing: 1,
                marginBottom: 10,
              }}
            >
              <br />
              Projects On AWS
            </h1>
            <p
              style={{
                fontSize: 24,
                color: 'whitesmoke',
                marginLeft: 40,
                marginTop: 10,
              }}
            >
              <i>Step-by-step guides to help you build AWS Projects</i>

            </p>
            <br />
          </div>
        </div>

        <div class="ui grid">
          <div
            style={{
              marginTop: 30,
              marginLeft: 15,
            }}
            class="row"
          >

            <div class="four wide column">
              <div class="ui card">

                {' '}
                <img
                  style={{height: 250, width: 300}}
                  src={staticWeb}
                  class="ui image"
                />
                <div class="content">
                  <div style={{fontSize: 20, marginBottom: 10}} class="header">
                    <Link to="/project" style={{textDecoration: 'none'}}>
                      <h3
                        className="projectTitle"
                        style={{fontSize: 20, fontWeight: 'bold'}}
                      >
                        Hosting Static Website
                      </h3>
                    </Link>
                  </div>
                  <div class="meta">
                    <span class="date">
                      <i>Published in September, 2018</i>
                    </span>
                  </div>
                  <div class="description">
                    Hosting a static website on EC2 instance.
                  </div>
                </div>
                <div class="extra content">
                  <div>
                    <i aria-hidden="true" class="clock outline icon" />
                    <i style={{marginLeft: 10}}>25 minutes</i>
                  </div>
                </div>

              </div>
            </div>

            <div class="four wide column">
              <div class="ui card">
                <img
                  style={{height: 250, width: 300}}
                  src={wordpress}
                  class="ui image"
                  id="nostretch "
                />
                <div class="content">
                  <div style={{fontSize: 20, marginBottom: 10}} class="header">
                    <Link to="/project2" style={{textDecoration: 'none'}}>
                      <h3
                        className="projectTitle"
                        style={{fontSize: 20, fontWeight: 'bold'}}
                      >
                        Building Wordpress site
                      </h3>
                    </Link>
                  </div>
                  <div class="meta">
                    <span class="date">
                      <i>Published in September, 2018</i>
                    </span>
                  </div>
                  <div class="description ">
                    Build a site using LAMP on an EC2.
                  </div>
                </div>
                <div class="extra content">
                  <div>
                    <i aria-hidden="true" class="clock outline icon" />
                    <i style={{marginLeft: 10}}>90 minutes</i>
                  </div>
                </div>
              </div>

            </div>

            <div class="four wide column">
              <div class="ui card">
                <img
                  style={{height: 250, width: 300}}
                  src={staticWeb}
                  class="ui image"
                />
                <div class="content">
                  <div style={{fontSize: 20, marginBottom: 10}} class="header">
                    <h3
                      className="projectTitle"
                      style={{fontSize: 20, fontWeight: 'bold'}}
                    >
                      Hosting Static Website
                    </h3>
                  </div>
                  <div class="meta">
                    <span class="date">
                      <i>Published in September, 2018</i>
                    </span>
                  </div>
                  <div class="description">
                    Hosting a static website on EC2 instance.
                  </div>
                </div>
                <div class="extra content">
                  <div>
                    <i aria-hidden="true" class="clock outline icon" />
                    <i style={{marginLeft: 10}}>25 minutes</i>
                  </div>
                </div>
              </div>

            </div>

            <div class="four wide column">
              <div class="ui card">
                <img
                  style={{height: 250, width: 300}}
                  src={wordpress}
                  class="ui image"
                />
                <div class="content">
                  <div style={{fontSize: 20, marginBottom: 10}} class="header">
                    <h3
                      className="projectTitle"
                      style={{fontSize: 20, fontWeight: 'bold'}}
                    >
                      Building Wordpress site
                    </h3>
                  </div>
                  <div class="meta">
                    <span class="date">
                      <i>Published in September, 2018</i>
                    </span>
                  </div>
                  <div class="description">
                    Hosting a static website on EC2 instance.
                  </div>
                </div>
                <div class="extra content">
                  <div>
                    <i aria-hidden="true" class="clock outline icon" />
                    <i style={{marginLeft: 10}}>90 minutes</i>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;

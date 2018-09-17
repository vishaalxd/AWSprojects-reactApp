import React, {Component} from 'react';
import '../app.css';
import {Button, ButtonContent} from 'semantic-ui-react';

class Project extends Component {
  state = {};
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
              Build a Wordpress Site.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: 'whitesmoke',
                marginLeft: 40,
                marginTop: 10,
              }}
            >

              <i style={{padding: 10, fontWeight: 'bold'}}>
                <span
                  style={{
                    color: 'whitesmoke',
                    fontWeight: 'bold',
                    marginRight: 15,
                  }}
                >
                  Concepts Covered:{'   '}
                </span><div className="projectConcepts">
                  EC2, S3, LAMP Architecture, IAM, VPC.
                  {' '}
                </div>
              </i>

            </p>
            <br />
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div className="ui grid">
            <div className="row">
              <div
                style={{marginTop: 20, marginLeft: 30}}
                className="seven wide column"
              >
                <h3 style={{fontWeight: 'bold', marginLeft: 10}}>
                  What you need to know ?
                </h3>
                <ul style={{fontSize: 18, fontWeight: 'lighter'}}>
                  <li><i>Basics of Elastic Cloud Computing (EC2).</i></li>
                  <li><i>Basics of Amazon S3.</i></li>
                  <li><i>Basics of Virtual Private Cloud.</i></li>
                  <li><i>LAMP Architecture.</i></li>
                </ul>
              </div>

              <div style={{marginTop: 20}} className="seven wide column">
                <h3 style={{fontWeight: 'bold', marginLeft: 10}}>
                  What will you learn ?
                </h3>
                <ul style={{fontSize: 18, fontWeight: 'lighter'}}>
                  <li><i>To Host a Wordpress Site on an EC2 instance.</i></li>
                  <li><i>To build a VPC architecture.</i></li>
                  <li>
                    <i>
                      Setting Up Identity Access Management & MySQL installation.
                    </i>
                  </li>
                  <li>
                    <i>
                      To Build LAMP (Linux-Apache-MySQL-PHP) architecture on Cloud.
                    </i>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <hr />

        {/* Implementation Guide and Links. */}

        <div className="Implement container-fluid">
          <div className="ui divided padded equal width grid">
            <div
              style={{
                marginLeft: 40,
                marginTop: 20,
              }}
              className="row"
            >
              <div className="sixteen wide column">
                <h2
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Implementation
                </h2>
              </div>
              <div className="eight wide column">

                <p style={{marginTop: 30, fontSize: 18, fontStyle: 'italic'}}>
                  Here is the detailed steps for the project:
                  {' '}
                  {'   '}
                  <a href="">
                    <i class=" red file pdf icon" />
                    <span style={{textDecoration: 'none', color: 'green'}}>
                      Instruction Manual
                    </span>
                  </a>
                </p>
              </div>
              <div className="eight wide column">

                <p style={{marginTop: 30, fontSize: 18, fontStyle: 'italic'}}>
                  Project Code on github:
                  {' '}
                  {'   '}
                  <a href="">
                    <a href="https://github.com/mnegi/my-portfolio-bootstrap">
                      <button
                        style={{width: 80}}
                        class="green ui vertical animated button"
                        role="button"
                      >
                        <div class="visible content">
                          <span>Code</span>
                        </div>
                        <div class="hidden content">
                          <i class="code icon" />
                        </div>
                      </button>
                    </a>
                  </a>
                </p>

              </div>

              {/* <div className="four wide column">
                <h3>Implementation guide > </h3><a>Tutorial</a>
              </div>

              <div className="four wide column">
                <h2>Implementation code > <button>Code</button></h2>
              </div> */}

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Project;

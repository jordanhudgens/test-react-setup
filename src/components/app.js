import React, { Component } from 'react';
import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-wrapper">
          <div className="rectangle-bg">
            <div className="rectangle">
              <div className="container">
                <div className="text-center">
                  <div className="madlib-heading">
                    <h1>Bottega Madlibs</h1>

                    <div className="madlib-subheading">
                      Fill out the fields below and click the generate button <br />to see the Mad Lib story.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MadlibForm />
      </div>
    );
  }
}

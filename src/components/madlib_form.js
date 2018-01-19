import React, { Component } from 'react';
import Content from './content';
import { 
  Button,
  Container,
  Card,
  Row,
  Col
} from 'reactstrap';

export default class MadlibForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completedForm: false,
    };
    this.clearForm();
  }

  handleChange = function(prop) {
    return function(event) {
       this.setState({[prop]: event.target.value});
    }.bind(this)
  }

  handleSubmit = function(event) {
    this.setState({ completedForm: true });
    event.preventDefault();
  }.bind(this)

  clearForm = function() {
    this.setState({
      adjectiveOne: '',
      adjectiveTwo: '',
      adjectiveThree: '',
      adjectiveFour: '',
      adjectiveFive: '',
      celebOne: '',
      celebTwo: '',
      celebThree: '',
      celebFour: '',
      color: '',
      nounOne: '',
      nounTwo: '',
      nounThree: '',
      numberOne: '',
      numberTwo: '',
      pluralNoun: '',
    })
  }.bind(this)

  handleClick = function(event) {
    this.setState({ 
      completedForm: false,
     });
    this.clearForm();
  }.bind(this)

  btnRenderer = function() {
    if (this.state.completedForm) {
      return <a className="clearBtn" onClick={this.handleClick}>Clear Madlib</a>;
    } else {
      return <input type="submit" className="madlibBtn" value="Submit" />;
    }
  }.bind(this)

  render() {

    return (
      <div className="card-wrapper">
        <Card>
          <form onSubmit={this.handleSubmit} id="madlib-form">
            <Row>
              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">1</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Adjective One" type="text" value={this.state.adjectiveOne} onChange={this.handleChange('adjectiveOne')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Adjective One</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">2</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Adjective Two" type="text" value={this.state.adjectiveTwo} onChange={this.handleChange('adjectiveTwo')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Adjective Two</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">3</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Adjective Three" type="text" value={this.state.adjectiveThree} onChange={this.handleChange('adjectiveThree')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Adjective Three</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">4</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Adjective Four" type="text" value={this.state.adjectiveFour} onChange={this.handleChange('adjectiveFour')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Adjective Four</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">5</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Adjective Five" type="text" value={this.state.adjectiveFive} onChange={this.handleChange('adjectiveFive')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Adjective Five</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">6</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Celebrity One" type="text" value={this.state.celebOne} onChange={this.handleChange('celebOne')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Celeb One</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">7</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Celebrity Two" type="text" value={this.state.celebTwo} onChange={this.handleChange('celebTwo')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Celeb Two</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">8</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Celebrity Three" type="text" value={this.state.celebThree} onChange={this.handleChange('celebThree')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Celeb Three</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">9</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Celebrity Four" type="text" value={this.state.celebFour} onChange={this.handleChange('celebFour')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Celeb Four</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">10</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Color" type="text" value={this.state.color} onChange={this.handleChange('color')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Color</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">11</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Noun One" type="text" value={this.state.nounOne} onChange={this.handleChange('nounOne')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Noun One</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">12</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Noun Two" type="text" value={this.state.nounTwo} onChange={this.handleChange('nounTwo')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Noun Two</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">13</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Noun Three" type="text" value={this.state.nounThree} onChange={this.handleChange('nounThree')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Noun Three</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">14</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Number One" type="text" value={this.state.numberOne} onChange={this.handleChange('numberOne')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Number One</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">15</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Number Two" type="text" value={this.state.numberTwo} onChange={this.handleChange('numberTwo')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Number Two</div>
                  </Col>
                </Row>
              </Col>

              <Col md="3" className="inputWrapper">
                <Row>
                  <Col md="2">
                    <label className="greenLabel">16</label>
                  </Col>
                  <Col md="10">
                    <input placeholder="Plural Noun" type="text" value={this.state.pluralNoun} onChange={this.handleChange('pluralNoun')} />
                  </Col>
                  <Col md={{ size: 9, offset: 2 }}>
                    <div className="inputDescription">Plural Noun</div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Col md="12" className="btnWrapper">
              { this.btnRenderer() }
            </Col>
          </form>

          <Content data={this.state} />
        </Card>
      </div>
    );
  }
}
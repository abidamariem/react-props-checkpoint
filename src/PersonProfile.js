import React, { Component } from 'react';

class PersonProfile extends Component {
 constructor(props) {
    super(props);
    this.state = {
      show: false,
      person: {
        fullName: 'Mariem Abida',
        bio: 'Software Engineer',
        imgSrc: 'https://datascientest.com/wp-content/uploads/2023/04/software_engineer_datascientest-1024x512.png',
        profession: 'Software Engineer',
      },
    };
 }

 toggleShow = () => {
    this.setState({ show: !this.state.show });
 };

 render() {
    const { show, person } = this.state;

    if (show) {
      return (
        <div>
          <button onClick={this.toggleShow}>Hide</button>
          <div>
            <img src={person.imgSrc} alt={person.fullName}  style={{ width: '500px', height: '200px' }}
 />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        </div>
      );
    } else {
      return <button onClick={this.toggleShow}>Show</button>;
    }
 }
}

export default PersonProfile;
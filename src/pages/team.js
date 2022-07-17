import React from 'react';
import './styles/Team.css';

class Teams extends React.Component {

  //  Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    
    if (!DataisLoaded) return <div>
      <h1> Pleases wait some time.... </h1> </div>;
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'Left',
          alignItems: 'Right',
          height: '100vh'
        }}
      >
        <div className = "App">
        </div>
          <>
            <table>
              <tr>
                <th></th>
                <th id = "title">Fetch data from an externel api</th>
                <th></th>
              </tr>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              })}
            </table>
          </>
      </div >
    );
  }
}
export default Teams;

import { Component } from "react";
import Form from "./Components/Form/Form";
import CardList from "./Components/CardList/CardList";

class App extends Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="header">
        <h2>Github Users Card</h2>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;

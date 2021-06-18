import { Component } from "react";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  state = {
    userName: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  handleInputChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={this.state.userName}
          placeholder="Github username..."
          onChange={this.handleInputChange}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;

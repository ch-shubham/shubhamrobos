import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";
import { getUsers } from "./utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ monsters: users });
    // getUsers.then((users) => this.setState({ monsters: users })) -> using .then and .catch can also be used.
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
        <h3>Web App By Shubham Chaudhary</h3>
      </div>
    );
  }
}

export default App;

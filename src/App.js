import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "ghaith",
        bio: "student",
        img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/273427225_762123424763509_2636034270488946129_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ypsjCOZlbSkAX-VyyMx&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9pNtIoJjAMt8-bacZFON1THmsue1fh6G_XmF2PB4rHFQ&oe=62150185",
        profession: "developer",
      },
      show: false,
      counter: 0,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ show: !this.state.show, counter: 0 });
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
        {this.state.show ? (
          <div>
            <h1>{this.state.person.name}</h1>
            <h1>{this.state.person.bio}</h1>
            <img src={this.state.person.img} />
            <h1>{this.state.person.profession}</h1>
            <h1>{this.state.counter}</h1>
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;

import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      listValue: [
        "passenger",
        "female",
        "hysterical",
        "tense",
        "finicky",
        "second",
        "ruddy",
        "beds",
        "play",
        "youthful",
        "spare",
        "wipe",
      ],
    };
  }

  render() {
    const { listValue, value } = this.state;
    return (
      <div>
        <input
          className="input-container"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <div className="suggestions-list">
          {listValue.map((item) => {
            if (!item.includes(value)) {
              return;
            }
            return <div>{item}</div>;
          })}
        </div>
      </div>
    );
  }
}

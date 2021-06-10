import React from "react";
import { Card } from "../component/card";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ name: "Card1" }, { name: "Card2" }],
      cardName: null,
    };
  }

  addCard = () => {
    const { items, cardName } = this.state;
    this.setState(
      {
        items: [...items, { name: cardName }],
      },
      () => this.setState({ cardName: null })
    );
  };

  onDeleteCard = (name) => {
    console.log("hi");
    const { items } = this.state;
    const newItems = JSON.parse(JSON.stringify(items));
    const deleteIndex = newItems.findIndex((i) => i.name == name);
    console.log(deleteIndex);
    console.log("newItems", newItems);
    if (deleteIndex > -1) {
      newItems.splice(deleteIndex, 1);
    }
    this.setState({
      items: newItems,
    });
  };

  render() {
    const { items, cardName } = this.state;
    console.log("items", items);
    return (
      <>
        <input
          name="card"
          value={cardName}
          onChange={(e) => this.setState({ cardName: e.target.value })}
        />
        <button onClick={() => this.addCard()}>Add Card</button>
        <span className="card-total">No of Cards: {items.length}</span>
        <div className="card-container">
          {items.map((it) => (
            <Card
              name={it.name}
              deleteCard={(name) => this.onDeleteCard(name)}
            />
          ))}
        </div>
      </>
    );
  }
}

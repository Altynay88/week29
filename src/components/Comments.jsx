import React from "react";
import "../components/comments.css";
import ListItems from "./ListItems";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <div className="box">
        <h3>Comments</h3>
        <form id="comment-form" onSubmit={this.addItem}>
          <textarea
            className="textArea"
            cols="30"
            rows="10"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          ></textarea>
          <div>
            <button type="submit">Add</button>
          </div>
          <ListItems items={this.state.items}></ListItems>
        </form>
      </div>
    );
  }
}

export default Comments;

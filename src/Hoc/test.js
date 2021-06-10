import React from "react";
import { Child as ChildComponent } from "../component/child";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ChildComponent>
          <div>
            <span>This is an child1 Component</span>
          </div>
        </ChildComponent>
        <ChildComponent>
          <div>
            <span>This is an child2 Component</span>
          </div>
        </ChildComponent>
      </>
    );
  }
}

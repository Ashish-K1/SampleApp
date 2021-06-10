import React from "react";
import axios from "axios";
import { Card } from "../component/card";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        _this.setState({ tableData: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  parsedata = (data) => {
    if (typeof data == "object") {
      return Object.values(data).join("");
    }
    return data;
  };

  hideFirstHalf = () => {
    const elems = document.getElementsByTagName("tr");
    for (var i = 1; i < elems.length; i++) {
      const childElem = elems[i].children;
      for (var j = 0; j < childElem.length; j++) {
        if (j <= childElem.length / 2) {
          childElem[j].style.visibility = "collapse";
        } else {
          childElem[j].style.visibility = "visible";
        }
      }
    }
  };

  hideSecondHalf = () => {
    const elems = document.getElementsByTagName("tr");
    for (var i = 1; i < elems.length; i++) {
      const childElem = elems[i].children;
      for (var j = 0; j < childElem.length; j++) {
        if (j > childElem.length / 2) {
          childElem[j].style.visibility = "collapse";
        } else {
          childElem[j].style.visibility = "visible";
        }
      }
    }
  };

  render() {
    const { tableData } = this.state;
    const tableHeader = tableData.length > 0 ? Object.keys(tableData[0]) : [];
    return (
      <>
        <div className="button-box">
          <button onClick={() => this.hideFirstHalf()}>Hide 1st half</button>
          <button onClick={() => this.hideSecondHalf()}>Hide 2nd half</button>
        </div>
        <table className="table-conatiner">
          <tr className="table-header">
            {tableHeader &&
              tableHeader.map((h) => <th className="table-header">{h}</th>)}
          </tr>
          {tableData &&
            tableData.map((d) => {
              return (
                <tr className="table-row">
                  {tableHeader.map((hd) => {
                    return <td>{this.parsedata(d[hd])}</td>;
                  })}
                </tr>
              );
            })}
        </table>
      </>
    );
  }
}

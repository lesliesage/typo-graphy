import React, {Component} from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";


class TestSnippet extends Component {
  state = {snippetCode: "" }

  componentDidMount() {
    console.log(this.props.queue)
    // this.setState({snippetCode: this.props.queue[0].code})
  }

  render() { 
    return (
      <div>
        <form>
          {/* <textarea name="input" cols="80" rows="15" disabled value={this.state.snippetCode}></textarea> */}
          <textarea name="input" cols="80" rows="15" disabled value="sad"></textarea>
        </form>
      </div>
    );
  }
}


export default withRouter(TestSnippet);

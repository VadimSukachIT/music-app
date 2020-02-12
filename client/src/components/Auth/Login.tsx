import * as React from "react";

export default class Login extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordVisible: false
    };
  }

  render() {
    return <h1>Log in</h1>;
  }
}

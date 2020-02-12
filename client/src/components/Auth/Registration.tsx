import * as React from "react";

export default class Registration extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordVisible: false
    };
  }

  render() {
    return (
      <div className="registration-page">
        <section className="registration-form-section">
          <form className="registration-form">
            <div className="field">
              <input type="text" placeholder="Login" />
            </div>
            <div className="field">
              <input type="email" placeholder="Email" />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

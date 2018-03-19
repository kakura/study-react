import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';

export default class MemberRegist extends React.Component {

  constructor() {
    super();
    this.state = {
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();

    var email = this.refs.email.value;
    var password = this.refs.password.value;

    if (email && password) {
      this.setState({ message: null });
      this.signup(email, password);
    } else {
      this.setState({ message: "Emailとパスワードを入力してください" });
    }

  }

  signup(email, password) {
    axios.post("/api/signup", {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container form-signin">
        <div className="btn_line"><a href="/auth/line">LINEで会員登録</a></div>
        <div className="btn_fb"><a href="/auth/facebook">Facebookで会員登録</a></div>

        <form className="border-top signin-email" onSubmit={this.handleSubmit}>
          <h5 className="font-weight-normal">メールアドレスで会員登録</h5>
          <p className="text-danger">{this.state.message}</p>
          <label htmlFor="inputEmail" className="sr-only">メールアドレス</label>
          <input type="email" ref="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
          <label htmlFor="inputPassword" className="sr-only">パスワード</label>
          <input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
                </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}


import React from 'react';
import {Link} from 'react-router';
import SignUpModal from './../components/signupModal';
import SignInModal from './../components/loginModal';

const Navbar = function({user, submitSignout, signInUser, signupUser}) {
  let icon = (<span><img className="logo" src="../assets/chutteLogo.png"  alt="Chutte Logo" height="50" width="50" />Chutte</span>);

  if(user.token !== ''){
    return (
      <nav className="navbar navbar-default navBrowse">
        <div className="container-fluid chutteGreen">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">{icon}</Link>
            </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/browse" activeClassName="active">Browse</Link></li>
            <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
            <li><a onClick={submitSignout} activeClassName="active">Sign out</a></li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-default navBrowse">
        <div className="container-fluid chutteGreen">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">{icon}</Link>
          </div>
            <ul className="nav navbar-nav navbar-right">
              <li><SignUpModal signupUser={signupUser}/></li>
              <li><SignInModal signInUser={signInUser}/></li>
            </ul>
        </div>
      </nav>
    )
  }
};

export default Navbar;

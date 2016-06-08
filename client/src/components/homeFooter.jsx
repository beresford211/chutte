import React from 'react';

class HomeFooter extends React.Component {
  render(){
    let octocat = (<span><img className="octocat" src="../assets/octocat.png"  alt="GitHub Logo" height="55" width="55" /></span>);
    return (
        <footer className="footer">
        <h4>Explore, Contribute, and Share</h4>
         <div className="footerImg">
           <a href="https://github.com/KGB-JS/chutte">{octocat}</a>
         </div>
        </footer>
    )
  }
}

export default HomeFooter;

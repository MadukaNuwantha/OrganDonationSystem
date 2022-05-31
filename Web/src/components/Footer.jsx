import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  static displayName = Footer.name;
  constructor (props) {
    super(props);

    this.toggleFooter = this.toggleFooter.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleFooter () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <div>
          <div className="st"></div>
          <div className="nd"></div>
      </div>
    );
  }
}

export default Footer;
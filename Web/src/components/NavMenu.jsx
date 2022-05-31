import React from 'react';
import './NavMenu.css';

class NavMenu extends React.Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  async adminBtn(){
    var text = sessionStorage.getItem('type');
    if(text == "Admin"){
      this.navigateAdmin();
    }
    else if(text == "SuperAdmin"){
      this.navigateSuperAdmin();
    }
    else{
      this.navigateLogin();
    }
  }

  async navigateAdmin(){
    window.location.replace("/admin");
  }

  async navigateSuperAdmin(){
      window.location.replace("/superadmin");
  }

  async navigateLogin(){
    window.location.replace("/admin/login");
  }

  render () {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light shadow mb-5" style={{backgroundColor: "#7DC9BA"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">OrgDon.lk</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" href="/law">Sri Lankan Laws</a>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Be a Living Donor
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/donatekidney">Donate your kidney</a></li>
                    <li><a className="dropdown-item" href="/donateliver">Donate part of your liver</a></li>
                    <li><a className="dropdown-item" href="/donatebone">Bone and amniotic membrane donation</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Get Involved
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/articals">News and Articals</a></li>
                    <li><a className="dropdown-item" href="/comments">Share your experience</a></li>
                    <li><a className="dropdown-item" href="/campaigns">Campaigns</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <a href='/doner/reg' className='button-77'>Donate</a>
              <button type='button' onClick={() => this.adminBtn()} className='button-77'>Admin Area</button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavMenu;
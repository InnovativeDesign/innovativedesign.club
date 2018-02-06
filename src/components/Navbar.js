import React from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

import Logo from '../../static/img/logo__fulltype.svg';

// TODO: Replace with Gatsby source
const PAGES = [
{
  name: 'Club',
  slug: 'club'
}, {
  name: 'DeCals',
  slug: 'decals'
}, {
  name: 'Our Team',
  slug: 'about',
}
// , {
//   name: 'Resources',
//   slug: 'resources',
// }, {
//   name: 'Contact',
//   slug: 'contact',
// }
];

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };

    this._handleHamburger = ::this._handleHamburger;
  }

  _handleHamburger(e) {
    if (e) e.preventDefault();
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    return <Headroom
      wrapperStyle={{
        maxHeight: 60
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.99)'
      }}
    >
      <div
        className={classNames("nav", {
          "nav--open": this.state.navOpen
        })}
      >
        <div className="nav__wrapper">
          <Link className="nav__item nav__logo" to='/'>
            <img src={Logo} />
          </Link>
          <div
            className={classNames("nav__item", "nav__hamburger", {
              "nav__hamburger--active": this.state.navOpen
            })}
            onClick={this._handleHamburger}
          >
            <div className="hamburger__bar bar--1"></div>
            <div className="hamburger__bar bar--2"></div>
          </div>
          <div className="nav__links">
            {PAGES.map((page) => {
              return (
                <Link
                  className="nav__item nav__link"
                  to={`/${page.slug}`}
                  onClick={() => this._handleHamburger()}
                  key={page.slug}
                >
                  {page.name}
                </Link>
              );
            })}
            <Link className="nav__item nav__cta" to='/requests/'>
              Submit a Request
            </Link>
          </div>
        </div>
      </div>
    </Headroom>
  }
}

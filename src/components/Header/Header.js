/* global window */
import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './Header.css';

class Header extends Component {
  static propTypes = {};

  componentDidMount() {
    let drawer = new window.mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
    document.querySelector('.header-menu-button').addEventListener('click', () => drawer.open = true);
  }

  render() {
    const activeClassName = 'mdc-temporary-drawer--selected';

    return (
      <div className="header">
        <div className="header-menu mdc-theme--primary-bg mdc-theme--text-primary-on-primary mdc-typography--title mdc-elevation--z4">
          <button className="header-menu-button material-icons">menu</button>
          <header className="mdc-temporary-drawer__header">
            <div className="mdc-temporary-drawer__header-content">Foogle</div>
          </header>
        </div>
        <aside className="mdc-temporary-drawer mdc-typography">
          <nav className="mdc-temporary-drawer__drawer">
            <header className="mdc-temporary-drawer__header">
              <div className="mdc-temporary-drawer__header-content  mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                Foogle
              </div>
            </header>
            <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
              <IndexLink to="/" activeClassName={activeClassName} className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">home</i>Home
              </IndexLink>
              <IndexLink to="/forms" activeClassName={activeClassName} className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">library_books</i>Forms
              </IndexLink>
              <IndexLink to="/responses" activeClassName={activeClassName} className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">view_list</i>Responses
              </IndexLink>
            </nav>
          </nav>
        </aside>
      </div>
    );
  }
}

export default Header;

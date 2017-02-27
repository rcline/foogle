import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './FormItem.css';

class FormItem extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  static defaultProps = {
    form: {},
  };

  render() {
    const {
      props: {
        form,
      }
    } = this;

    return (
      <li className="mdc-list-item form-item">
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__text__primary">{form.name}</span>
          <span className="mdc-list-item__text__secondary">{form.description}</span>
        </span>
        <span className="mdc-list-item__end-detail grey-bg" style={{width: 'auto'}}>
          <Link to={`/edit-form/${form.id}`}>
            <button className="mdc-fab mdc-fab--mini material-icons" style={{marginLeft: 10}}>
              <span className="mdc-fab__icon">mode_edit</span>
            </button>
          </Link>
          <Link to={`/form/${form.id}`}>
            <button className="mdc-fab mdc-fab--mini material-icons" style={{marginLeft: 10}}>
              <span className="mdc-fab__icon">open_in_new</span>
            </button>
          </Link>
        </span>
      </li>
    );
  }
}

export default FormItem;

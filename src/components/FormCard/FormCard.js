/* global window */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';
import './FormCard.css';

class FormCard extends Component {
  static propTypes = {
    form: PropTypes.object,
    handleDeleteForm: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  static defaultProps = {
    form: {},
    onDelete: () => {},
  };

  componentDidMount() {
    const MDCSnackbar = window.mdc.snackbar.MDCSnackbar;
    this.snackbar = new MDCSnackbar(this.snackbarEl);
  }

  copyShareLink = () => {
    this.shareLinkEl.select();

    try {
      var successful = document.execCommand('copy');
    } catch (err) {
      this.snackbar.show({
        message: 'Unable to copy',
      });
    }

    this.snackbar.show({
      message: successful ? 'Copied to clipboard' : 'Failed to copy',
    });
  };

  deleteForm = () => {
    const id = this.props.form.id;
    this.props.handleDeleteForm(id);

    this.props.onDelete(id);
  };

  render() {
    const {
      props: {
        form,
      }
    } = this;

    return (
      <div className={cn('form-card', 'mdc-card')}>
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">{form.name}</h1>
          <h2 className="mdc-card__subtitle"></h2>
        </section>
        <section className="mdc-card__supporting-text">{form.description}</section>
        <section className="mdc-card__actions">
          <Link to={`/edit-form/${form.id}`} className="mdc-card__action" aria-label="Edit">
            <button className="mdc-fab mdc-fab--mini material-icons">
              <span className="mdc-fab__icon">mode_edit</span>
            </button>
          </Link>
          <button onClick={this.copyShareLink} className="mdc-card__action mdc-fab mdc-fab--mini material-icons" aria-label="Share">
            <textarea
              style={{position: 'absolute', marginLeft: -1000000}}
              ref={(el) => { this.shareLinkEl = el; }}
              defaultValue={`${window.location.origin}/form/${form.id}`}
            />
            <span className="mdc-fab__icon">share</span>
          </button>
          <Link to={`/form/${form.id}`} className="mdc-card__action" aria-label="Use">
            <button className="mdc-fab mdc-fab--mini material-icons">
              <span className="mdc-fab__icon">open_in_new</span>
            </button>
          </Link>
          <button onClick={this.deleteForm} className="mdc-card__action mdc-fab mdc-fab--mini material-icons" aria-label="Delete">
            <span className="mdc-fab__icon">delete</span>
          </button>
        </section>
        <div
          className="mdc-snackbar"
          aria-live="assertive"
          aria-atomic="true"
          aria-hidden="true"
          ref={(el) => { this.snackbarEl = el; }}
        >
          <div className="mdc-snackbar__text"></div>
          <div className="mdc-snackbar__action-wrapper">
            <button type="button" className="mdc-button mdc-snackbar__action-button"></button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;

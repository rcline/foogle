import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import cn from 'classnames';
import './NewFormCard.css';

class NewFormCard extends Component {
  static propTypes = {
    handleAddForm: PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired,
  };

  onClick = () => {
    this.props.handleAddForm()
      .then((form) => {
        this.props.router.push(`/edit-form/${form.id}`);
      });
  };

  render() {

    return (
      <div className={cn('new-form-card', 'mdc-card')}>
        <section className="mdc-card__media demo-card__16-9-media">
          <a onClick={this.onClick} className="mdc-button mdc-button--compact" aria-label="Edit">
            <button className="mdc-fab mdc-fab--mini material-icons">
              <span className="mdc-fab__icon">add</span>
            </button>
          </a>
        </section>
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large" style={{textAlign: 'center'}}>Create New Form</h1>
        </section>
      </div>
    );
  }
}

export default withRouter(NewFormCard);

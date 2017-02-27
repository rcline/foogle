import React, { Component, PropTypes } from 'react';
import FormItem from '../../components/FormItem';

class Forms extends Component {
  static propTypes = {
    forms: PropTypes.object,
  };

  static defaultProps = {
    forms: {},
  };

  render() {
    const { forms } = this.props;

    return (
      <section>
        <h2>Forms:</h2>
        <ul className="mdc-list">
          {Object.keys(forms).map(id => {
            const form = forms[id];
            return (
              <FormItem key={form.id} form={form} />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Forms;

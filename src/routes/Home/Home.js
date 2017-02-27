import React, { Component, PropTypes } from 'react';
import FormCard from '../../components/FormCard';
import NewFormCard from '../../components/NewFormCard';

class Home extends Component {
  static propTypes = {
    forms: PropTypes.object,
  };

  state = {
    forms: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      forms: props.forms,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      forms: nextProps.forms,
    });
  }

  onDelete = (id) => {
    const forms = {
      ...this.state.forms,
    };

    delete forms[id];

    this.setState({
      forms
    });
  };

  render() {
    const { forms } = this.state;

    return (
      <div>
        <NewFormCard />
        <hr style={{ margin: '0 20px' }} />

        {Object.keys(forms).map(id => {
          const form = forms[id];
          return (
            <FormCard key={form.id} form={form} onDelete={this.onDelete}/>
          );
        })}
      </div>
    );
  }
}

export default Home;

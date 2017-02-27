import React, { Component, PropTypes } from 'react';
import './QuestionTypeSelector.css';

import TYPES from '../../config/question-types.json';

class QuestionTypeSelector extends Component {
  static propTypes = {
    id: PropTypes.number,
    onChange: PropTypes.func,
    type: PropTypes.number,
  };

  static defaultTypes = {
    onChange: () => {},
  };

  render() {
    const {
      props: {
        id,
        onChange,
        type,
      }
    } = this;

    return (
      <div className="mdc-textfield">
        <span>Question Type: </span>
        <select
          className="mdc-select"
          name={`question-${id}-type`}
          defaultValue={type}
          onChange={onChange}
        >
          {Object.keys(TYPES).map(option => (
            <option
              key={TYPES[option].value}
              value={TYPES[option].value}
            >{TYPES[option].name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default QuestionTypeSelector;

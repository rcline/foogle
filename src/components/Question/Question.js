import React, { Component, PropTypes } from 'react';

import TYPES from '../../config/question-types.json';

class Question extends Component {
  static propTypes = {
    id: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    prompt: PropTypes.string,
    type: PropTypes.number,
  };

  render() {
    const {
      props: {
        id,
        options,
        prompt,
        type,
      }
    } = this;

    return (
      <div>
        <h3>{prompt}</h3>

        {(type === TYPES.short_response.value) &&
          <div className="mdc-textfield">
            <input
              type="text"
              className="mdc-textfield__input"
              name={id}
            />
          </div>
        }
        {(type === TYPES.long_response.value) &&
          <div className="mdc-textfield mdc-textfield--multiline">
            <textarea className="mdc-textfield__input" name={id} />
          </div>
        }
        {(type === TYPES.single_choice_select.value) &&
          <select className="mdc-select" name={id}>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        }
        {(type === TYPES.multiple_choice.value || type === TYPES.single_choice_radio.value) && options.map((option, index) => {
          const inputType = (type === TYPES.single_choice_radio.value) ? "radio" : "checkbox";
          const domId = `question-${id}-${index}`;
          return (
            <div key={domId}>
              <div className="mdc-form-field">
                <div className={`mdc-${inputType}`}>
                  <input
                    id={domId}
                    name={id}
                    type={inputType}
                    value={option}
                  />
                </div>
                <label htmlFor={domId}>{option}</label>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Question;

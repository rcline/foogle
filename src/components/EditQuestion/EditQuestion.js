import React, { Component, PropTypes } from 'react';

import TYPES from '../../config/question-types.json';

class EditQuestion extends Component {
  static propTypes = {
    addOption: PropTypes.func,
    id: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    prompt: PropTypes.string,
    type: PropTypes.number,
  };

  static defaultProps = {
    addOption: () => {},
  };

  render() {
    const {
      props: {
        addOption,
        id,
        options,
        prompt,
        type,
        }
      } = this;

    return (
      <div>
        <input type="hidden" name={`question-${id}-id`} defaultValue={id} />
        <div className="mdc-textfield">
          {prompt && <input type="text" className="mdc-textfield__input" name={`question-${id}-prompt`} placeholder="Question name..." defaultValue={prompt} />}
        </div>

        {(type === TYPES.single_choice_select.value || type === TYPES.multiple_choice.value || type === TYPES.single_choice_radio.value) &&
          <div>
            <div className="mdc-textfield">
              {options && options.map((option, index) => option && (
                <input key={index} type="text" className="mdc-textfield__input" name={`question-${id}-option-${index}`} placeholder="Option..." defaultValue={option} />
              ))}
            </div>
            <button onClick={addOption} className="mdc-button mdc-button--raised mdc-button--secondary">Add Option</button>
          </div>
        }
      </div>
    );
  }
}

export default EditQuestion;

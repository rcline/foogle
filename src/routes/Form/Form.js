import React, { Component, PropTypes } from 'react';
import Question from '../../components/Question';
import './Form.css';

class Form extends Component {
  static propTypes = {
    forms: PropTypes.object,
    handleAddResponse: PropTypes.func.isRequired,
    params: PropTypes.shape({
      formId: PropTypes.string,
    }),
    questions: PropTypes.object,
  };

  static defaultProps = {
    forms: {},
    questions: {},
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      props: {
        params: {
          formId,
          },
        },
      } = this;
    let questions = [];

    const formData = new window.FormData(this.formEl);

    for (var entry of formData.entries())
    {
      questions.push({
        "questionId": entry[0],
        "value": entry[1]
      });
    }

    this.props.handleAddResponse({
      formId,
      questions
    });
  };

  render() {
    const {
      props: {
        forms,
        params: {
          formId,
        },
        questions,
      },
    } = this;

    const form = forms[formId] || {};

    return (
      <div className="form">
        <h1>{form.name}</h1>
        <p>{form.description}</p>
        <form
          onSubmit={this.onSubmit}
          ref={el => (this.formEl = el)}
        >
          {form.questions && form.questions.map(questionId => {
            const question = questions[questionId];
            return (
              <Question key={question.id} {...question} />
            );
          })}
          <button type="submit" className="mdc-button mdc-button--raised mdc-button--primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

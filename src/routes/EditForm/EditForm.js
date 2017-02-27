import React, { Component, PropTypes } from 'react';
import EditQuestion from '../../components/EditQuestion';
import QuestionTypeSelector from '../../components/QuestionTypeSelector';
import './EditForm.css';

// TODO(rcline): this component is crazy big, needs refactoring

class EditForm extends Component {
  static propTypes = {
    forms: PropTypes.object,
    handleUpdateForm: PropTypes.func.isRequired,
    handleAddQuestion: PropTypes.func.isRequired,
    handleUpdateQuestion: PropTypes.func.isRequired,
    params: PropTypes.shape({
      formId: PropTypes.string,
    }),
    questions: PropTypes.object,
  };

  static defaultProps = {
    forms: {},
    questions: {},
  };

  state = {
    form: {},
  };

  constructor(props) {
    super(props);

    const form = props.forms[props.params.formId] || {};
    this.state = {
      form,
      questions: props.questions || {},
    };
  }

  componentWillReceiveProps(nextProps) {
    const form = nextProps.forms[nextProps.params.formId] || {};
    this.setState({
      form,
      questions: nextProps.questions || {},
    });
  }

  addOption = (id) => {
    const question = {
      options: [],
      ...this.state.questions[id]
    };
    question.options.push(' ');

    this.setState({
      questions: {
        ...this.state.questions,
        [id]: {
          ...question,
        },
      },
    });
  };

  addQuestion = () => {
    this.props.handleAddQuestion()
      .then((question) => {
        const id = question.id;
        const form = {
          questions: [],
          ...this.state.form,
        };
        form.questions.push(id);
        const questions = {
          ...this.state.questions,
          [id]: {
            id,
            ...this.state.questions[id],
            prompt: ' ',
          },
        };

        this.setState({
          form,
          questions,
        });
      });
  };

  onTypeChange = (e, id) => {
    this.setState({
      questions: {
        ...this.state.questions,
        [id]: {
          ...this.state.questions[id],
          type: parseInt(e.target.value, 10),
        },
      },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let form = {};
    let questions = {};
    let questionList = [];

    const formData = new window.FormData(this.formEl);

    // Extract data out from page and prepare for specific tables
    for (var entry of formData.entries())
    {
      const key = entry[0];
      const value = entry[1];
      if (['id'].indexOf(key) > -1) {
        form[key] = parseInt(value, 10);
      } else if (['name', 'description'].indexOf(key) > -1) {
        form[key] = value;
      } else {
        let keyArray = key.split('-');
        if (keyArray[0] === 'question') {
          if (!questions[keyArray[1]]) {
            questions[keyArray[1]] = {
              id: parseInt(keyArray[1], 10),
            }
          }

          if (['option'].indexOf(keyArray[2]) > -1) {
            if (!questions[keyArray[1]].options) {
              questions[keyArray[1]].options = [];
            }
            questions[keyArray[1]].options.push(value);
          } else if (['id', 'type'].indexOf(keyArray[2]) > -1) {
            questions[keyArray[1]][keyArray[2]] = parseInt(value, 10);
          } else {
            questions[keyArray[1]][keyArray[2]] = value;
          }
        }
      }
    }

    // for each question, save question (id, prompt, type, options[])
    Object.keys(questions).map(id => {
      const question = questions[id];
      questionList.push(parseInt(id, 10));
      this.props.handleUpdateQuestion(question);
      return undefined;
    });

    form.questions = questionList;
    // save form data (id, name, description, questions[])
    this.props.handleUpdateForm(form);
  };

  render() {
    const {
      state: {
        form,
        questions,
      }
    } = this;

    return (
      <div className="edit-form">
        <form
          onSubmit={this.onSubmit}
          ref={el => (this.formEl = el)}
        >
          <input type="hidden" name="id" defaultValue={form.id} />
          <div className="mdc-textfield">
            {form.name && <input type="text" className="mdc-textfield__input" name="name" placeholder="Form name..." defaultValue={form.name} />}
          </div>

          <div className="mdc-textfield mdc-textfield--multiline">
            {form.description && <textarea className="mdc-textfield__input" name="description" placeholder="Form description..." defaultValue={form.description} />}
          </div>

          {form.questions && form.questions.map(questionId => {
            const question = questions[questionId];
            return (
              <div key={question.id} className="edit-form-question">
                <QuestionTypeSelector
                  id={question.id}
                  type={question.type}
                  onChange={(e) => {this.onTypeChange(e, question.id);}}
                />

                <EditQuestion
                  edit={true}
                  addOption={() => {this.addOption(question.id);}}
                  {...question}
                />
              </div>
            );
          })}

          <div className="edit-form-actions">
            <button onClick={this.addQuestion} className="mdc-button mdc-button--raised mdc-button--secondary">Add Question</button>
            <button type="submit" className="mdc-button mdc-button--raised mdc-button--primary edit-form-save">Save Form</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;

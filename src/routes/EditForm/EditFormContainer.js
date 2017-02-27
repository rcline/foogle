import { connect } from 'react-redux';

import EditForm from './EditForm';

import {
  forms,
  questions,
} from '../../store/actions';

function mapStateToProps(state) {
  const { forms, questions } = state;
  return {
    forms,
    questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdateForm(form) {
      return dispatch(forms.updateForm(form));
    },
    handleAddQuestion() {
      return dispatch(questions.addQuestion({
        prompt: ' ',
      }));
    },
    handleUpdateQuestion(question) {
      return dispatch(questions.updateQuestion(question));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditForm);

import React, { Component, PropTypes } from 'react';
import './Responses.css';

// TODO(rcline): Very rough and crude display, but an MVP for now

class Responses extends Component {
  static propTypes = {
    responses: PropTypes.object,
  };

  state = {
    responses: {},
  };

  render() {
    const { responses } = this.props;

    return (
      <div className="responses">
        <table>
          <tbody>
            <tr>
              <th>Response id</th>
              <th>Form id</th>
              <th>Question id</th>
              <th>Value</th>
            </tr>
            {Object.keys(responses).map(id => {
              const response = responses[id];
              return response.questions.map(question => {
                return (
                  <tr>
                    <td>{response.id}</td>
                    <td>{response.formId}</td>
                    <td>{question.questionId}</td>
                    <td>{question.value}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Responses;

import React, {useState} from 'react';
import Navbars from "../HomePage/Navbars/Navbars";
import {useSelector, useDispatch} from "react-redux";
import { AddingQuiz } from '../../QuizRedux/features/TeacherSlice';

const AddQuiz = () => {
    const [formValue, setFormValue] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddingQuiz(formValue))
        e.target.reset()
      };
      const onInputChange = (e) => {
        let name = e.target.name
        let val = e.target.value

        const data = {...formValue}
        data[name] = val
        setFormValue(data)
      };
  return (
    <>
    <Navbars/>
    <section className="register-area ptb-50">
        <div className="container">
          <div className="register-form">
            <h2>Add Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label for="cars">Subject</label>
                <select name="subject" onBlur={onInputChange}>
                <option value="GS">General Knowledge</option>
                <option value="Science">Science</option>
                <option value="Math">Math</option>
                <option value="ICT">ICT</option>
                </select>
              </div>

              <div className="form-group">
                <label >Choose Quiz Type</label>
                <select name="quizType" onBlur={onInputChange}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                </select>
              </div>

              <div className="form-group">
                <label>Quiz Question</label>
                <input
                  name="question"
                  type="text"
                  onChange={onInputChange}
                  className="form-control"
                  placeholder="Quiz Question"
                />
              </div>
              <div className="form-group">
                <label>Option 1</label>
                <input
                  name="option1"
                  onChange={onInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Option"
                />
              </div>
              <div className="form-group">
                <label>Option 2</label>
                <input
                  name="option2"
                  onChange={onInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Option"
                />
              </div>
              <div className="form-group">
                <label>Option 3</label>
                <input
                  onChange={onInputChange}
                  name="option3"
                  type="text"
                  className="form-control"
                  placeholder="Option"
                />
              </div>

              <div className="form-group">
                <label>Option 4</label>
                <input
                  name="option4"
                  type="text"
                  onChange={onInputChange}
                  className="form-control"
                  placeholder='Option'
                />
              </div>
              <div className="form-group">
                <label>Option 5</label>
                <input
                  name="option5"
                  onChange={onInputChange}
                  type="text"
                  className="form-control"
                  placeholder='Option'
                />
              </div>
              <div className="form-group">
                <label>Correct Option</label>
                <input
                  name="correct"
                  onChange={onInputChange}
                  type="text"
                  className="form-control"
                  placeholder="correct"
                />
              </div>
              <button type="submit">
                Add Quiz
              </button>
            </form>
          </div>
        </div>
    </section>
    </>
  );
}

export default AddQuiz;
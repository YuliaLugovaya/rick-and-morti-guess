import React from 'react';
import '../../styles/App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Guess from '../Guess/Guess';
import Answers from '../Answers/Answers';
import RightAnswers from '../RightAnswers/RightAnswers';
import FalseAnswers from '../FalseAnswers/FalseAnswers';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/guess' element={<Guess />} />
          <Route path='/answers' element={<Answers />} />
          <Route path='/right_answers' element={<RightAnswers />} />
          <Route path='/false_answers' element={<FalseAnswers />} />
        </Routes>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
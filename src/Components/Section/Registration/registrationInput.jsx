import React from 'react';

import $ from 'jquery';

const RegistrationInput = (props) => {
  const registrationAttr = (event) => {
    const email = $('#regEmail')
      .val()
      .toLowerCase();
    const firstName = $('#regFirstName').val();
    const lastName = $('#regLastName').val();
    const password = $('#regPassword').val();
    props.reg(event, email, firstName, lastName, password);
  };
  return (
    <div className="Reg">
      <form className="px-4 py-3">
        <div className="form-group">
          <label htmlFor="regEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="regEmail"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="regFirstName">Имя</label>
          <input type="text" className="form-control" id="regFirstName" placeholder="Иван" />
        </div>
        <div className="form-group">
          <label htmlFor="regLastName">Фамилия</label>
          <input type="text" className="form-control" id="regLastName" placeholder="Иванов" />
        </div>
        <div className="form-group">
          <label htmlFor="regPassword">Пароль</label>
          <input type="password" className="form-control" id="regPassword" placeholder="Пароль" />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="RememberMeCheckbox" />
            <label className="form-check-label" htmlFor="RememberMeCheckbox">
              Запомнить меня
            </label>
          </div>
        </div>
        <button
          onClick={registrationAttr}
          type="button"
          className="btn btn-primary"
          id="RegistrationBtn"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default RegistrationInput;
import React from "react";
import $ from "jquery";

const Registration = props => {
  function registration() {
    class User {
      constructor(id, email, firstName, lastName, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.deleteAccountRequest = false;
        this.administration = false;
      }
    }

    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    const email = $("#regEmail")
      .val()
      .toLowerCase();
    const firstName = $("#regFirstName").val();
    const lastName = $("#regLastName").val();
    const password = $("#regPassword").val();
    let lastElement = users[users.length - 1];
    const id = lastElement ? lastElement.id + 1 : 0;

    const isTaken = users.some(user => user.email === email);
    if (isTaken) {
      alert("Данный email занят");
      return;
    }

    if (!firstName || !lastName || !password) {
      alert("Заполните все поля");
      return;
    }

    const newUser = new User(id, email, firstName, lastName, password);
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Вы зарегистрировались,пожалуйста войдите");
    $(".Reg").hide();
  }

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
          <input
            type="text"
            className="form-control"
            id="regFirstName"
            placeholder="Иван"
          />
        </div>
        <div className="form-group">
          <label htmlFor="regLastName">Фамилия</label>
          <input
            type="text"
            className="form-control"
            id="regLastName"
            placeholder="Иванов"
          />
        </div>
        <div className="form-group">
          <label htmlFor="regPassword">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="regPassword"
            placeholder="Пароль"
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="RememberMeCheckbox"
            />
            <label className="form-check-label" htmlFor="RememberMeCheckbox">
              Запомнить меня
            </label>
          </div>
        </div>
        <button
          onClick={registration}
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

export default Registration;

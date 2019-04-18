import React from 'react';
import $ from 'jquery';

const EditProfile = (props) => {
  const change = () => {
    const firstName = $('#ChangedFirstName').val();
    const lastName = $('#ChangedLastName').val();
    props.changeFirstLastName(firstName, lastName);
  };
  return (
    <>
      <div className="m-2">
        <button type="button" onClick={props.removeRequest}>
          Remove Request
        </button>
      </div>
      <form>
        <label className="m-2">
          Имя:
          <input className="m-2" type="text" id="ChangedFirstName" />
        </label>
        <label>
          Фамилия:
          <input className="m-2" type="text" id="ChangedLastName" />
        </label>
        <button type="button" onClick={change}>
          Отправить
        </button>
      </form>
    </>
  );
};

export default EditProfile;

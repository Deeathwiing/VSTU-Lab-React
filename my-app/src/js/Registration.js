/* eslint-disable no-plusplus */
class User {
  constructor(
    id,
    email,
    firstName,
    lastName,
    password,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.deleteAccountRequest = false;
    this.administration = false;
  }
}

const BDusers = [];

for (let i = 1; i <= localStorage.length; i++) {
  BDusers.push(JSON.parse(localStorage.getItem(i)));
}

$('#RegistrationBtn').on('click', () => {
  const email = $('#regEmail')
    .val()
    .toLowerCase();
  const firstName = $('#regFirstName')
    .val()
    .toLowerCase();
  const lastName = $('#regLastName')
    .val()
    .toLowerCase();
  const password = $('#regPassword').val();
  for (let i = 0; i < BDusers.length; i++) {
    const user = BDusers[i];

    if (
      email === user.email
    ) {
      alert('Данный email занят');
      return;
    }
  }

  if (
    // eslint-disable-next-line eqeqeq
    (firstName && lastName && password) == false
  ) {
    alert('Заполните все поля');
    return;
  }
  const id = ++localStorage.length;
  const newUser = new User(id, email, firstName, lastName, password);
  localStorage.setItem(id, JSON.stringify(newUser));
  $('#Reg').hide();
});

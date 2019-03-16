/* eslint-disable no-plusplus */
const usersBase = [];
let checklogin = false;
let admin = false;
let users;


for (let i = 1; i <= localStorage.length; i++) {
  usersBase.push(JSON.parse(localStorage.getItem(i)));
}

$('#login').on('click', () => {
  for (let i = 0; i < usersBase.length; i++) {
    users = usersBase[i];

    const logEmail = $('#logEmail').val().toLowerCase();


    if ((logEmail === users.email) && ($('#logPass').val() === users.password)) {
      console.log(users.email);
      $('.removeAfterReg').hide();
      $('.PersonalArea').removeClass('d-none');
      checklogin = true;
      if (users.administration) {
        admin = true;
      }
    }
  }
  if (!checklogin) {
    alert('Введите правильный email и пароль');
  }

  if (admin) {
    $('.linkAdmin').removeClass('d-none');
  }
});

for (let i = 0; i < usersBase.length; i++) {
  const userId = usersBase[i];


  $('#adminTable').append(`
               <tr>
                <th scope="row">${userId.id}</th>
                <td>${userId.firstName}</td>
                <td>${userId.lastName}</td>
                <td>${userId.email}</td>
                <td>${userId.deleteAccountRequest}</td>
              </tr>
`);
}

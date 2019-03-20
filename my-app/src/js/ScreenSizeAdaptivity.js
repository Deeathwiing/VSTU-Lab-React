// eslint-disable-next-line import/no-unresolved
import $ from 'jquery';

function screenCheck() {
  if ($(window).width() <= 1210 && $(window).width() >= 801) {
    $('#deleteAside').removeClass('d-none');
    $('#asideSearch').css('width', '150px');
    return;
  }
  if ($(window).width() <= 800 && $(window).width() >= 451) {
    $('#deleteAside').removeClass('d-none');
    $('#asideSearch').css('width', '150px');
    $('#asideSearchBtn,#asideSearch').addClass('mx-auto');
    return;
  }
  if ($(window).width() <= 450) {
    $('#deleteAside').addClass('d-none');
    $('#section').css('width', '100%');
    const Search = $('#Search');
    Search.css({ width: '200px', marginRight: '5px' });
    $('#Reg').css('width', '100%');
    return;
  }
  $('#deleteAside').removeClass('d-none');
}
$(document).ready(() => {
  screenCheck();
});

$(window).on('resize', () => {
  window.location.reload();
  screenCheck();
});
export default screenCheck;

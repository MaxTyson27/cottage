$(function () {
  $('#phone').inputmask({ "mask": "+7(999) 999-99-99" });
  $('#name').keypress(function (e) {
    if (e.keyCode == 32) return false;
    if (this.value.length == 1) {
      this.value = this.value.toUpperCase();
    }
  });
  $('.header__button').on('click', function () {
    $('.quiz').addClass('quiz--active');
  })
  $('.quiz__close').on('click', function (e) {
    e.preventDefault();
    $('.quiz').removeClass('quiz--active');
  })
});

const registrationForm = document.querySelector('#form')
const registrationInputs = Array.from(registrationForm.querySelectorAll('.page__input'));
const registrationSubmitButton = registrationForm.querySelector('.form__form-btn')
function checkForm() {
  var valid = registrationForm.checkValidity();
  registrationInputs.forEach(input => {
    const error = input.closest('.page__item').querySelector('.page__error');
    const border = input.closest('.page__item').querySelector(".page__border");

    if (input.id == 'phone') {
      input.addEventListener('keypress', () => {
        if (input.validity.valid) {
          error.classList.add('page__error_hidden')
          border.classList.remove('error-red')
        } else {
          error.classList.remove('page__error_hidden')
          border.classList.add('error-red')
        }
      })
    }

    input.addEventListener('input', () => {
      if (input.validity.valid) {
        error.classList.add('page__error_hidden')
        border.classList.remove('error-red')
      } else {
        error.classList.remove('page__error_hidden')
        border.classList.add('error-red')
      }
    })

    input.addEventListener('invalid', () => {
      error.classList.remove('page__error_hidden');
      border.classList.add('error-red')
    })
  })

  return valid
}
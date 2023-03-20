const phone = document.querySelector('#modal-phone');

const phoneMask = () => {
  var imPhone = new Inputmask("+7(999)999-99-99");
  imPhone.mask(phone);
};

export default phoneMask;
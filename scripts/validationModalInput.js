const phone = document.querySelector('#modal-phone');

const validationModalInput = () => {
  const validator = new JustValidate('.modal__form', {
    errorLabelCssClass: ['modal__input-error'],
    errorLabelStyle: {
      color: '#FFC700',
    },
  });

  validator
    .addField(document.querySelector('#modal-name'), [
      {
        rule: 'required',
        errorMessage: 'Заполните имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 3 символа',
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'Максимум 20 символов',
      },
    ])
    .addField(document.querySelector('#modal-phone'), [
      {
        rule: 'required',
        errorMessage: 'Телефон обязателен',
      },
      {
        validator: value => {
          const number =  phone.inputmask.unmaskedvalue();
          return number.length === 10;
        },
        errorMessage: 'Некорректный номер',
      }
    ]);
  
  validator.onSuccess((e) => {
    const form = e.currentTarget;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name.value,
        phone: form.phone.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        form.reset();
        alert(`Данные отправлены, заявка #${data.id}`);
      })
      .catch( err => console.log(err))
  });
};

export default validationModalInput;
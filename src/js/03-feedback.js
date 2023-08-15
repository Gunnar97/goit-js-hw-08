const refs = {
    form: document.querySelector('.feedback-form'),
    emeil: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    submit: document.querySelector('button')
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(eve) {
    const data = {};
    const formData = new FormData(eve.target.value);
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
}



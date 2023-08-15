import storage from './storage.js';
import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    submit: document.querySelector('button')
};


refs.form.addEventListener('input', throttle(onInputForm, 500));
let dataObj = {};
function onInputForm(eve) {
    const value = eve.target.value;
    const key = eve.target.name;
    dataObj[key] = value;
    storage.save('feedback-form-state', dataObj)
}

function onPageLoaded() {
    const myData = storage.load('feedback-form-state') || {};
    dataObj = myData;
    refs.input.value = myData?.email || '';
    refs.textarea.value = myData?.message || '';
}
onPageLoaded()

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(eve) { 
    eve.preventDefault();
    if (refs.input.value === '' || refs.textarea.value ==='' ) {
        alert('Both fields must be filled')
    }
    else {
    console.log(dataObj);
    dataObj = {};
    eve.target.reset();
    storage.remove('feedback-form-state');
    };
};















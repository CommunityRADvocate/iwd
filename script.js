const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
const scriptURL = 'https://script.google.com/macros/s/AKfycbz1DYqx1d3hgLPWtfflAF4SR1I7MNmfL3oyyCJ1iFDN_8pjOB9GSVIhM1gNnPmHql0YEw/exec';

form.addEventListener('submit', e => {
    submitButton.disabled = true;
    e.preventDefault();
    let requestBody = new FormData(form);
    fetch(scriptURL, {method: 'POST', body: requestBody}).then(response => {
        alert('Success!', response);
        submitButton.disabled = false;
    }).catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false;
    });
});
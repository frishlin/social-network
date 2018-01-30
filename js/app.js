$(document).ready(function() {
    $('#log-in-button').click(logInFunction)
    $('#sign-up-button').click(signUpFunction)
    $('#user-button').click(validateUser)
});

function logInFunction() {
    $('#first-view').hide()
    $('#log-in').show()
}

function signUpFunction() {
    $('#first-view').hide()
    $('#sign-up').show()
}

function validateUser() {

    if ($('#user').val() === 'frish.lin@laboratoria.la' && $('#password').val() === 'frish.lin@laboratoria.la') {
        window.location.href = 'views/home.html'
    } else {
        alert('Ingresa una cuenta válida')
    }

}
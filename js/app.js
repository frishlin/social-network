$(document).ready(function() {
    $('#log-in-button').click(logInFunction)
    $('#sign-up-button').click(signUpFunction)
    $('#user-button').click(validateUser)
    $('#back-button-log-in').click(backPageLogIn)
    $('#back-button-sign-up').click(backPageSignUp)
    $('#user').keyup(validLogInUser)
    $('#password').keyup(validLogInPassword)
    $('#user-input').keyup(validSignUpUser)
    $('#email-input').keyup(validSignUpEmail)
    $('#password-input').keyup(validSignUpPassword)
    $('#repassword-input').keyup(validSignUpRepassword)
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

function backPageLogIn() {
    $('#first-view').show()
    $('#log-in').hide()
}


function backPageSignUp() {
    $('#first-view').show()
    $('#sign-up').hide()
}


function validLogInUser() {
    var $userLogIn = $('#user').val().length
    $('body').data('userLength', $userLogIn);
    validLogin()
}

function validLogInPassword() {
    var $passwordLogIn = $('#password').val().length
    $('body').data('passwordLength', $passwordLogIn);
    validLogin()
}


function validLogin() {
    var user = $('body').data('userLength');
    var password = $('body').data('passwordLength');
    if (user > 0 && password > 0) {
        $('#user-button-log-in').removeClass('disabled');
    } else {
        $('#user-button-log-in').addClass('disabled');
    }
}

//REVISAR A PARTIR DE AQUI
function validSignUpUser() {
    var $userSignUp = $('#user-input').val().length
    $('body').data('userSignUpLength', $userSignUp);
    console.log($('body').data('userSignUpLength'))
    validSignUp()
}

function validSignUpEmail() {
    var $emailSignUp = $('#email-input').val().length
    $('body').data('emailSignUpLength', $emailSignUp);
    validSignUp()
}

function validSignUpPassword() {
    var $passwordSignUp = $('#password-input').val().length
    $('body').data('passwordSignUpLength', $passwordSignUp);
    validSignUp()
}

function validSignUpRepassword() {
    var $repasswordSignUp = $('#repassword-input').val().length
    $('body').data('repasswordSignUpLength', $repasswordSignUp);
    validSignUp()
}


function validSignUp() {
    var userSignUp = $('body').data('userSignUpLength')
    var emailSignUp = $('body').data('emailSignUpLength')
    var passwordSignUp = $('body').data('passwordSignUpLength')
    var repasswordSignUp = $('body').data('repasswordSignUpLength')
    if (userSignUp > 0 && emailSignUp > 0 && passwordSignUp > 0 && repasswordSignUp > 0) {
        $('#user-button-sign-up').removeClass('disabled');
    } else {
        $('#user-button-sign-up').addClass('disabled');
    }

}
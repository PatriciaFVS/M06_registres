let nom = $("#validationNom")
let cognom = $("#validationCognoms")
let dni = $("#validationDNI")

document.addEventListener("DOMContentLoaded", function () {
  $('#form-user-register').submit(function (e) {

    e.preventDefault();
    validateName();


  })

  $('#btnUsername').click(function () {
    if (nom.val() && cognom.val() && dni.val()) {
      generaUsername();
    } else {
      alert("Omple els camps: Nom, Cognom, DNI")
    }

  })
})

function generaUsername() {
  let primerLetNom = nom.val().charAt(0).toLowerCase()
  let primerLetCognom = cognom.val().charAt(0).toUpperCase()
  let restaCognom = cognom.val().slice(1, 4).toLowerCase()
  let numDni = ''
  let dniSensLet = dni.val().slice(0, -1)


  for (let i = 0; i < dniSensLet.length; i++) {
    if (i % 2 == 0) {
      numDni += dniSensLet.charAt(i);
    }
  }
  let userName = primerLetNom + primerLetCognom + restaCognom + numDni
  $("#validationUsername").val(userName)
}
function validateName() {


  if (nom.val() == '') {
    nom.addClass('is-invalid').removeClass('is-valid');
    $('#feedbackNom').html('Insereix el teu nom').removeClass('valid-feedback').addClass('invalid-feedback');
  } else {
    nom.addClass('is-valid').removeClass('is-invalid');
    $('#feedbackNom').html('').removeClass('invalid-feedback').addClass('valid-feedback');
  }

  if (cognom.val() == '') {
    console.log("hol")
    cognom.addClass('is-invalid').removeClass('is-valid');
    $('#feedbackCognoms').html('Insereix el teu cognom').removeClass('valid-feedback').addClass('invalid-feedback');
  } else {
    cognom.addClass('is-valid').removeClass('is-invalid');
    $('#feedbackCognoms').html('').removeClass('invalid-feedback').addClass('valid-feedback');
  }

  if (dni.val() == '') {
    dni.addClass('is-invalid').removeClass('is-valid');
    $('#feedbackDNI').html('Insereix el teu DNI').removeClass('valid-feedback').addClass('invalid-feedback');
  }
  else {
    if (validateNIF_NIE(dni.val())) {
      dni.addClass('is-valid').removeClass('is-invalid');
      $('#feedbackDNI').html('').removeClass('invalid-feedback').addClass('valid-feedback');
    }
    else {
      dni.addClass('is-invalid').removeClass('is-valid');
      $('#feedbackDNI').html('El DNI no és vàlid').removeClass('valid-feedback').addClass('invalid-feedback');
    }
  }
}





function validateNIF_NIE(value) {
  var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = value.toString().toUpperCase();
  console.log("hosl")
  if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

  var nie = str
    .replace(/^[X]/, '0')
    .replace(/^[Y]/, '1')
    .replace(/^[Z]/, '2');

  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter) return true;

  return false;
}


function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    alert("OK");
  } else {
    alert("KO");
  }
}




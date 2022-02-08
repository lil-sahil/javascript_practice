import { emailForm,
         countryForm,
         zipForm,
         passwordForm,
         verifyForm,
         allInput,
         submitButton
        } from './dom.js';


class submitLogic {

  checkAllValid () {
    for (const field of allInput()){
      if (field.classList.contains('no-error')){
        
        
      } else {
        console.log('Did not Submit')
        return 1
      }
    }
    console.log('Form Submitted')
  }

  addEvent () {
    
    submitButton().addEventListener('click', () => {
      this.checkAllValid();
    })
  }

}

class FormValidation {
  
  applyValidations () {
    this.emailValidation();
    this.countryValidation();
    this.zipValidation();
    this.passwordValidation();
    this.passwordVerificationValidation();
  }


  createValidation (domInputFunction) {
    let inputField = domInputFunction;

    inputField.addEventListener('input', () => {
      if(inputField.validity.valid){
        inputField.classList.add('no-error')
        inputField.classList.remove('error')
      }else {
        inputField.classList.remove('no-error')
        inputField.classList.add('error')
      }
    })
  }


  // Email validation
  emailValidation () {
    this.createValidation(emailForm())
  }

  // countryForm
  countryValidation () {
    this.createValidation(countryForm())
  }

  // Zip code
  zipValidation () {
    this.createValidation(zipForm())
  }

  // Password 
  passwordValidation () {
    this.createValidation(passwordForm())
  }

  // Password Verification
  passwordVerificationValidation () {

    let passwordVerificationForm = verifyForm()

    passwordVerificationForm.addEventListener('input', () => {
      if(verifyForm().value === passwordForm().value){
        passwordVerificationForm.classList.add('no-error')
        passwordVerificationForm.classList.remove('error')

      } else {
        passwordVerificationForm.classList.add('error')
        passwordVerificationForm.classList.remove('no-error')
      }
    })
  }


  
  // Add a button where if all the fields do not contain the no-error class then the form will submit.
  

}

new FormValidation().applyValidations()
new submitLogic().addEvent()
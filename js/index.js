

const dateOfBirth = getId("dateOfBirth");
const email = getId("email");
const telephone = getId("telephone");
const password = getId("password");
const password_2 = getId('password_2');
const password_p_2 = getId('password_p_2');



const dateOfBirth_p = getId("dateOfBirth_p");
const email_p = getId("email_p");
const telephone_p = getId("telephone_p");


// this function below gets an ID element
// console.log(telephone_p)
function getId(elementID){
    return document.getElementById(elementID);
}


// const inputs = document.querySelectorAll('input');

// console.log(inputs)



dateOfBirth.addEventListener('keyup', validatedDateOfBith);
email.addEventListener('keyup', validatedEmail);
telephone.addEventListener('keyup', validatedTelephone);
password.addEventListener('blur', validatePassword);
// password_2.addEventListener('blur', confirmPassword);

console.log(dateOfBirth);
console.log(email);
console.log(telephone);
console.log(password);
console.log(password_2);


function validatedDateOfBith(e){
    const dateOfBirthRegex = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)dd$/;
    // const dateOfBirthRegex =  /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    let pattern = new RegExp(dateOfBirthRegex, "i")
    let checkDateOfBirth =  e.target.value;
  console.log(e.target.attributes.name.value)
  console.log(pattern.test(checkDateOfBirth))
  if(pattern.test(checkDateOfBirth)){
    dateOfBirth.style.backgroundColor = 'green'
    dateOfBirth.style.color = 'white'
    dateOfBirth.style.fontSize = '30px'
    dateOfBirth_p.innerText = "Input format is correct Ok";
  }else{
    dateOfBirth.style.backgroundColor = 'red'
    dateOfBirth.style.color = 'white'
    dateOfBirth.style.fontSize = '30px'
    dateOfBirth_p.innerText = "Input format is incorrect e.g(1/9/98 or 1/12/1984)";
  }

}
function validatedEmail(e){
    const emailRegex = /^[a-z0-9-_]{1,}@[a-z0-9]+\.[a-z]+$/;

    let pattern = new RegExp(emailRegex, "i")
    
    let checkNewEmail = e.target.value;
    // console.log(e.target.attributes.name.value)
    // console.log(pattern.test(checkNewEmail));
   
    if(pattern.test(checkNewEmail)){
        email.style.backgroundColor = 'green'
        email.style.color = 'white'
        email.style.fontSize = '30px'
        email_p.innerText = "Email inputted in the correct format OK";
    }else{
        email.style.backgroundColor = 'red'
        email.style.color = 'white'
        email.style.fontSize = '30px'
        email_p.innerText = "Email is inputted wrongly.Enter a Valid email e.g(xyz@example.com or asd_dkk@example.s) ";
        email_p.innerText.color = 'red';
    }
}
function validatedTelephone(e){
    // const telephoneRegex = /^\d{11}$/;
    const telephoneRegex = /^[0][7-9][0-1][0-9]{8}$/;
    let pattern = new RegExp(telephoneRegex, "i")
    let checkNewTelephone = e.target.value;
    if(pattern.test(checkNewTelephone)){
          console.log(checkNewTelephone, typeof(checkNewTelephone));
         let checkNewTelephoneSliced = checkNewTelephone.slice(1,11);
        let convertedNum = checkNewTelephone.replace(checkNewTelephone, `+234${checkNewTelephoneSliced}`)
        console.log(convertedNum)
        telephone.value = convertedNum;
        telephone.style.backgroundColor = "green";
        telephone.style.color = "white";
        telephone.style.fontSize = "30px";
        telephone_p.innerText = "Input Format is Correct"
    }else{
        telephone.style.backgroundColor = "red";
        telephone.style.color = "white";
        telephone.style.fontSize = "30px"; 
        telephone_p.innerText = "Input Format is incorrect"
    }
    console.log(e.target.attributes.name.value)
}


function validatePassword (e){
    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    //    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //    const passwordRegex = /^^(?=.*\d).{4,8}$/;
       let pattern = new RegExp (passwordRegex, 'i')
       let checkNewPassword = e.target.value;
       console.log(e.target.attributes.name.value)
       console.log(pattern.test(checkNewPassword))
       if(pattern.test(checkNewPassword)){
        password.style.backgroundColor = 'green';
        //   confirmPassword(e,checkNewPassword)
        password_2.addEventListener('blur', function(e){
                    console.log(e.target.value, checkNewPassword)
                    if(e.target.value === checkNewPassword){
                        console.log('awesome')
                        password_p_2.innerText = "Confirmed Password Match"
                    }else{
                        password_p_2.innerText = "Wrong Try Again Password Don't Match"
                    }
        });
       }else{
        password.style.backgroundColor = 'red'
       }
}


// function confirmPassword (e,checkPass){
       

    // console.log(e.target.value,checkPass)
    // console.log(e.target.value,"yes", checkPass)
        //  if(e.target.value === confirm_Password){
        //      console.log('sure guy')
        //  }
// }

// const telephone = /^\d{11}$/;
// const email =/[a-z0-9-_]{1,}@[a-z0-9]+\[a-z]+/ ;
// const dateOfBirth = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/;
// let searchString = txtSearch.value;
        // let patten = new RegExp(dateOfBirth, "i")
// const patterns = {
//     telephone : /^\d{11}$/,
//     firstName: /^[a-z]{5,12}$/i,
//     password:/^[a-zA-Z\d@-]{8,20}$/,
//     email: /^[a-z0-9-_]{1,}@[a-z0-9]+\.[a-z]+$/,
//     dateOfBirth:  /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/
// }
// function validate (field, regex){
//     if(regex.test(field.value)){
        
//         field.style.backgroundColor = 'green'
//         field.style.color = 'white'
//         field.style.fontSize = '30px'

//     }else{
//         field.style.backgroundColor = 'red'
//         field.style.color = 'white'
//         field.style.fontSize = '30px'
//     }
//       console.log(regex.test(field.value))
// }



// function validatedPassword(e){
//     console.log(e.target.attributes.name.value)
// }

// inputs.forEach((input)=>{
//     input.addEventListener('keyup', (e)=>{
//         validate(e.target, patterns[e.target.attributes.name.value])
//         // console.log(e.target.attributes.name.value)
//     })
// })

// let reg = /[a-z]/ig;

// let reg = new RegExp(/[a-z]/, "i");
// const telephone = /^\d{11}$/;
// const patterns = {
//     telephone : /^\d{11}$/,

// }
const form = document.getElementById('form');
const firstname = document.getElementById('Studentname');
const dob = document.getElementById('dob');
const Phoneno=document.getElementById('Phoneno');
const email = document.getElementById('email');
const course = document.getElementById('course');
const Passed = document.getElementById('Passed');
const Percentage = document.getElementById('Percentage');
const Percentage1 = document.getElementById('Percentage1');
const Passed2 = document.getElementById('Passed2');
const Aadhar=document.getElementById('Aadhar');
const age=document.getElementById('age');
const phone=document.getElementById('phone');
const school=document.getElementById('school');
const school1=document.getElementById('school1');
const Address=document.getElementById('Address');
const Address2=document.getElementById('Address2');
const city=document.getElementById('city');
const state=document.getElementById('state');


   form.addEventListener('submit', e =>{
    e.preventDefault();
      validateInputs();
      
   });

 const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

 const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const Studentnamevalue = firstname.value.trim();
    const emailValue = email.value.trim();
    const dobvalue = dob.value.trim();
    const agevalue=age.value.trim();
    const coursevalue = course.value.trim();
    const Passedvalue = Passed.value.trim();
    const Percentagevalue = Percentage.value.trim();
    const Percentagevalue1 = Percentage.value.trim();
    const Passedvalue2 = Passed2.value.trim();
    const Aadharvalue= Aadhar.value.trim();
    const phonevalue=phone.value.trim();
    const schoolvalue=school.value.trim();
    const schoolvalue1=school1.value.trim();
    const Addressvalue=school1.value.trim();
    const Addressvalue2=school1.value.trim();
    const cityvalue=city.value.trim();
    const statevalue=state.value.trim();

    if(Studentnamevalue === '') {
        setError(Studentname, 'Name is required');
    } else {
        setSuccess(Studentname);
    }

    if(dobvalue === '') {
        setError(dob, 'DOB is required');
    } 
    else {
        setSuccess(dob);
    }
    if(agevalue === ''){
        setError(age, 'Enter valid Aadharnumber');
        }
        else{
            setSuccess(age);
        }
    

    if(emailValue === '') {
        setError(email, 'Email is required');
    }
        else{
        setSuccess(email);
    }

    // if(coursevalue === '') {
    //     setError(course, 'course is required');
    // } 
    // else {
    //     setSuccess(course);
    // }

    if(Passedvalue === '') {
        setError(Passed, 'Mention Passout Year');
    } 
    else {
        setSuccess(Passed);
    }
    if(Percentagevalue===''){
        setError(Percentage, 'Percentage Scored');
    } 
    else {
        setSuccess(Percentage);
    }
    if(Percentagevalue1===''){
        setError(Percentage1, 'Percentage Scored');
    } 
    else {
        setSuccess(Percentage1);
    }
    if(Passedvalue2===''){
        setError(Passed2, 'Mention Passout Year');
    } 
    else {
        setSuccess(Passed2);
    }
    if(Aadharvalue ===''){
    setError(Aadhar, 'Enter valid Aadharnumber');
    }
    else if(Aadharvalue.length<12){
        setError(Aadhar, 'Enter valid Aadharnumber');
    } 
    else{
        setSuccess(Aadhar);
    }

    if(phonevalue === ''){
        setError(phone, 'Enter phone number');
        }
        else{
            setSuccess(phone);
        }
        if(schoolvalue===''){
            setError(school, 'Enter Your School Name');
        }
        else{
            setSuccess(school); 
        }
        if(schoolvalue1===''){
            setError(school1, 'Enter Your School Name');
        }
        else{
            setSuccess(school1); 
        }
        if(Addressvalue===''){
            setError(Address, 'Enter Your Address');
        }
        else{
            setSuccess(Address); 
        }
        if(Addressvalue2===''){
            setError(Address2, 'Enter Your Address');
        }
        else{
            setSuccess(Address2); 
        }
        if(cityvalue===''){
            setError(city, 'Enter city name');
        }
        else{
            setSuccess(city); 
        }
        if(statevalue===''){
            setError(state, 'Enter city name');
        }
        else{
            setSuccess(state); 
        }
    
};

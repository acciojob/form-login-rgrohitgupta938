function getFormvalue() {
    //Write your code here
	const fName = document.getElementsByName("fname")[0].value;
    const lName = document.getElementsByName("lname")[0].value;
	alert(`${fName} ${lName}`);
}

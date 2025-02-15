let recaptcha = false;

function beforeSubmit(event) {

    if(recaptcha){
        let outputDate = document.querySelector('.outputDate');
        let inputDate = document.querySelector('.inputDate');
    
        if (inputDate.value) {
            // let formattedDate = new Date(inputDate.value).toISOString().split('T')[0]; // YYYY-MM-DD format
            // outputDate.value = formattedDate;
            // console.log("Formatted Lead Date:", outputDate.value);
            // return true; // Allow form submission
            let dateObj = new Date(inputDate.value);
            let day = String(dateObj.getDate()).padStart(2, '0'); // Ensure two-digit day
            let year = dateObj.getFullYear();
    
            let formattedDate = `${day}/${month}/${year}`; // Format: dd/mm/yyyy
            outputDate.value = formattedDate;
            console.log("Formatted Lead Date: ", outputDate.value);
            
        } else {
            console.error("No Lead Date selected");
            alert("Please select a Lead Date before submitting.");           
        }
    }
    else{
        alert('Please select the Recaptcha box to submit the form');
        event.preventDefault();
    }

}


function timestamp() {
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value); 
        elems["ts"] = JSON.stringify(new Date().getTime()); 
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    }
} 
setInterval(timestamp, 500); 


function captchaSuccess(){
    recaptcha = true;
}
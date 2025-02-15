function beforeSubmit(){
    let outputdate = document.querySelector('.outputDate');
    let inputDate = document.querySelector('.inputDate');
    console.log('input Date: ', inputDate.value);

    let formatedDate = new Data(inputDate.value).toLocaleDateString("en-IN");

    outputdate.value = formatedDate;
}
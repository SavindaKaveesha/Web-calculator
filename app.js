function press(num){
    document.form.textView.value = document.form.textView.value +num;
}

function clean(num){
    document.form.textView.value=num;
}

function equal(){
    var exp = document.form.textView.value;

    if(exp){
        document.form.textView.value = eval(exp);
    }
    else{
        document.form.textView.value="";
    }
}
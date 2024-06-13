

let outputScreen= document.getElementById("input-value");

function display(num)
{
    outputScreen.value=outputScreen.value+num;
}

function equal()
{
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid Calculations")
    }
}

function cl()
{
    outputScreen.value="";
}

function del()
{
    outputScreen.value=outputScreen.value.slice(0,-1);
}
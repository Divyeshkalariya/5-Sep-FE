var myvar;
function MyLoader()
{
    myvar=setTimeout("mywebsite()",2000);
}
function mywebsite()
{
    document.getElementById("loader").style="display:none;"
    document.getElementById("webpage").style="display:block;"
}
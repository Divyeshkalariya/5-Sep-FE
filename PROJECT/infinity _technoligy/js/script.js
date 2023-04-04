// for loder
var myvar;
function loaderrun()
{
    myvar=setTimeout("mywebsite()",2350);
}
function mywebsite()
{
    document.getElementById("loader").style="display:none;"
    document.getElementById("webpage").style="display:block;"
}

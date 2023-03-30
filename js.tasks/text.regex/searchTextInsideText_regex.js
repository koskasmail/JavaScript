/* ----[search Text Inside Text using regex]------------*/

var text = 'Hello.pdf';
///text = 'Hello.signed';

if (
    (
        (((text && /.pdf1/.test(text.toLowerCase())))
            || ((text && /.pdf1/.test(text.toLowerCase()))))
        ||
        (((text && /.signed/.test(text.toLowerCase())))
            || ((text && /.signed/.test(text.toLowerCase()))))
    )
) 
{
    console.log("true");
}
else {
    console.log("false");
}
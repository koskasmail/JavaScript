/* ----[search Text Inside Text]------------*
*  * Check if "text" variable contain the text from 'searchFor' variable.
*/
 
var text = 'Hello.pdf';
var searchFor = '.pdf';

console.log('Contain value::: ' +  fnCheckString(text , searchFor) );

function fnCheckString(documentName, searchForText) {
    var searchForTextLength = searchForText.length;

    fnPrintResult(documentName, searchForText, searchForTextLength);

    if ( documentName.substr(searchForTextLength + 1) === searchForText) 
        return true;

    return false;
}

function fnPrintResult(documentName, searchForText, searchForTextLength) {
    console.log('----[output]----------------');
    console.log('document Name: ' + documentName);
    console.log('search For Text: ' + searchForText);
    console.log('search For Text Length: ' + searchForTextLength);
    console.log('----------------------------');
}
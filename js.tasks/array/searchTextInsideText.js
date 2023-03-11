
var text = 'Hello.pdf';
var searchFor = '.pdf';

function fnPrintResult(documentName, extension, extensionLength) {
    console.log('----[output]----------------');
    console.log('documentName: ' + documentName);
    console.log('extension: ' + extension);
    console.log('extensionLength: ' + extensionLength);
    console.log('----------------------------');
}

function fnCheckString(documentName, extension) {

    var extensionLength = extension.length;

    fnPrintResult(documentName, extension, extensionLength);

    if ( documentName.substr(extensionLength + 1) === extension) 
        return true;

    return false;
}

console.log('Contain value::: ' +  fnCheckString(text , searchFor) );
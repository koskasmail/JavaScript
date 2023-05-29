
/**
 * 
 */
function convertToBase64() {
  var input = document.getElementById('image-input');
  var file = input.files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    var base64String = reader.result;
    document.getElementById('output').innerText = base64String;
    console.error(base64String);
  };

  reader.readAsDataURL(file);
}

/**
 * 
 */
function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("output");
  var status = document.getElementById("status");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  status.innerText = "copied to clipBoard !";

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied to clipboard: " + copyText.value);
}

/**
 * 
 */
function showBase64Image() {

}


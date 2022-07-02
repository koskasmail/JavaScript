
if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(({usage, quota}) => {
      console.log(`Using ${usage} out of ${quota} bytes.`);
    });
  }

var storageManagerOb = navigator.storage;
  navigator.storage.estimate().then(function(estimate) {
    console.table("\nTotal Storage Available: " + estimate.quota);
    console.log("Storage Used: " + estimate.usage);
});

const rec1 = {name: 'hostname', cmd: location.hostname, 'comment':""};
const rec2 = {name: 'language', cmd: navigator.language, 'comment':""};
const rec3 = {name: 'languages', cmd: navigator.languages, 'comment':""};
const rec4 = {name: 'Browser CodeName', cmd: navigator.appCodeName, 'comment':""};
const rec5 = {name: 'Browser Name', cmd: navigator.appName, 'comment':""};
const rec6 = {name: 'Browser Version', cmd: navigator.appVersion, 'comment':""};
const rec7 = {name: 'Cookies Enabled', cmd: navigator.cookieEnabled, 'comment':""};
const rec8 = {name: 'Browser Language', cmd: navigator.language, 'comment':""};
const rec9 = {name: 'Browser Online', cmd: navigator.onLine, 'comment':""};
const rec10 = {name: 'Platform', cmd: navigator.platform, 'comment':""};
const rec11 = {name: 'User-agent header', cmd: navigator.userAgent, 'comment':""};





  console.log("---[local information]------------");

//   console.log();
  console.log("\n\n");
  console.log("---[local information]------------");
  console.log(navigator.storage);

  console.log("\n\n");
  console.log("---[other]------------");

  console.table([rec1, rec2,rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10, rec11]);


  
  


function onOffSwitch(value, tk) {

  let currentVal1 = 0;

  switch (value) {
    case 0:
      console.time(tk);
      break;
    case 1:
      console.timeEnd(tk);
      break;
    default:
      console.error('function onOffSwitch(value) receive values: 0=off 1=on');
      break;
  }
}


console.info("Sp Start");
onOffSwitch(0, "sub-001");
for (var i = 0; i < 10000; i++) {
  if (i % 222 == 0)
    console.log(i);
}
onOffSwitch(1, "sub-001");


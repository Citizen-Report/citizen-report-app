const dummy = (data) => {
  //here we'll build up an appropriate string to insert into our table based on basic data entry
  let output = 'INSERT INTO reports VALUES (DEFAULT';
  for (let word of data) output += ', \'' + word + '\'';
  // this is to remove the excess information from each Date()
  output = output.replace(/ GMT-0800 \(Pacific Standard Time\)\'/, '\')\;');
  return console.log(output);
}
//we could set up alldata as an array and not worry about an identifying number, I chose this way to mimic the id in our table
const alldata = {};

// newdata = ['address', 'problem', 'category', 'ip', 'status']
// alldata[num] = newdata;
const address = () => {
  // I thought about ways to generate truly random addresses, but then I decided to just put manually create some
  const addresses = [
    '1750 Charles Ave., Arcata, Ca, 95521',
    '1751 Charles Ave., Arcata, Ca, 95521',
    '1752 Charles Ave., Arcata, Ca, 95521',
    '1753 Charles Ave., Arcata, Ca, 95521',
    '1754 Charles Ave., Arcata, Ca, 95521',
    '6626 Langdon Ave., North Hollywood, CA, 91606',
    '6627 Langdon Ave., North Hollywood, CA, 91606',
    '6628 Langdon Ave., North Hollywood, CA, 91606',
    '6629 Langdon Ave., North Hollywood, CA, 91606',
    '6630 Langdon Ave., North Hollywood, CA, 91606',
    '1101 Abbot Kinney Blvd, Venice, CA, 90291',
    '1102 Abbot Kinney Blvd, Venice, CA, 90291',
    '1103 Abbot Kinney Blvd, Venice, CA, 90291',
    '1104 Abbot Kinney Blvd, Venice, CA, 90291',
    '1105 Abbot Kinney Blvd, Venice, CA, 90291',
    '845 Trenton Blvd, San Pablo, CA, 94806',
    '846 Trenton Blvd, San Pablo, CA, 94806',
    '847 Trenton Blvd, San Pablo, CA, 94806',
    '848 Trenton Blvd, San Pablo, CA, 94806',
    '849 Trenton Blvd, San Pablo, CA, 94806',
    '8410 Lampson Ave., Garden Grove, CA, 92840',
    '8412 Lampson Ave., Garden Grove, CA, 92840',
    '8414 Lampson Ave., Garden Grove, CA, 92840',
    '8416 Lampson Ave., Garden Grove, CA, 92840',
    '8418 Lampson Ave., Garden Grove, CA, 92840',
    '9351 Clark St., Ontario, CA, 91761',
    '9353 Clark St., Ontario, CA, 91761',
    '9355 Clark St., Ontario, CA, 91761',
    '9357 Clark St., Ontario, CA, 91761',
    '9359 Clark St., Ontario, CA, 91761',
    '190 Green Ave., Anaheim, CA, 92804',
    '192 Green Ave., Anaheim, CA, 92804',
    '194 Green Ave., Anaheim, CA, 92804',
    '196 Green Ave., Anaheim, CA, 92804',
    '198 Green Ave., Anaheim, CA, 92804',
    '3500 Wilshire Blvd, Los Angeles, CA 90010',
    '3502 Wilshire Blvd, Los Angeles, CA 90010',
    '3504 Wilshire Blvd, Los Angeles, CA 90010',
    '3506 Wilshire Blvd, Los Angeles, CA 90010',
    '3508 Wilshire Blvd, Los Angeles, CA 90010',
    '1331 South Hope Street, Los Angeles, CA, 90015',
    '1333 South Hope Street, Los Angeles, CA, 90015',
    '1335 South Hope Street, Los Angeles, CA, 90015',
    '1337 South Hope Street, Los Angeles, CA, 90015',
    '1339 South Hope Street, Los Angeles, CA, 90015',
    '2056 Gateway Ave., Los Angeles, CA, 90017',
    '2057 Gateway Ave., Los Angeles, CA, 90017',
    '2058 Gateway Ave., Los Angeles, CA, 90017',
    '2059 Gateway Ave., Los Angeles, CA, 90017',
    '2060 Gateway Ave., Los Angeles, CA, 90017',
    '1115 Sumner St., Los Angeles, CA, 90041',
    '1116 Sumner St., Los Angeles, CA, 90041',
    '1117 Sumner St., Los Angeles, CA, 90041',
    '1118 Sumner St., Los Angeles, CA, 90041',
    '1119 Sumner St., Los Angeles, CA, 90041',
    '1490 Maple St., Los Angeles, CA, 90015',
    '1492 Maple St., Los Angeles, CA, 90015',
    '1494 Maple St., Los Angeles, CA, 90015',
    '1496 Maple St., Los Angeles, CA, 90015',
    '1498 Maple St., Los Angeles, CA, 90015',
    '830 North Western Avenue, Los Angeles, CA, 90029',
    '831 North Western Avenue, Los Angeles, CA, 90029',
    '832 North Western Avenue, Los Angeles, CA, 90029',
    '833 North Western Avenue, Los Angeles, CA, 90029',
    '834 North Western Avenue, Los Angeles, CA, 90029',
    '7010 Hollywood Blvd, Los Angeles, CA, 90028',
    '7012 Hollywood Blvd, Los Angeles, CA, 90028',
    '7014 Hollywood Blvd, Los Angeles, CA, 90028',
    '7016 Hollywood Blvd, Los Angeles, CA, 90028',
    '7018 Hollywood Blvd, Los Angeles, CA, 90028',
    '7010 Sunset Blvd, Hollywod, CA, 90028',
    '7012 Sunset Blvd, Hollywod, CA, 90028',
    '7014 Sunset Blvd, Hollywod, CA, 90028',
    '7016 Sunset Blvd, Hollywod, CA, 90028',
    '7018 Sunset Blvd, Hollywod, CA, 90028',
    '5231 Summer Ave, Los Angeles, CA, 90041',
    '5233 Summer Ave, Los Angeles, CA, 90041',
    '5235 Summer Ave, Los Angeles, CA, 90041',
    '5237 Summer Ave, Los Angeles, CA, 90041',
    '5239 Summer Ave, Los Angeles, CA, 90041',
    '6500 Sunset Blvd, Los Angeles, CA, 90028',
    '6502 Sunset Blvd, Los Angeles, CA, 90028',
    '6504 Sunset Blvd, Los Angeles, CA, 90028',
    '6506 Sunset Blvd, Los Angeles, CA, 90028',
    '6508 Sunset Blvd, Los Angeles, CA, 90028',
    '1545 N Fairfax Ave, Los Angeles, CA, 90046',
    '1546 N Fairfax Ave, Los Angeles, CA, 90046',
    '1547 N Fairfax Ave, Los Angeles, CA, 90046',
    '1548 N Fairfax Ave, Los Angeles, CA, 90046',
    '1549 N Fairfax Ave, Los Angeles, CA, 90046',
    '355 S Rossmore Ave, Los Angeles, CA, 90020',
    '356 S Rossmore Ave, Los Angeles, CA, 90020',
    '357 S Rossmore Ave, Los Angeles, CA, 90020',
    '358 S Rossmore Ave, Los Angeles, CA, 90020',
    '359 S Rossmore Ave, Los Angeles, CA, 90020',
    '1200 South Broadway St., Los Angeles, CA, 90015',
    '1200 South Broadway St., Los Angeles, CA, 90015',
    '1200 South Broadway St., Los Angeles, CA, 90015',
    '1200 South Broadway St., Los Angeles, CA, 90015',
    '1200 South Broadway St., Los Angeles, CA, 90015',
  ];
  //return a random address
  return addresses[Math.floor(Math.random()*addresses.length)];
}
const category = () => {
  //for easier dummy generation, I've placed the problems in the category
  const catoptions = ['Roads', 'Waste Management', 'Water & Power', 'Animal Control', 'Other'];
  let cat = catoptions[Math.floor(Math.random()*5)] + '\', \'';
  const problem = () => {
    const roadoptions = ['small pothole', 'medium pothole', 'large pothole', 'cracked sidewalk', 'flooded'];
    const wasteoptions = ['fallen tree', 'unattended furniture', 'destroyed dumpster', 'fecal matter'];
    const waterandpower = ['fire hydrant active', 'downed powerlines', 'no water', 'power outage', 'no hot water'];
    const animalcontrol = ['dead animal, small', 'dead animal, large', 'wild animal, small', 'wild animal, large', 'lost pet'];
    const other = ['miscellaneous'];
    if (cat === 'Roads\', \'') cat += roadoptions[Math.floor(Math.random()*5)];
    else if (cat === 'Waste Management\', \'') cat += wasteoptions[Math.floor(Math.random()*4)];
    else if (cat === 'Water & Power\', \'') cat += waterandpower[Math.floor(Math.random()*5)];
    else if (cat === 'Animal Control\', \'') cat += animalcontrol[Math.floor(Math.random()*5)];
    else if (cat === 'Other\', \'') cat += other[0];
  }
  problem();
  return cat;
}
const ip = () => {
  let ipstring = '';
  ipstring += (Math.round(Math.random()*155) + 100) +'.'+ Math.floor(Math.random()*10) +'.'+ Math.floor(Math.random()*10) +'.'+ Math.floor(Math.random()*10);
  return ipstring;
}
const status = () => {
  const statusoptions = ['Not checked', 'In progress', 'Resolved'];
  return statusoptions[Math.floor(Math.random()*3)];
}

let num = 1;
const createnewdata = () => {
  let newdata = [address(), category(), ip(), status(), Date()];
  alldata[num] = newdata;
  num += 1;
}
  // choose how many 
let delay = 1000;
setInterval(createnewdata, delay);
// choose your total number of data points
let datatotal = 1000;
if (num > datatotal) clearInterval(createnewdata);

const returnall = () => {
  for (const complaint in alldata) dummy(alldata[complaint]);
};
setTimeout(returnall, delay * datatotal);
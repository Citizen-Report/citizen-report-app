//dummy report example:
// INSERT INTO reports VALUES (DEFAULT, '2059 Gateway Ave., Los Angeles, CA', '90017', '34.09300, -118.28178', 'Roads', 'flooded', '003', 'Not checked', 'Sat Dec 26 2020 18:24:42');

// dummy data is generated for the following tables:

// CREATE TABLE reports (
//   id int SERIAL NOT NULL PRIMARY KEY,
//   location varchar,           // <-- Address, format: 123 street, city, state
//   zipcode int NOT NULL,       // <-- Use as city id, 5 digit zipcode normally
//   lat_lon varchar NOT NULL,   // <-- String, separated by a comma and space
//   category varchar NOT NULL,
//   description varchar,
//   user_ip int NOT NULL,       // <-- Use as citizen id, (carry-over from old table data)
//   status varchar NOT NULL,
//   created_on varchar NOT NULL // <-- Timestamp accepts date and time, and creates this format: 12-27-20...
// );

// CREATE TABLE cities (                // <-- currently do not have this table
//   zipcode int NOT NULL PRIMARY KEY,
//   cityname varchar,
//   email varchar NOT NULL UNIQUE
// );

// CREATE TABLE citizens (
//   citizen_id int SERIAL NOT NULL PRIMARY KEY,
//   ip_address varchar NOT NULL,
//   email varchar NOT NULL UNIQUE
// );

// This function will be called at the end, each execution will generate a line in the console to be copied for direct injection into our DB
const dummyreports = (data) => {
  //here we'll build up an appropriate string to insert into our table based on basic data entry
  let output = 'INSERT INTO reports VALUES (DEFAULT';
  for (let word of data) output += ', \'' + word + '\'';
  // this is to remove the excess information from each called Date()
  output = output.replace(/ GMT-0800 \(Pacific Standard Time\)\'/, '\')\;');
  return console.log(output);
}

// dummy report data will be built up later, using the functions below
const address = () => {
  // These are the full locations of dummy complaint locations, to be split into address, zip, and lat long
  const addresses = [
    "6626 Langdon Ave., Van Nuys, CA', '91406', '34.19185, -118.46881",
    "6627 Langdon Ave., Van Nuys, CA', '91406', '34.19220, -118.46971",
    "6628 Langdon Ave., Van Nuys, CA', '91406', '34.19170, -118.46860",
    "6629 Langdon Ave., Van Nuys, CA', '91406', '34.19204, -118.46984",
    "6630 Langdon Ave., Van Nuys, CA', '91406', '34.19172, -118.46855",
    "1101 Abbot Kinney Blvd, Venice, CA', '90291', '33.99269, -118.47039",
    "1102 Abbot Kinney Blvd, Venice, CA', '90291', '33.99200, -118.47063",
    "1103 Abbot Kinney Blvd, Venice, CA', '90291', '33.99263, -118.47023",
    "1104 Abbot Kinney Blvd, Venice, CA', '90291', '33.99259, -118.47065",
    "1105 Abbot Kinney Blvd, Venice, CA', '90291', '33.99299, -118.47034",
    "845 Trenton Blvd, San Pablo, CA', '94806', '37.97111, -122.35516",
    "846 Trenton Blvd, San Pablo, CA', '94806', '37.97121, -122.35544",
    "847 Trenton Blvd, San Pablo, CA', '94806', '37.97108, -122.35537",
    "848 Trenton Blvd, San Pablo, CA', '94806', '37.97108, -122.35544",
    "849 Trenton Blvd, San Pablo, CA', '94806', '37.97091, -122.35533",
    "8410 Lampson Ave., Garden Grove, CA', '92840', '33.78158, -117.98495",
    "8412 Lampson Ave., Garden Grove, CA', '92840', '33.78184, -117.98532",
    "8414 Lampson Ave., Garden Grove, CA', '92840', '33.78154, -117.98492",
    "8416 Lampson Ave., Garden Grove, CA', '92840', '33.78161, -117.98508",
    "8418 Lampson Ave., Garden Grove, CA', '92840', '33.78165, -117.98528",
    "190 Green Ave., Anaheim, CA', '92804', '33.80286, -118.05987",
    "192 Green Ave., Anaheim, CA', '92804', '33.80196, -118.05974",
    "194 Green Ave., Anaheim, CA', '92804', '33.80257, -118.05974",
    "196 Green Ave., Anaheim, CA', '92804', '33.80264, -118.05982",
    "198 Green Ave., Anaheim, CA', '92804', '33.80296, -118.05969",
    "3500 Wilshire Blvd, Los Angeles, CA', '90010', '34.06197, -118.30050",
    "3502 Wilshire Blvd, Los Angeles, CA', '90010', '34.06209, -118.30070",
    "3504 Wilshire Blvd, Los Angeles, CA', '90010', '34.06201, -118.30069",
    "3506 Wilshire Blvd, Los Angeles, CA', '90010', '34.06209, -118.30055",
    "3508 Wilshire Blvd, Los Angeles, CA', '90010', '34.06230, -118.30075",
    "1331 South Hope St., Los Angeles, CA', '90015', '34.03926, -118.26624",
    "1333 South Hope St., Los Angeles, CA', '90015', '34.03961, -118.26657",
    "1335 South Hope St., Los Angeles, CA', '90015', '34.03933, -118.26674",
    "1337 South Hope St., Los Angeles, CA', '90015', '34.03968, -118.26664",
    "1339 South Hope St., Los Angeles, CA', '90015', '34.03914, -118.26615",
    "2056 Gateway Ave., Los Angeles, CA', '90017', '34.09293, -118.28182",
    "2057 Gateway Ave., Los Angeles, CA', '90017', '34.09314, -118.28160",
    "2058 Gateway Ave., Los Angeles, CA', '90017', '34.09342, -118.28160",
    "2059 Gateway Ave., Los Angeles, CA', '90017', '34.09300, -118.28178",
    "2060 Gateway Ave., Los Angeles, CA', '90017', '34.09293, -118.28169",
    "1114 Sumner Ave., Los Angeles, CA', '90041', '34.14460, -118.22437",
    "1115 Sumner Ave., Los Angeles, CA', '90041', '34.14478, -118.22428",
    "1116 Sumner Ave., Los Angeles, CA', '90041', '34.14453, -118.22458",
    "1117 Sumner Ave., Los Angeles, CA', '90041', '34.14457, -118.22433",
    "1118 Sumner Ave., Los Angeles, CA', '90041', '34.14467, -118.22398",
    "1490 Maple St., Los Angeles, CA', '90015', '34.03333, -118.25868",
    "1492 Maple St., Los Angeles, CA', '90015', '34.03311, -118.25873",
    "1493 Maple St., Los Angeles, CA', '90015', '34.03326, -118.25883",
    "1496 Maple St., Los Angeles, CA', '90015', '34.03328, -118.25906",
    "1498 Maple St., Los Angeles, CA', '90015', '34.03338, -118.25885",
    "830 North Western Avenue, Los Angeles, CA', '90029', '34.08648, -118.30916",
    "831 North Western Avenue, Los Angeles, CA', '90029', '34.08617, -118.30938",
    "832 North Western Avenue, Los Angeles, CA', '90029', '34.08606, -118.30928",
    "833 North Western Avenue, Los Angeles, CA', '90029', '34.08617, -118.30941",
    "834 North Western Avenue, Los Angeles, CA', '90029', '34.08657, -118.30882",
    "7010 Hollywood Blvd, Los Angeles, CA', '90028', '34.10218, -118.34189",
    "7012 Hollywood Blvd, Los Angeles, CA', '90028', '34.10236, -118.34212",
    "7014 Hollywood Blvd, Los Angeles, CA', '90028', '34.10240, -118.34196",
    "7016 Hollywood Blvd, Los Angeles, CA', '90028', '34.10199, -118.34203",
    "7018 Hollywood Blvd, Los Angeles, CA', '90028', '34.10239, -118.34235",
    "7010 Sunset Blvd, Hollywod, CA', '90028', '34.09827, -118.34162",
    "7012 Sunset Blvd, Hollywod, CA', '90028', '34.09809, -118.34187",
    "7014 Sunset Blvd, Hollywod, CA', '90028', '34.09854, -118.34183",
    "7016 Sunset Blvd, Hollywod, CA', '90028', '34.09835, -118.34215",
    "7018 Sunset Blvd, Hollywod, CA', '90028', '34.09824, -118.34177",
    "5231 Summer Ave, Los Angeles, CA', '90041', '34.14408, -118.22453",
    "5233 Summer Ave, Los Angeles, CA', '90041', '34.14472, -118.22442",
    "5235 Summer Ave, Los Angeles, CA', '90041', '34.14491, -118.22444",
    "5237 Summer Ave, Los Angeles, CA', '90041', '34.14523, -118.22426",
    "5239 Summer Ave, Los Angeles, CA', '90041', '34.14475, -118.22418",
    "6500 Sunset Blvd, Los Angeles, CA', '90028', '34.09877, -118.33183",
    "6502 Sunset Blvd, Los Angeles, CA', '90028', '34.09881, -118.33198",
    "6504 Sunset Blvd, Los Angeles, CA', '90028', '34.09803, -118.33193",
    "6506 Sunset Blvd, Los Angeles, CA', '90028', '34.09799, -118.33194",
    "6508 Sunset Blvd, Los Angeles, CA', '90028', '34.09806, -118.33205",
    "1545 N Fairfax Ave, Los Angeles, CA', '90046', '34.09950, -118.36133",
    "1546 N Fairfax Ave, Los Angeles, CA', '90046', '34.09950, -118.36133",
    "1547 N Fairfax Ave, Los Angeles, CA', '90046', '34.09955, -118.36185",
    "1548 N Fairfax Ave, Los Angeles, CA', '90046', '34.09960, -118.36126",
    "1549 N Fairfax Ave, Los Angeles, CA', '90046', '34.09966, -118.36190",
    "355 S Rossmore Ave, Los Angeles, CA', '90020', '34.06756, -118.32771",
    "356 S Rossmore Ave, Los Angeles, CA', '90020', '34.06756, -118.32689",
    "357 S Rossmore Ave, Los Angeles, CA', '90020', '34.06760, -118.32764",
    "358 S Rossmore Ave, Los Angeles, CA', '90020', '34.06754, -118.32682",
    "359 S Rossmore Ave, Los Angeles, CA', '90020', '34.06750, -118.32772",
    "1200 South Broadway St., Los Angeles, CA', '90015', '34.03794, -118.26000",
    "1202 South Broadway St., Los Angeles, CA', '90015', '34.03803, -118.26030",
    "1204 South Broadway St., Los Angeles, CA', '90015', '34.03787, -118.26025",
    "1206 South Broadway St., Los Angeles, CA', '90015', '34.03790, -118.26036",
    "1208 South Broadway St., Los Angeles, CA', '90015', '34.03789, -118.26042",
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

// These are the citizens in our current database,
// This list must be populated before creating report/complaint data
const citizens = [
  "'001', '238.2.8.6'",   "'002', '105.5.5.7'",  "'003', '174.3.8.0'",
  "'004', '247.4.4.6'",   "'005', '232.2.5.1'",  "'006', '219.4.6.6'",
  "'007', '212.8.1.4'",   "'008', '236.2.3.7'",  "'009', '236.5.5.8'",
  "'010', '141.8.2.2'",  "'011', '182.0.1.7'", "'012', '228.3.0.5'",
  "'013', '103.8.7.9'",  "'014', '199.8.6.2'", "'015', '193.7.8.0'",
  "'016', '129.9.7.4'",  "'017', '138.6.1.4'", "'018', '152.4.7.5'",
  "'019', '236.8.2.4'",  "'020', '116.5.3.9'", "'021', '232.4.1.7'",
  "'022', '194.3.0.7'",  "'023', '178.2.4.0'", "'024', '168.5.5.6'",
  "'025', '113.4.6.7'",  "'026', '172.4.1.9'", "'027', '132.3.1.5'",
  "'028', '219.8.7.5'",  "'029', '142.6.0.2'", "'030', '246.2.7.8'",
  "'031', '121.1.5.0'",  "'032', '232.8.2.2'", "'033', '192.0.7.1'",
  "'034', '149.8.1.0'",  "'035', '228.6.8.8'", "'036', '193.3.5.1'",
  "'037', '233.6.6.0'",  "'038', '125.7.5.6'", "'039', '209.3.3.2'",
  "'040', '158.8.3.2'",  "'041', '122.1.9.4'", "'042', '131.9.3.0'",
  "'043', '173.4.9.8'",  "'044', '197.9.0.2'", "'045', '171.6.7.0'",
  "'046', '175.0.8.0'",  "'047', '251.8.2.4'", "'048', '168.4.0.8'",
  "'049', '218.6.3.1'",  "'050', '250.9.7.5'", "'051', '137.1.9.4'",
  "'052', '126.8.5.5'",  "'053', '109.8.9.5'", "'054', '228.3.4.7'",
  "'055', '116.7.2.0'",  "'056', '150.3.4.7'", "'057', '184.7.8.9'",
  "'058', '160.2.0.7'",  "'059', '106.3.4.9'", "'060', '153.5.9.6'",
  "'061', '151.2.3.0'",  "'062', '173.5.4.0'", "'063', '210.6.9.0'",
  "'064', '189.4.4.4'",  "'065', '121.8.8.0'", "'066', '247.4.7.1'",
  "'067', '105.8.0.1'",  "'068', '114.6.9.6'", "'069', '248.7.6.3'",
  "'070', '207.5.1.8'",  "'071', '222.5.7.8'", "'072', '219.3.9.1'",
  "'073', '102.5.8.1'",  "'074', '154.4.9.2'", "'075', '240.1.9.8'",
  "'076', '107.8.7.0'",  "'077', '101.0.0.6'", "'078', '162.9.7.1'",
  "'079', '221.7.0.1'",  "'080', '159.9.9.0'", "'081', '166.5.5.4'",
  "'082', '235.0.6.6'",  "'083', '136.6.0.9'", "'084', '219.0.8.8'",
  "'085', '248.5.1.6'",  "'086', '110.9.1.8'", "'087', '168.1.9.9'",
  "'088', '209.0.7.0'",  "'089', '154.2.2.4'", "'090', '171.2.6.2'",
  "'091', '204.2.6.5'",  "'092', '203.7.0.8'", "'093', '116.4.4.2'",
  "'094', '194.2.8.5'",  "'095', '224.0.3.8'", "'096', '200.9.3.0'",
  "'097', '223.1.3.0'",  "'098', '151.6.4.0'", "'099', '145.9.9.1'",
  "'100', '116.0.3.2'"
];
// //Generate a console output of all citizens to insert into citizens TABLE
// const dummycitizens = (data) => {
  //   let output = 'INSERT INTO citizens VALUES (DEFAULT';
  //   let email = 'citizen';
  //   email += data.slice(1, 4) + '@gmail.com';
  //   output += `, ${data.slice(7)}, '${email}');`
  //   return console.log(output);
  // }
  // //Send one citizen at a time to the console generator:
  // for (let user of citizens) dummycitizens(user);
  
  // //Create an ip address that will have 4 numbers, range like so: 100-255.1-255.1-255.1-255
  // const ip = () => {
    //   let ipstring = '';
    //   ipstring += (Math.round(Math.random()*155) + 100) +'.'+ Math.floor(Math.random()*256) +'.'+ Math.floor(Math.random()*256) +'.'+ Math.floor(Math.random()*256);
    //   return ipstring;
    // }
    // //Adjust the start and end for "i" to create citizens with new ids and randomly generated IP addresses
    // for (let i = 1; i <= 100; i++) citizens.push(`'0${i}', '${ip()}'`);
    // //Log the citizens, copy them from console, then paste into this file (citizens array) to save/hardcode them 
    // console.log(citizens);

const citizen_id = () => {
      //call a random citizen from the list
      //generate your citizen list before table generation because you'll want to keep track of your fake users in their own table
      //return just the id
      return citizens[Math.floor(Math.random()*citizens.length)].slice(1,4);
};
const status = () => {
  const statusoptions = ['Not checked', 'In progress', 'Resolved'];
  return statusoptions[Math.floor(Math.random()*3)];
};

// build up all data, then send that data to the dummyreport function at top
const alldata = {};
// num is just a counter for how many data points we've created
let num = 1;
const createnewdata = () => {
  let newdata = [address(), category(), citizen_id(), status(), Date()];
  alldata[num] = newdata;
  num += 1;
}

// setInterval and setTimeout are used to space out the auto-creation of each report, so that
// the Date() function will automatically create dates as spread out as you want to wait for
// a delay of 1000 and datatotal of 1000 will take about 17 minutes.
// a delay of less than 1000 will generate some Dates at the same second, but if that's not a problem,
// drop the delay as much as you'd like
let delay = 1000;
setInterval(createnewdata, delay);
// datatotal should be the number of reports you want to generate
let datatotal = 10;
if (num > datatotal) clearInterval(createnewdata);

//make sure to return the fully generated list only after the appropriate delay
setTimeout(() => {for (const complaint in alldata) dummyreports(alldata[complaint]);}, delay * datatotal * 1.01);
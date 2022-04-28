const os = require('os');

var osArch = os.arch();
console.log(osArch);

var osFreeMem = os.freemem();
console.log(osFreeMem);

var osUserInfo = os.userInfo();
console.log(osUserInfo);

var osTotalMem = os.totalmem();
console.log(osTotalMem);

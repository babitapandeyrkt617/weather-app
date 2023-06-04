
//os module
const os = require('os');

//kon se archetecure me kam kr re 32 ya 64
console.log(os.arch());

//ram kitni use krte h
const freeMomry = os.freemem();
console.log(`${freeMomry/1024/1024/1024}`);//bytes to gb conversion

//total memory
const total = os.totalmem();
console.log(`${total/1024/1024/1024}`);

//agr host ka name dekhna h
console.log(os.hostname());

//kis plateform pe work kr re
console.log(os.platform());

//kon sa os use kr re
console.log(os.type());


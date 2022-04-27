const os = require('os')

// info about current user
const user = os.userInfo();

//method returns the system uptime in seconds

console.log(user)
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    total: os.totalmem(),
    free: os.freemem()
}
console.log(currentOS)
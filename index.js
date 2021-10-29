const request = require('request')
const datauri = require('datauri')
const dotenv = require('dotenv')


dotenv.config();


let lastHour


const hourToPicture = {
    '0': 1,
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '9': 1,
    '10': 1,
    '11': 1,
    '12': 1,
    '13': 1,
    '14': 1,
    '15': 1,
    '16': 1,
    '17': 1,
    '18': 1,
    '19': 1,
    '20': 1,
    '21': 1,
    '22': 1,
    '23': 1
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


setInterval(async () => {
    let x = new Date().getUTCHours()
    let currentHour = x - 3 < 0 ? 24 - x - 3 : x - 3
    if (lastHour === currentHour) return
    console.log(`Time: ${currentHour}`)
    // let randomint = getRandomInt(7)
    lastHour = currentHour
    if (hourToPicture[currentHour]) {
      console.log('Setting photo')
      let finalnumber = hourToPicture[currentHour] // + randomint
      console.log(finalnumber)
      const image = await datauri(`./photos/${finalnumber}.gif`)
      request.patch('https://discordapp.com/api/v6/users/@me',
                    {headers: {'authorization': `${process.env.token}`,
                              'content-type': 'application/json'},
                     body: JSON.stringify({'username': `${process.env.username}`,
                                           'email': `${process.env.email}`,
                                           'password': `${process.env.password}`,
                                           'avatar': image,
                                           'discriminator': `${process.env.number}`,
                                           'new_password': null})})}}, 1000)
                          
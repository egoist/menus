'use strict'
const Menus = require('../')

const menus = new Menus()

menus.setMenu([
  {
    label: 'Account',
    submenu: [
      {
        label: '0x142857@gmail.com',
        enabled: false
      },
      {
        type:'separator'
      },
      {
        label: 'Log Out',
        click() {
          // logout action
        }
      }
    ]
  },
  {
    type:'separator'
  },
  {
    role: 'quit'
  }
])

menus.on('ready', () => {
  console.log('Menus app is ready!')
})

menus.start()

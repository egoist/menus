'use strict'
const path = require('path')
const EventEmitter = require('events')
const {
  app,
  Tray,
  Menu
} = require('electron')

module.exports = class Menus extends EventEmitter {
  constructor(options) {
    super()
    this.options = Object.assign({
      icon: path.join(__dirname, 'example/IconTemplate.png'),
      showDockIcon: false,
      menu: [],
      tooltip: ''
    }, options)

    this.app = app
  }

  start() {
    app.on('ready', () => {
      const {
        icon, menu, showDockIcon, tooltip
      } = this.options
      // hide dock icon
      if (app.dock && !showDockIcon) app.dock.hide()

      this.tray = new Tray(icon)
      const contextMenu = Menu.buildFromTemplate(menu)
      this.tray.setToolTip(tooltip)
      this.tray.setContextMenu(contextMenu)

      this.emit('ready')
    })
  }

  setMenu(menu) {
    this.options.menu = menu
  }
}

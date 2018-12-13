'use strict';

/* eslint-disable no-path-concat, import/no-unresolved */

const { app, BrowserWindow } = require('electron');
const updater                = require('electron-simple-updater');


updater.init({
  checkUpdateOnStart: false,
  autoDownload: false,
});

//updater.init('https://github.com/javimaravillas/electron-simple-updater/blob/master/example/updates.json');


let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    autoHideMenuBar: true,
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});

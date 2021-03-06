const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    });
}

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ icono: __dirname + '/img/gato.png' });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
});

var templateMenu = [{
    label: 'Archivo',
    submenu: [{
        label: 'Nuevo Producto',
        accelerator: 'Ctrl+N',
        click() {
            //alert('Nuevo Producto');
        }
    }]
}];
const
    electron      = require( 'electron' ),
    app           = electron.app,
    BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on( 'window-all-closed', () => {
    app.quit()
} )

app.on( 'ready', function() {
    mainWindow = new BrowserWindow( {
        width : 800,
        height: 600
    } )

    mainWindow.on( 'closed', () => {
        mainWindow = null
    } )

    mainWindow.loadURL( 'file://' + __dirname + '/index.html' )
    mainWindow.webContents.openDevTools()
} )

import { app, BrowserWindow } from "electron";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // Opción para ocultar la barra de menú
    autoHideMenuBar: true,
  })

  win.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // Para macOS, si todas las ventanas están cerradas, se recrea una
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Cierra la aplicación cuando todas las ventanas estén cerradas, excepto en macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
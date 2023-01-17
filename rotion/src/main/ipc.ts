import { ipcMain } from 'electron'

ipcMain.handle('fecth-documents', async (event, params) => {
  console.log(params)
})

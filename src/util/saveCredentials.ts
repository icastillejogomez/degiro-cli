// Import modules
const hidefile = require('hidefile')
import path from 'path'
import os from 'os'
import fs from 'fs'

// Import types
import { CredentialsType } from "../types";

const toBase64 = (str: string): string => Buffer.from(str).toString('base64')

export const saveCredentials = (credentials: CredentialsType) => {
  // Encode the password
  credentials.pwd = toBase64(credentials.pwd)

  // Check credentials file
  const cliFolder: string = path.join(os.homedir(), '.degiro')
  
  // Check if cli folder exists
  if (!fs.existsSync(cliFolder)) {
    fs.mkdirSync(cliFolder)
    hidefile.hideSync('.hiddenDir')
  }

  // Save credentials
  const credentialsFile: string = path.join(cliFolder, '.account')
  if (fs.existsSync(credentialsFile)) {
    fs.unlinkSync(credentialsFile)
  }
  fs.writeFileSync(credentialsFile, toBase64(JSON.stringify(credentials)))

}
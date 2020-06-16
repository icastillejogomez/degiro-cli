// Import modules
const hidefile = require('hidefile')
import path from 'path'
import os from 'os'
import fs from 'fs'

// Import types
import { CredentialsType } from '../types'

const fromBase64 = (str: string): string => Buffer.from(str, 'base64').toString('ascii')

export const getCredentials = (): CredentialsType => {
  const cliFolder: string = path.join(os.homedir(), '.degiro')
  const credentialsFile: string = path.join(cliFolder, '.account')
  if (!fs.existsSync(cliFolder) || !fs.existsSync(credentialsFile)) {
    throw new Error('Credentials not found')
  }
  const credentials: CredentialsType = JSON.parse(fromBase64(fs.readFileSync(credentialsFile, 'utf8')))
  credentials.pwd = fromBase64(credentials.pwd)
  return credentials
}
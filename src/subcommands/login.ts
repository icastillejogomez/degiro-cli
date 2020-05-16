#!/usr/bin/env node

// Import modules
import { program } from 'commander'
import { saveCredentials } from '../util'
let DeGiro = require('degiro-api').default

 
program
  .option('-u, --username <username>', 'account username')
  .option('-p, --password [username]', 'account username')
  .option('-s, --save', 'save credentials')
  .option('-2fa [2fa]', 'second factor authentication')

program.parse(process.argv)

if (!program.username) {
  console.error('error: username is a must')
  process.exit(1)
}

const pwd = program.password || process.env.DEGIRO_PWD
if (!pwd) {
  console.error('error: password is a must')
  process.exit(1)
}


// Main async function
(async () => {
  // Create DeGiro client and sign in
  const degiro = DeGiro.create({ username: program.username, pwd })

  try {
    await degiro.login()
    console.log('Login succeeded')
  } catch (error) {
    console.error(`error: ${error}`)
  }

  // Check if user set to save credentials
  if (!program.save) process.exit(0)

  // Save credentials
  saveCredentials({ username: program.username, pwd })

})()

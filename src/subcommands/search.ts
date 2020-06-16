#!/usr/bin/env node

import { program } from 'commander'
import { getCredentials } from '../util'
import { CredentialsType } from '../types'
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'

program
  .option('-t --text [text]', 'Text to search')

program.parse(process.argv);

// Main async function
(async () => {

  const credentials: CredentialsType = getCredentials()
  const { username, pwd } = credentials

  // Create DeGiro client and sign in
  const degiro = DeGiro.create({ username, pwd })

  if (!program.text) {
    console.error('Text must be set')
    return process.exit(1)
  }

  try {
    await degiro.login()
    const results = await degiro.searchProduct({ text: program.text })
    console.log(results)
  } catch (error) {
    console.error(`error: ${error}`)
  }

})()
#!/usr/bin/env node

import { program } from 'commander'
import { getCredentials } from '../util'
import { CredentialsType } from '../types';
let DeGiro = require('degiro-api').default

program
  .option('--type [type]', 'account username', 'all')
  .option('-d, --show-details', 'account username', false)

program.parse(process.argv);

// Main async function
(async () => {

  const credentials: CredentialsType = getCredentials()
  const { username, pwd } = credentials

  // Create DeGiro client and sign in
  const degiro = DeGiro.create({ username: username, pwd })

  try {
    await degiro.login()
  } catch (error) {
    console.error(`error: ${error}`)
  }

  const portfolio = await degiro.getPortfolio({
    type: program.type,
    getProductDetails: program.showDetails,
  })
  console.table(portfolio)

})()
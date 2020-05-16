#!/usr/bin/env node

// Import modules
import { program } from 'commander'
 
program
  .name('DeGiro Command Line Interface')
  .description('DeGiro CLI provide you access to DeGiro Broker across the terminal')
  .version('0.0.1')

program
  .command('login', 'validate credentials with DeGiro platform', { executableFile: 'subcommands/login' })
  .command('portfolio', 'show account portfolio in real-time', { executableFile: 'subcommands/portfolio' })

program.parse(process.argv);
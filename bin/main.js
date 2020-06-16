#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program
    .name('DeGiro Command Line Interface')
    .description('DeGiro CLI provide you access to DeGiro Broker across the terminal')
    .version('0.0.1');
commander_1.program
    .command('login', 'validate credentials with DeGiro platform', { executableFile: 'subcommands/login' })
    .command('search', 'Search products in DeGiro', { executableFile: 'subcommands/search' })
    .command('portfolio', 'show account portfolio in real-time', { executableFile: 'subcommands/portfolio' });
commander_1.program.parse(process.argv);
//# sourceMappingURL=main.js.map
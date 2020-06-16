"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCredentials = void 0;
var hidefile = require('hidefile');
var path_1 = __importDefault(require("path"));
var os_1 = __importDefault(require("os"));
var fs_1 = __importDefault(require("fs"));
var fromBase64 = function (str) { return Buffer.from(str, 'base64').toString('ascii'); };
exports.getCredentials = function () {
    var cliFolder = path_1.default.join(os_1.default.homedir(), '.degiro');
    var credentialsFile = path_1.default.join(cliFolder, '.account');
    if (!fs_1.default.existsSync(cliFolder) || !fs_1.default.existsSync(credentialsFile)) {
        throw new Error('Credentials not found');
    }
    var credentials = JSON.parse(fromBase64(fs_1.default.readFileSync(credentialsFile, 'utf8')));
    credentials.pwd = fromBase64(credentials.pwd);
    return credentials;
};
//# sourceMappingURL=getCredentials.js.map
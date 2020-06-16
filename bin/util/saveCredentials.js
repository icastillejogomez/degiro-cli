"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCredentials = void 0;
var hidefile = require('hidefile');
var path_1 = __importDefault(require("path"));
var os_1 = __importDefault(require("os"));
var fs_1 = __importDefault(require("fs"));
var toBase64 = function (str) { return Buffer.from(str).toString('base64'); };
exports.saveCredentials = function (credentials) {
    credentials.pwd = toBase64(credentials.pwd);
    var cliFolder = path_1.default.join(os_1.default.homedir(), '.degiro');
    if (!fs_1.default.existsSync(cliFolder)) {
        fs_1.default.mkdirSync(cliFolder);
        hidefile.hideSync('.hiddenDir');
    }
    var credentialsFile = path_1.default.join(cliFolder, '.account');
    if (fs_1.default.existsSync(credentialsFile)) {
        fs_1.default.unlinkSync(credentialsFile);
    }
    fs_1.default.writeFileSync(credentialsFile, toBase64(JSON.stringify(credentials)));
    return credentialsFile;
};
//# sourceMappingURL=saveCredentials.js.map
#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const SDK = __importStar(require("@the-stations-project/sdk"));
async function main(subcommand, args) {
    switch (subcommand) {
        case "registry": return (await registry(args));
        default: return new SDK.Result(SDK.ExitCodes.ErrNoCommand, undefined);
    }
}
async function registry(args) {
    const [subcommand, path, content] = args;
    switch (subcommand) {
        case "read": return (await SDK.Registry.read(path));
        case "write": return (await SDK.Registry.write(path, content));
        case "mkdir": return (await SDK.Registry.mkdir(path));
        case "delete": return (await SDK.Registry.delete(path));
        case "ls": return (await SDK.Registry.ls(path));
        default: return new SDK.Result(SDK.ExitCodes.ErrNoCommand, undefined);
    }
}
SDK.start_service(main, (result) => console.log(result.to_string()));

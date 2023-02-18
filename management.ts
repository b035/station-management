#! /usr/bin/env node

import * as SDK from "@the-stations-project/sdk";

/* MAIN */
async function main(subcommand: string, args: string[]) {
	switch (subcommand) {
		case "registry": return (await registry(args));
		default: return new SDK.Result(SDK.ExitCodes.ErrNoCommand, undefined);
	}
}

/* SUB-FUNCTIONS */
async function registry(args: string[]) {
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

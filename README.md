oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g commit-prefix-manager
$ commit-prefix-manager COMMAND
running command...
$ commit-prefix-manager (--version)
commit-prefix-manager/0.0.0 darwin-arm64 node-v18.6.0
$ commit-prefix-manager --help [COMMAND]
USAGE
  $ commit-prefix-manager COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`commit-prefix-manager hello PERSON`](#commit-prefix-manager-hello-person)
* [`commit-prefix-manager hello world`](#commit-prefix-manager-hello-world)
* [`commit-prefix-manager help [COMMAND]`](#commit-prefix-manager-help-command)
* [`commit-prefix-manager plugins`](#commit-prefix-manager-plugins)
* [`commit-prefix-manager plugins:install PLUGIN...`](#commit-prefix-manager-pluginsinstall-plugin)
* [`commit-prefix-manager plugins:inspect PLUGIN...`](#commit-prefix-manager-pluginsinspect-plugin)
* [`commit-prefix-manager plugins:install PLUGIN...`](#commit-prefix-manager-pluginsinstall-plugin-1)
* [`commit-prefix-manager plugins:link PLUGIN`](#commit-prefix-manager-pluginslink-plugin)
* [`commit-prefix-manager plugins:uninstall PLUGIN...`](#commit-prefix-manager-pluginsuninstall-plugin)
* [`commit-prefix-manager plugins:uninstall PLUGIN...`](#commit-prefix-manager-pluginsuninstall-plugin-1)
* [`commit-prefix-manager plugins:uninstall PLUGIN...`](#commit-prefix-manager-pluginsuninstall-plugin-2)
* [`commit-prefix-manager plugins update`](#commit-prefix-manager-plugins-update)

## `commit-prefix-manager hello PERSON`

Say hello

```
USAGE
  $ commit-prefix-manager hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Helicoir/commit-prefix-manager/blob/v0.0.0/dist/commands/hello/index.ts)_

## `commit-prefix-manager hello world`

Say hello world

```
USAGE
  $ commit-prefix-manager hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ commit-prefix-manager hello world
  hello world! (./src/commands/hello/world.ts)
```

## `commit-prefix-manager help [COMMAND]`

Display help for commit-prefix-manager.

```
USAGE
  $ commit-prefix-manager help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for commit-prefix-manager.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `commit-prefix-manager plugins`

List installed plugins.

```
USAGE
  $ commit-prefix-manager plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ commit-prefix-manager plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.4/src/commands/plugins/index.ts)_

## `commit-prefix-manager plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ commit-prefix-manager plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ commit-prefix-manager plugins add

EXAMPLES
  $ commit-prefix-manager plugins:install myplugin 

  $ commit-prefix-manager plugins:install https://github.com/someuser/someplugin

  $ commit-prefix-manager plugins:install someuser/someplugin
```

## `commit-prefix-manager plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ commit-prefix-manager plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ commit-prefix-manager plugins:inspect myplugin
```

## `commit-prefix-manager plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ commit-prefix-manager plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ commit-prefix-manager plugins add

EXAMPLES
  $ commit-prefix-manager plugins:install myplugin 

  $ commit-prefix-manager plugins:install https://github.com/someuser/someplugin

  $ commit-prefix-manager plugins:install someuser/someplugin
```

## `commit-prefix-manager plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ commit-prefix-manager plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ commit-prefix-manager plugins:link myplugin
```

## `commit-prefix-manager plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ commit-prefix-manager plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ commit-prefix-manager plugins unlink
  $ commit-prefix-manager plugins remove
```

## `commit-prefix-manager plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ commit-prefix-manager plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ commit-prefix-manager plugins unlink
  $ commit-prefix-manager plugins remove
```

## `commit-prefix-manager plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ commit-prefix-manager plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ commit-prefix-manager plugins unlink
  $ commit-prefix-manager plugins remove
```

## `commit-prefix-manager plugins update`

Update installed plugins.

```
USAGE
  $ commit-prefix-manager plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const skillName = "humanize-ui";
const packageRoot = path.resolve(__dirname, "..");
const sourceFiles = ["SKILL.md", "README.md", "LICENSE"];

function usage() {
  console.log(`humanize-ui

Download the humanize-ui portable agent skill.

Usage:
  humanize-ui [options]

Options:
  --target <dir>   Download into a custom parent directory
  --force          Replace an existing humanize-ui skill directory
  --dry-run        Show what would be written
  -h, --help       Show help

Examples:
  npx humanize-ui
  pnpm dlx humanize-ui
  yarn dlx humanize-ui
  bunx humanize-ui
  npx humanize-ui --target ~/.config/my-agent/skills
`);
}

function parseArgs(argv) {
  const options = {
    target: process.cwd(),
    force: false,
    dryRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "-h" || arg === "--help") {
      options.help = true;
    } else if (arg === "--target") {
      const value = argv[index + 1];
      if (!value || value.startsWith("-")) {
        throw new Error("--target requires a directory path");
      }
      options.target = expandHome(value);
      index += 1;
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
}

function expandHome(value) {
  if (value === "~") {
    return os.homedir();
  }

  if (value.startsWith(`~${path.sep}`)) {
    return path.join(os.homedir(), value.slice(2));
  }

  return path.resolve(value);
}

function filesMatch(sourceDir, installDir) {
  return sourceFiles.every((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(installDir, file);

    return (
      fs.existsSync(targetPath) &&
      fs.readFileSync(sourcePath, "utf8") === fs.readFileSync(targetPath, "utf8")
    );
  });
}

function copySkill(sourceDir, installDir) {
  fs.mkdirSync(installDir, { recursive: true });

  for (const file of sourceFiles) {
    fs.copyFileSync(path.join(sourceDir, file), path.join(installDir, file));
  }
}

function install(options) {
  const installDir = path.join(options.target, skillName);

  if (options.dryRun) {
    console.log(`Would install ${skillName} to ${installDir}`);
    return;
  }

  if (fs.existsSync(installDir)) {
    if (filesMatch(packageRoot, installDir)) {
      console.log(`${skillName} is already installed at ${installDir}`);
      return;
    }

    if (!options.force) {
      throw new Error(
        `${skillName} already exists at ${installDir}. Re-run with --force to replace it.`
      );
    }

    fs.rmSync(installDir, { recursive: true, force: true });
  }

  copySkill(packageRoot, installDir);
  console.log(`Installed ${skillName} to ${installDir}`);
}

try {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    usage();
    process.exit(0);
  }

  install(options);
} catch (error) {
  console.error(`humanize-ui: ${error.message}`);
  console.error("Run `humanize-ui --help` for usage.");
  process.exit(1);
}

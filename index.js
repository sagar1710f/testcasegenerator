#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("inquirer");
const gradient = require("gradient-string");
const { createSpinner } = require("nanospinner");
const spinner = createSpinner({
  interval: 80,
});

const COMPONENTS_DIR = "./src/components"; // replace with your directory path
const TESTS_DIR = "./tests/unit"; // replace with your directory path

const greetingText = figlet.textSync("Vue.js Test Generator", {
  font: "Standard",
  horizontalLayout: "fitted",
  verticalLayout: "default",
});

console.log(gradient.rainbow(greetingText));

const configExists = fs.existsSync(path.join(__dirname, 'config.json'));

async function createConfigFile() {
  console.log(chalk.bold('\nVue Test Generator Configuration\n'));

  const { componentsDir } = await inquirer.prompt([
    {
      type: 'input',
      name: 'componentsDir',
      message: 'Enter the path to your components directory:'
    }
  ]);
  const config = { componentsDir };

  fs.writeFileSync('config.json', JSON.stringify(config, null, 2));

  console.log(chalk.green('\nConfiguration file created successfully!\n'));
}

if (configExists) {
  console.log(chalk.yellow('Creating config.json file IF'));
  // const { overwriteConfig } = await inquirer.prompt([
  //   {
  //     type: 'confirm',
  //     name: 'overwriteConfig',
  //     message: 'A config.json file already exists. Do you want to overwrite it?',
  //   },
  // ]);
  // if (!overwriteConfig) {
  //   console.log(chalk.yellow('Not overwriting config.json file'));
  // } else {
  //   console.log(chalk.yellow('Overwriting config.json file'));
  //   fs.writeFileSync(path.join(__dirname, 'config.json'), config);
  // }
} else {
  console.log(chalk.yellow('Creating config.json file else'));
  createConfigFile();
}

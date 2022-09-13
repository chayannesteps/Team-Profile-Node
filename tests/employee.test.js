
const inquirer = require("inquirer");
const { describe } = require("yargs");
const questions = require('questions')

describe('Firsttest', () => {
    describe('secondtest',() => {
        inquirer.prompt(questions)
        it('te', () => {
            expect(1).toBe(1)
            });
    })
  });

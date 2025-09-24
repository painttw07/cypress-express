# Cypress Express Testing Project

## Overview

This project contains automated tests using Cypress express for web applications. It's designed to be beginner-friendly and includes comprehensive testing examples.
[Cypress eXpress by Fernando Papito](https://www.udemy.com/course/cypress-express/)

## Project Features

- Complete Cypress project setup
- Element inspection and manipulation
- Test result validation
- Custom command creation
- Configuration management
- Window resizing capabilities
- Regression testing via CLI
- Automated test evidence (videos/screenshots)
- Allure Reports integration

## Installation Requirements

### Required Software

1. **Node.js**

   - For Cypress: Version 22.14.0
   - For MarkL App: Version 18.12.1

2. **Yarn Package Manager**

   ```powershell
   npm install --global yarn
   ```

3. **Git**
   - Required for repository access

### Project Setup

1. **Create Project Directory**

   ```powershell
   mkdir QAx
   cd QAx
   mkdir project
   cd project
   ```

2. **Install Project**
   ```powershell
   yarn init
   git clone <repository-url>
   cd cypress-express
   yarn add cypress@12.2.0 -D
   ```

## Running Tests

### Test Execution Options

1. **Interactive Mode**

   ```powershell
   yarn cypress open
   ```

2. **Command Line Mode**

   ```powershell
   yarn cypress run
   ```

3. **Specific Browser Testing**
   ```powershell
   yarn cypress run --browser chrome
   ```

## MarkL Application Setup

### Installation Steps

1. Extract `mark-dev-build-r3.zip` to `QAx/apps/markL`

2. **Setup API**

   ```powershell
   cd api
   npm install
   npm run db:init
   npm run dev
   ```

3. **Setup Web Interface**

   ```powershell
   cd web
   npm install
   npm run dev
   ```

4. Access the application at: http://localhost:3000

## Helpful Tips

### Element Selection in Cypress

1. **By ID**

   - Use `#elementId`
   - Example: `cy.get('#newTask')`

2. **By Class**

   - Use `.className`
   - Works with dynamic classes

3. **By Other Attributes**
   - Text: `input[text="example"]`
   - Placeholder: `input[placeholder="example"]`
   - Name: `input[name="example"]`

### Additional Resources

- Generate test data: [Faker.js](https://fakerjs.dev/guide/)
- Test results: Check `cypress/videos` for recordings

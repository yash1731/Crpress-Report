# Cypress Tech Test
Cypress Report with GitHub Actions workflow and publish report in GitHub Pages

# Fork this repo
If you want to experiment with running this project in Continous Integration, you'll need to fork it first.

After forking this project in Github, run these commands:

## Clone this repo to a local directory
git clone https://github.com/yash1731/Cypress-Report.git

## Install the node_modules
npm install

## Launch the cypress test runner
npx cypress open

## Launch the cypress test chrome/headless mode
npx cypress run --browser chrome

npx cyprees run --headless

## Launch the cypress test & publish report in dashboard cypress.io
npx cypress run --record --key 7ce28a2d-137d-4bbf-a020-c5ebf96a797a

I am adding your email to see test report please accept invitation, project name is - cypress-project
https://dashboard.cypress.io/invitation/668a4fc2-b4c9-4f16-8250-a13420caf9c3

# Follow this link to see report - 
https://dashboard.cypress.io/organizations/faa2b607-3728-45f2-bf0a-2e6e3171e26d/projects


# Run Cypress tests with GitHub Actions as part of CI/CD pipeline
GitHub offers developers Actions that provide a way to automate, customize, and execute your software development workflows within your GitHub repository.

How this action works: 

1. On push to this repository, this job will provision and start GitHub-hosted Ubuntu Linux instance for running the outlined steps for the declared cypress-run job within the jobs section of the configuration.
2. The GitHub checkout Action is used to checkout our code from our GitHub repository
3. Finally, our Cypress GitHub Action will:

Install npm dependencies
Build the project (npm run build)
Start the project web server (npm start)
Run the Cypress tests within our GitHub repository within Electron.

## Testing in Chrome and Firefox with Cypress Docker Images
GitHub Actions provides the option to specify a container image for the job. Cypress offers various Docker Images for running Cypress locally and in CI.




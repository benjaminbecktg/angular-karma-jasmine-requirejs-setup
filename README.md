# Introduction
This is a base test setup project which provides a basic sample of getting Angular, Karma, Jasmine, RequireJS to work together.

# Setup
This setup repository is without the dependencies added, to get this setup work.

* Get NPM setup by installing NodeJS
* Nagivate to the root folder, in this instance I'm using windows on C:\projects\repositories\angular-karma-jasmine-requirejs-setup
* Run the following commands to install the dependencies
1. npm install karma
2. npm install karma-jasmine
3. npm install karma-phantomjs-launcher
4. npm install karma-chrome-launcher
5. npm install requirejs
6. npm install angular
7. npm install angular-mocks

Execute "Karma init karma.config.js" and configure with the following settings

Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> yes

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next quest
ion.
> PhantomJS
>

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
>

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
Enter empty string to move to the next question.
>

Do you wanna generate a bootstrap file for RequireJS?
This will generate test-main.js/coffee that configures RequireJS and starts the
tests.
> no

Which files do you want to include with <script> tag ?
This should be a script that bootstraps your test by configuring Require.js and
kicking __karma__.start(), probably your test-main.js file.
Enter empty string to move to the next question.
>

Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> yes

Once all the dependencies has been downloaded, you can use the project by replacing the karma.config.js file.
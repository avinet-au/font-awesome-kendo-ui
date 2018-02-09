Font Awesome Icons + Kendo UI
=============================

Originally created by David Driscoll (see repository forked from) this project aims to remap icons provided by [Kendo UI (web)](http://www.kendoui.com/) to use [Font-Awesome](http://fontawesome.io/) for icons. Useful when you want to use kendo along with a project that is already making use of font-awesome.

Usage
-----
We have added this to the bower repository so it can be installed using the following command:

bower install --save font-awesome-kendo-ui

The css to include will now be found at bower_components/font-awesome-kendo-ui/font-awesome-kendo-icons.css
This needs to be included after the kendo css.

Please Note
-----------
This is still a work in progress, the majority of icons are not yet mapped and some are mapped incorrectly. We welcome contributions to the project!

Development
-----------
All development should be done in the mappings.less file, a basic mapping looks as follow:

.k-i-kendo-icon-name {
    &:before {
        content: @fa-var-font-awesome-icon-name;
    }
}

To set up node must be installed, and the dependencies need to be installed by running "npm install".

To build simply run the grunt task ("node .\node_modules\grunt\bin\grunt" if you don't have grunt or just "grunt" if grunt is on your path).
As well as generating the css file from the less this will also generate a test.html file which shows a table with all the mappings displayed to easily identify missing icons or incorrectly mapped icons.
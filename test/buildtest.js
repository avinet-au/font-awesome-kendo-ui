const cheerio = require('cheerio');
const request = require('request');
const pug = require('pug');

var url = "http://docs.telerik.com/kendo-ui/styles-and-layout/icons-web";

request(url, function(err, response, html){
    if(err) {
        console.log(err);
        return;
    }

    var $ = cheerio.load(html);

    var icons = [];

    $("ul.WebComponentsIcons li span").each(function(index, val){
        icons.push($(val).attr("class").replace("k-icon ",""));
    });

    writeTestPage(icons);

});

function writeTestPage(kendoClasses) {

    var data = {
        pageTitle: "Kendo to Font-Awesome Mappings",
        classes: kendoClasses
    };

    var template = pug.compileFile('test/test.pug');
    console.log(template(data));
}
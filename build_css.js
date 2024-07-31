var fs = require('fs');
var ignoreFiles = []; // example ['_base', 'colors'];

try 
{
    var { minify } = require('csso');
}
catch(err)
{
    console.log('module csso not found. npm i -D csso')
}


if(fs.existsSync(__dirname + '/src'))
{
    var src_base = fs.readdirSync(__dirname + '/src/base');
    var src_custom = fs.readdirSync(__dirname + '/src/custom');
    var src_ui = fs.readdirSync(__dirname + '/src/ui');

    var Out = '';

    function readFiles(dir, path)
    {
        dir.forEach((file) => {
            if(!ignoreFiles.includes(file + '.css'))
                Out += fs.readFileSync(__dirname + path + file, 'utf-8');
        })
    }

    readFiles(src_base, '/src/base/');
    readFiles(src_custom, '/src/custom/');
    readFiles(src_ui, '/src/ui/');

    if(!fs.existsSync(__dirname + '/build_css'))
    {
        fs.mkdirSync(__dirname + '/build_css');
    }

    fs.writeFileSync(__dirname + '/build_css/style.css', Out);
    console.log('Build dev success!')

    if(minify)
    {
        fs.writeFileSync(__dirname + '/build_css/style.min.css', minify(Out).css);
        console.log('Build min success!')
    }
        
}
else 
{
    console.log('Directory not found');
}

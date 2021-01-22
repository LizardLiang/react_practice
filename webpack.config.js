const path = require('path');
const bodyParser = require('body-parser')
var request = require('sync-request');

module.exports = {
    entry: ['./app.jsx'],
    output: {
        filename: 'bundle.js',
<<<<<<< HEAD
        path: path.resolve(__dirname, './'),
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            //第一個 loader編譯 JSX
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            //第二個 loader編譯 css
            { test: /.css$/, exclude: /node_modules/, use: ['style-loader','css-loader'] },
            { test: /\.(svg)$/, exclude: /node_modules/, use: [{loader: 'file-loader', options:{name: 'images/[hash]-[name].[ext]'},}]}
=======
        path: path.resolve('E:/Programing/Web/resume'),
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            { test: /\.(js|jsx)$/, exclude: [/node_modules/, /ExpressServer/], loader: 'babel-loader' },
            //第二個loader編譯ES6
            { test: /.css$/, exclude: [/node_modules/, /ExpressServer/], use: ['style-loader','css-loader'] }
>>>>>>> 8141407b56f1a662258b10cf370f496b07822f4c
        ]
    },
    devServer:{
        before: function(app) {
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({
                extended: true
            }));

            // Assign every POST request to this web url
            app.post('/api/v1/', function(req, res) {
                var serviceCallResponse = request('POST', 'http://114.32.157.74/PythonFlask/api/v1/' + req.originalUrl, {
                    json:req.body
                });
                res.send(serviceCallResponse.getBody('utf8'));
            });
        },
        proxy: {
            // 指定代理服務器，所有 /api 的請求會被發送至後面的網址
            '/api/v1/': 'http://114.32.157.74/PythonFlask/api/v1/'
        },
        port:8082
    }
};
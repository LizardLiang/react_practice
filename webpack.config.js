const path = require('path');
const bodyParser = require('body-parser')
var request = require('sync-request');

module.exports = {
    entry: ['./app.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            { test: /\.(js|jsx)$/, exclude: [/node_modules/, /ExpressServer/], loader: 'babel-loader' },
            //第二個loader編譯ES6
            { test: /.css$/, exclude: [/node_modules/, /ExpressServer/], use: ['style-loader','css-loader'] }
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
//Two things defined in this file
//1)entry point
//2)where to output the final bundle file

//__dirname --> C:\Users\tench\Desktop\React_Program\Indecision-App2
//path.join(__dirname,'public') --> C:\Users\tench\Desktop\React_Program\Indecision-App2\public

//require() --> is the same as import es5
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
this is a environment which stores the enviroment which you are currently in. This get automatically set for
us in heroku, heroku sets this value equal to 'production'.
*/


//what we are going to do is figure out how we can set this in our test environment. It will
//either be in 'production', 'test' or undefined (development)

module.exports = (env) =>{

    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin('styles.css'); 

    console.log('env type',env);
    return {
        //tells webpack where the main file is
        entry: './src/app.js',
        output: {
            //the absolute path
            path: path.join(__dirname,'public', 'dist'),
            filename:'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_module/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap:true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' :'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback:true,
            publicPath: '/dist/'
        }
    }
}

//we set module.exports to an object, and we are going to be defining all of the configuration details for our 
//webpack So Web pack is going to grab this file.It is going to run it and it's going to have access to whatever 
//we put on this object.
// module.exports = {
//     //tells webpack where the main file is
//     entry: './src/app.js',
//     output: {
//         //the absolute path
//         path: path.join(__dirname,'public'),
//         filename:'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_module/
//         }, {
//             test: /\.s?css$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     devServer: {
//         contentBase: path.join(__dirname,'public'),
//         historyApiFallback:true
//     }
// };

//loader --> lets you customize the behavior of webpack when it loads a given file (like app.js, utils.js)
//we can do something with that file, like running it through babel
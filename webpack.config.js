const HtmlWebPackPlugin = require('HtmlWebPackPlugin'); 

module.exports = {

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader', 
                    options: {
                        sources: false,
                    }
            }
        ]
    },
    {
        test: /\.css$/,
        use: [ 'styles-loader', 'css-loader' ]
    }
    {
        test: 's/styles.css&/'
    }
}

    optimization: {},

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',
            // template: '.src/index.html',
            // filename: './index.html'
        }), 
    ]



}


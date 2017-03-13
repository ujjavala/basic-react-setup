var config = {
   entry: '/Users/usingh/bahmni-code/react2/main.js',
	
   output: {
      path:'/Users/usingh/bahmni-code/react2',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   resolve: {
      alias: {
         "highcharts-more" : "highcharts/highcharts-more.src.js",
         "highcharts-exporting" : "highcharts/modules/exporting.src.js",
         "react-highcharts": '../../dist'
      },
      modulesDirectories: ['node_modules']
   }
}

module.exports = config;

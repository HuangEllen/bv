//模組打包工具

//npm run dev(打包)
//npm run dev:server(開啟伺服器)
//development開發用,production上架用
//未設定package.json完成的啟用指令npx webpack --mpde development
const path = require('path');//path是個模組  可以不用寫完整的路徑  由模組去分析抓取
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {//module.exports 模組化匯出
    entry:'./src/App.js',//重要指令,讀取位置
    output:{//重要指令,打包後位置
        filename:'bundle.js',//打包名稱
        path:path.resolve(__dirname,'dist')//path(變數名稱):path(模組名稱),合併打包後放置位置
    },
    plugins:[new HtmlWebpackPlugin({//設定範本
        title:'Ellen App',//名稱
        template:'./temp.html'//檔案位置
    })],//會無中生有一個html
    module:{//css模組設定
        rules:[//根據條件做編譯=設定(可以多個設定)
            {
                test:/\.css$/,//條件,只要副檔名是css的
                use:['style-loader','css-loader']//就要使用兩個loader做設定(先做後面再做前面)
            },
            {
                test:/\.scss$/,//條件,只要副檔名是scss的
                use:['style-loader','css-loader','sass-loader']//就要使用兩個loader做設定(先做後面再做前面)
            }
        ]
    },
    devServer:{//伺服器設定
        contentBase:path.resolve(__dirname,"dist"),//path.resolve=解析出,網頁位置
        port:3000,
        open:true//自動打開瀏覽器
        //compress:true//壓縮檔案
    }
} 
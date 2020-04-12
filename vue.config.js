module.exports = {
    publicPath:'./',
    lintOnSave:false,
    devServer:{
        // 本地访问localhost:8080的时候 由node把请求转接到代理地址
        proxy:'https://dating.ourgame.com/lianzhong-dating-boot/v2/api-docs'
    }
}
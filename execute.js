//httpアクセスをするオブジェクトをまとめた「http」というモジュールを読み込む
const http = require('http');
//ファイルを扱う「File System」オブジェクトのモジュール「fs」を読み込む
const fs = require('fs');
const url = require('url');

//ファイル読込処理
const index_html = fs.readFileSync('./html/index.html','UTF-8');
const page2_html = fs.readFileSync('./html/page2.html','UTF-8');
const style_css = fs.readFileSync('./css/style.css','UTF-8');
const script_js = fs.readFileSync('./js/script.js')

//サーバーオブジェクトの作成。Node.jsはサーバープログラムそのものを作る
var server = http.createServer(getFromClient);

//サーバーを待ち受け状態にする
//3000はポート番号3000のことであり、Node.jsだとデフォルトで使われている。
server.listen(3000);
//実行時にコンソールに出力する
console.log('Server start!');

//ここまでメインプログラム--


//関数の記述---------------
//createServerの引数
//引数の値をいつ受け取っているかが謎
//第一引数　・・・httpリクエストの処理を管理する
//第二引数　・・・httpレスポンスの処理を管理する
function getFromClient(request,response){
    var url_parts = url.parse(request.url,true);
    //ルーティング処理
    //クライアントからリクエストされたurlごとに、レスポンスする処理を分ける
    switch (url_parts.pathname) {
        //index表示（初期表示時）
        case '/':
            response_index(request,response);
            break;
        //index表示（page2から戻ってきた時）
        case '/index.html':
            response_index(request,response);
            break;
        //page2表示
        case '/page2.html':
            response_page2(request,response);
            break;    
        //cssの内容を適用出来るようにする
        case '/css/style.css':
            response_css(request,response);
            break;
        //jsの内容を適用出来るようにする
        case '/js/script.js':
            response_js(request,response);
            break;
        default:
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.end('no page...');
            break;
    }
}


const response_index = (request,response)=>{
    //ヘッダー情報の出力
    response.writeHead(200,{'Content-Type':'text/html'});
    //readFileで読み込んだindex.htmlファイルの出力
    response.write(index_html);
    //サーバーからクライアントへの返信を終了する
    response.end();
}
const response_page2 = (request,response)=>{
    //ヘッダー情報の出力
    response.writeHead(200,{'Content-Type':'text/html'});
    //readFileで読み込んだindex.htmlファイルの出力
    response.write(page2_html);
    //サーバーからクライアントへの返信を終了する
    response.end();
}
const response_css = (request,response)=>{
    response.writeHead(200,{'Content-Type':'text/css'});
    response.write(style_css);
    response.end();
}
const response_js = (request,response)=>{
    response.writeHead(200,{'Content-Type':'text/js'});
    response.write(script_js);
    response.end();
}

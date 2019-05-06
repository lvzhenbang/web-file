# web-file

## FileReader

异步操作`file`或`blob`（指的是存储在本地计算机上的）。

注：`input`元素获取上传的`file`（FileList）

```
var reader = new FileReader();
// 操作成功
reader.onload = function() {

}
// 上传进度
reader.onprogress = function() {

}
// 上传失败
reader.onerror = function() {

}
```

## demo

* [`上传文件`](https://lvzhenbang.github.io/web-file/upload.html)
* [`下载文件`](https://lvzhenbang.github.io/web-file/download.html)
* [`调用摄像头处理图片`](https://lvzhenbang.github.io/web-file/webcam.html)

注：测试浏览器若不支持调用`camera`，[`调用摄像头处理图片`](https://lvzhenbang.github.io/web-file/webcam.html)这个demo无法起作用。`desktop`端的基本没问题，`mobile`端目前测试用的是`chrome`，也可以考虑使用微信打开。

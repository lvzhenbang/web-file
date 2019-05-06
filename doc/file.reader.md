# FileReader

异步操作`file`或`blob`（指的是存储在本地计算机上的）。

注：`input`元素获取上传的`file`（FileList）

```
<input class="inpu-file" type="file" accept="image/*, video/*" />
```

```script
var file = document.querySelector('.input-file').files[0]
// 实例化一个reader
var reader = new FileReader();
// 处理文件
reader.readAsDataURL(file)
// 上传成功
reader.onload = function(e) {

}
// 上传进度
reader.onprogress = function(e) {
  // 当前加载的百分比
  console.log(e.loaded/e.total*100%)
}
// 上传失败
reader.onerror = function(e) {
  console.log(e.error)
}
```

## 参考资料

[`FileReader MDN`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

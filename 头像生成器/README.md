# 微信头像生成

> 祖国70周年，朋友圈兴起了@微信官方的浪潮，要头像上加国旗，要微信余额十个0的..要女朋友的...我帮不了大家别的，但是这个头像上面加国旗我真的必须帮了。

PS: 因为是兴起的原因，图片资源没准备到位，就写了一个简单的文件上传加小logo的canvas拼接。

## 技术点Canvas

1. 获取到选择的图片文件，存到file参数中。

   ```javascript
   let file = document.querySelector('input[type=file]').files[0] // 获取选择的文件，这里是图片类型 
   ```

2. new 一个FileReader对象，存储本地选择的文件

   ```javascript
   let reader = new FileReader()
   reader.readAsDataURL(file) //读取文件并将文件以URL的形式保存在resulr属性中 base64格式 
   ```

   > `FileReader` 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 [`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 或 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象指定要读取的文件或数据。

   > [`FileReader.readAsDataURL()`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL)
   >
   > 开始读取指定的[`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)中的内容。一旦完成，`result`属性中将包含一个`data:` URL格式的字符串以表示所读取文件的内容。

3. 文件加载完成开始拼图片

   ```javascript
   reader.onload = function (e) { // 文件读取完成时触发  
   	let result = e.target.result // base64格式图片地址  
       var image = new Image();
       image.src = result // 设置image的地址为base64的地址  
       image.onload = function () {
       	var canvas = document.querySelector("#canvas");
           var context = canvas.getContext("2d");
           canvas.width = image.width; // 设置canvas的画布宽度为图片宽度  
           canvas.height = image.height;
           context.drawImage(image, 0, 0, image.width, image.height) // 在canvas上绘制图片
           var image1 = new Image();
           image1.src = './selected.png';
        	image1.onload = function () {
   			context.drawImage(image1, (image.width - image1.width), 0, image1.width, image1.height)
        	}
        	let dataUrl = canvas.toDataURL('image/jpeg', 1)
      	}
   }
   ```

   > reader.onload() 文件加载完成
   >
   > 声明一个图片对象，去接收文件的base64地址。
   >
   > image.onload()图片加载完成则在画布上画图
   >
   > PS:canvas.getContext("2d"); 必须设置成2d
   >    getContext() 方法返回一个用于在画布上绘图的环境。

   PS：context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

   | 参数      | 描述                                         |
   | --------- | -------------------------------------------- |
   | *img*     | 规定要使用的图像、画布或视频。               |
   | *sx*      | 可选。开始剪切的 x 坐标位置。                |
   | *sy*      | 可选。开始剪切的 y 坐标位置。                |
   | *swidth*  | 可选。被剪切图像的宽度。                     |
   | *sheight* | 可选。被剪切图像的高度。                     |
   | *x*       | 在画布上放置图像的 x 坐标位置。              |
   | *y*       | 在画布上放置图像的 y 坐标位置。              |
   | *width*   | 可选。要使用的图像的宽度。（伸展或缩小图像） |
   | *height*  | 可选。要使用的图像的高度。（伸展或缩小图像） |
   
   >eq:小图标的位置怎么变化?  
   >aw:小图标为image1，在画布上画时获取到image1的长度/宽度。通过上面的API可以看到,x/y参数控制图像的x/y坐标位置，而我们知道上传图片和小图标的宽高数据，就可以随意定制小图标的位置。

import Taro from "@tarojs/taro";

const chooseImage=()=>{
    Taro.chooseImage({
        count:1,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            return res.tempFilePaths
          }
    })
}

const uploadImage=(tempFilePaths)=>{
    Taro.uploadFile({
        url:"",
        filePath:tempFilePaths[0],
        name:'file',
        formData:{
            'user':'test'
        },
        success(res){
            console.log(res)
        }
    })
}
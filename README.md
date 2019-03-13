# vue-workflow
A component to show the workflow with Vue 2.6.6

## #Todo
### ~~1.上传到npm~~
### ~~2.样式拥抱element-ui~~
### 3.支持节点样式&动画自定义
### 4.支持Vue 2.0- 2.5版本(slot语法)
### 5.认真制作demo.gif
### ~~6.给自己一个star~~

## 1.安装
`npm install vue-workflow`

## 2.使用
#### 使用样例参照*src/App.vue*

## 3·效果图
![效果图](https://github.com/cvSoldier/vue-workflow/blob/master/src/assets/demo.gif)

## 4.存在的问题
### 1.每次打包完之后都要在打包文件中手动引入css，在package.json中设置style不生效（怀疑是打包的script写的不对（因为明明element的package.json就这么写的））
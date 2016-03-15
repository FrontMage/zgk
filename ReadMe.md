#一个后台管理应用

后端基于node.js，mysql
======================================================
服务器端
------------------------------------------------------
首先要安装node.js 5.6和npm-----百度搜索即可

下载ZIP后，解压缩，通过命令行进入zgk目录
    cd g:\zgk
    
然后安装服务器依赖模块
    npm install
    
安装结束后，再安装守护进程forever
    npm install forever -g
    
运行服务器
    forever start server.js
此时即使你关掉命令行，服务器也能运行了
当你不需要服务器时
    forever stopAll

数据库
-----------------------------------------------------
安装xampp for windows，百度即可
开启mysql后如果修改了默认DBA用户名，需要修改服务器端连接池相应配置
xampp可以一键启动数据库，管理端口，并且自带phpMyAdmin可以管理数据库，但它需要VC库

前端基于JQuery，easyUI，Bootstrap
======================================================
页面左侧是数据表格和搜索栏，右侧添加用户，下方控制台会显示你所有的操作记录
目前删除操作即使数据库未能删除成功，有时控制台也会显示删除成功//to do---->delete router bug
添加用户的表单有验证，但是行内编辑没有//to do----->edit in row should be valid

请遵守GPL协议，任何问题反馈请发邮件至xbgxwh@163.com或xbgxwh@outlook.com
Please follow GPL agreement, any questions please email xbgxwh@163.com or xbgxwh@outlook.com

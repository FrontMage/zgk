//for local web
var express = require("express");
var app = new express();

//加载mysql模块
var mysql = require("mysql");

/*******************************************<<<<<<<<<<<<<<<<以上为模块加载区>>>>>>>>>>>>>>>*********************************************/

//设定服务器端口
app.set("port",(process.env.PORT||3000));

//静态文件路径
app.use(express.static(__dirname+"/public"));

//连接池
var pool = mysql.createPool({
	connectionLimit:10,
	host:"127.0.0.1",
	user:"root",
	password:"root"
});

/*****************************************\\\\\\\\\\\\\\\\\\\\\\\\以下为路由模块\\\\\\\\\\\\\\\\\\\\\\\\\\\*************************************************/

/*******************************************************************CRUD系列路由*******************************************************************/
//测试路由
app.get("/zgk**",function(req,res){
		pool.getConnection(function(err,connection){
		if (err) {
			console.log(err+"--from connection");
			res.send("增加失败，数据库连接错误");
		} else{
			connection.query("USE zgk",function(err,rows){
				if (err) {
					console.log(err+"--from using database");
					res.send("增加失败，数据库使用错误");
				}
			else{
                    var selectQuery = "SELECT * FROM users";
					connection.query(selectQuery,function(err,rows){
						if (err) {
							console.log(err+"--from insert query");
							res.send("增加失败，数据库查询错误");
						} else{
						    res.send(rows);
						}
					});/*connection.query select end*/
				}
			});/*connetion.query using database end*/
		}
		if(connection){connection.release()};
	});/*pool.getConnection end*/
});/*app.get end*/

//增加路由
app.get("/insert?**",function(req,res){
		pool.getConnection(function(err,connection){
		if (err) {
			console.log(err+"--from connection");
			res.send("增加失败，数据库连接错误");
		} else{
			connection.query("USE userInfo",function(err,rows){
				if (err) {
					console.log(err+"--from using database");
					res.send("增加失败，数据库使用错误");
				}
			else{
                    var insertQuery = "INSERT INTO users(userName,cellNum)VALUES(" + "'" + req.query.username + "','"+req.query.cellNum+"')";
					connection.query(insertQuery,function(err,rows){
						if (err) {
							console.log(err+"--from insert query");
							res.send("增加失败，数据库查询错误");
						} else{
						    res.send("增加成功");
						}
					});/*connection.query select end*/
				}
			});/*connetion.query using database end*/
		}
		if(connection){connection.release()};
	});/*pool.getConnection end*/
});/*app.get end*/

//删除路由
app.get("/delete?**",function(req,res){
		pool.getConnection(function(err,connection){
		if (err) {
			console.log(err+"--from connection");
			res.send("删除失败，数据库连接错误");
		} else{
			connection.query("USE userInfo",function(err,rows){
				if (err) {
					console.log(err+"--from using database");
					res.send("删除失败，数据库使用错误");
				}
			else{
                    var deleteQuery = "DELETE FROM users WHERE username="+"'"+req.query.username+"'";
					connection.query(deleteQuery,function(err,rows){
						if (err) {
							console.log(err+"--from insert query");
							res.send("删除失败，数据库查询错误");
						} else{
						    res.send("删除成功");
						}
					});/*connection.query select end*/
				}
			});/*connetion.query using database end*/
		}
		if(connection){connection.release()};
	});/*pool.getConnection end*/
});/*app.get end*/

//查找路由
app.get("/search?**",function(req,res){
		pool.getConnection(function(err,connection){
		if (err) {
			console.log(err+"--from connection");
			res.send("查找失败，数据库连接错误");
		} else{
			connection.query("USE userInfo",function(err,rows){
				if (err) {
					console.log(err+"--from using database");
					res.send("查找失败，数据库使用错误");
				}
			else{
					var selectQuery = "SELECT * FROM users WHERE userName="+"'"+req.query.username+"'";
					connection.query(selectQuery,function(err,rows){
						if (err) {
							console.log(err+"--from query");
							res.send("查找失败，数据库查询错误");
						} else{
									if (rows.length==0) {
										res.send("查找失败，用户不存在");
									} else{
										res.send(rows);
									}
						}
					});/*connection.query select end*/
				}
			});/*connetion.query using database end*/
		}
		if(connection){connection.release()};
	});/*pool.getConnection end*/
});/*app.get end*/
	
	

//修改路由
app.get("/update?**",function(req,res){
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err + "--from pool connection");
            res.send("修改失败，数据库连接错误");
        } else {
            connection.query("USE userInfo", function (err, rows) {
                if (err) {
                    console.log(err + "--from using database");
                    res.send("修改失败，数据库使用错误");
                } else {
                    var updateQuery = "UPDATE users SET cellNum=" + "'" + req.query.cellNum + "' WHERE username=" + "'" + req.query.username + "'";
                    connection.query(updateQuery, function (err, rows) {
                        if (err) {
                            console.log(err + "--from updateQuery");
                            res.send("修改失败，数据库更新错误");
                        } else {
                            res.send("修改成功");
                        }
                    });/*connection.query update end*/
                }
            });/*connection.query using database end*/
        }
        if (connection) { connection.release() };
    });/*pool.getConnection end*/
	
});/*app.get end*/

//加载所有用户信息路由
app.get("/loadAll?**",function(req,res){
		pool.getConnection(function(err,connection){
		if (err) {
			console.log(err+"--from connection");
			res.send("加载失败，数据库连接错误");
		} else{
			connection.query("USE userInfo",function(err,rows){
				if (err) {
					console.log(err+"--from using database");
					res.send("加载失败，数据库使用错误");
				}
			else{
					var selectQuery = "SELECT * FROM users";
					connection.query(selectQuery,function(err,rows){
						if (err) {
							console.log(err+"--from query");
							res.send("加载失败，数据库查询错误");
						} else{
									if (rows.length==0) {
										res.send("加载失败，用户不存在");
									} else{
										res.send(rows);
									}
						}
					});/*connection.query select end*/
				}
			});/*connetion.query using database end*/
		}
		if(connection){connection.release()};
	});/*pool.getConnection end*/
});/*app.get end*/

/*******************************************\\\\\\\\\\\\\\\\\\\\\\\\以上为路由模块\\\\\\\\\\\\\\\\\\\\\\\\\************************************************/

/*******************************************************以下为服务器端口监听**************************************************************/
app.listen((process.env.PORT||3000),function(){
	console.log("Express server running on "+"http://127.0.0.1："+(process.env.PORT||3000));
	console.log("All Data in "+process.cwd());
});
 1. 选购一个服务器，我选择的是阿里云的学生机，10元/月
 [阿里云购买链接](https://promotion.aliyun.com/ntms/act/campus2018.html)
 3. 远程登陆到你的服务器
 	ssh root@公网ip地址，输入密码链接到你的服务器
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905094854628.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU1NTQ4Mw==,size_16,color_FFFFFF,t_70)
3. 使用yum方式，下载并安装Apache
```
     yum -y install httpd
```
  等待一段时间后，页面显示 Complete！证明Apache环境安装完成。
  
  4. 配置Apache
   添加一个Linux用户 siteadmin 并指定新增用户的远程登录默认访问路径为 /var/www/html，忽略警告信息即可。
  

```
    adduser -d /var/www/html siteadmin
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905110549614.png)
设置新建用户 siteadmin 的登录密码

```
   passwd siteadmin
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905110932566.png)
授予 siteadmin 用户权限

```
chown  -Rf  siteadmin.siteadmin  /var/www/html
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905111035651.png)
启动Apache服务

```
service httpd start
```
正常情况是出现OK，然后在浏览器输入服务器公网ip就可以显示Apache 2 Test Page页面

==但在这里我遇到了如下问题==
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905111142124.png)
经排查发现是服务器一些常用端口未开启，可以进入你的服务器实例-->本实例安全组-->配置规则-->快速创建规则中打开常用端口![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905111925268.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU1NTQ4Mw==,size_16,color_FFFFFF,t_70)
此时在浏览器输入服务器公网ip就可以显示Apache 2 Test Page页面了
至此，Apache已部署成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905112915238.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU1NTQ4Mw==,size_16,color_FFFFFF,t_70)

5. 使用FileZilla上传本地站点文件（Mac系统）
    [下载FileZilla](http://tansy01.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E4%B8%AD%E6%B2%99%E7%AE%B1%E9%99%84%E4%BB%B6%E7%AE%A1%E7%90%86/FileZilla_3.25.2_macosx-x86.app.tar.bz2?spm=5176.11105641.0.0.xhzlRj&file=FileZilla_3.25.2_macosx-x86.app.tar.bz2)
    解压并打开FileZilla,输入公网ip地址，用户名，自定义密码，及22端口，点击快速连接，在弹出的是否信任主机的提示中，选择信任主机
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905113030843.png)
右侧页面显示ECS的访问路径 /var/www/html,直接将你的文件拖入到红框中即可，在浏览器中，再次访问ECS服务器的 公网IP ，或者刷新已访问ECS服务器的公网IP页面，此时，将从Apache的测试页面变为自己的网页页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190905115746874.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU1NTQ4Mw==,size_16,color_FFFFFF,t_70)
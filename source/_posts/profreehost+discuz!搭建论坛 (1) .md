---
abbrlink: ''
categories:
- - Discuz!
- - 教程
date: '2023-01-10 13:15:45'
tags:
- Discuz!
- 教程
title: profreehost+discuz!搭建论坛 (1) 程序上传
---
# 演示效果：[阳光下的小宁宁の论坛](http://yuanning0818.unaux.com/)

## 1.去你的浏览器，搜索插件：Header Editor，然后安装；

进入“扩展选项”，点击上面的“导入和导出”

然后在输入框里输入“”https://github.azurezeng.com/static/HE-GoogleRedirect.json

![https://image.yuanning0818.tk/1673328079635.png](https://image.yuanning0818.tk/1673328079635.png)

# 2.搜索插件“Gooreplacer“，然后安装；

进入“扩展选项”，点击上面的“导入和导出”

然后点击右上角的“增加”，增加重定向


| 匹配模式                 | 目标地址                | 匹配类型 |
| ------------------------ | ----------------------- | -------- |
| www.google.com/recaptcha | recaptcha.net/recaptcha | 通配符   |
|                          |                         |          |

然后点击“提交”

# 3.去[这里]([Sign Up For A Free Account - ProFreeHost](https://profreehost.com/register/))

红圈输入邮箱，绿圈输入密码，然后点击蓝色的对号

![https://image.yuanning0818.tk/1673328388356.png](https://image.yuanning0818.tk/1673328388356.png)

人机验证

![https://image.yuanning0818.tk/1673328555339.png](https://image.yuanning0818.tk/1673328555339.png)

去邮箱验证

![https://image.yuanning0818.tk/1673328677748.png](https://image.yuanning0818.tk/1673328677748.png)

![https://image.yuanning0818.tk/1673328688855.png](https://image.yuanning0818.tk/1673328688855.png)

激活完后，他会给你跳转到一个页面，点击

![https://image.yuanning0818.tk/1673328759085.png](https://image.yuanning0818.tk/1673328759085.png)

然后，这个页面，绿圈选择你想要的二级域名后缀，红圈填写你想要的二级域名，然后点击黄色的对号

![https://image.yuanning0818.tk/1673328901285.png](https://image.yuanning0818.tk/1673328901285.png)

点击绿色的manage，然后等待

![https://image.yuanning0818.tk/1673329044058.png](https://image.yuanning0818.tk/1673329044058.png)

完成后，是这样。然后点击红色圈起来的ftp

![https://image.yuanning0818.tk/1673329223996.png](https://image.yuanning0818.tk/1673329223996.png)

先点击黄色的Control Panel，然后如图操作

![https://image.yuanning0818.tk/1673330356748.png](https://image.yuanning0818.tk/1673330356748.png)

![https://image.yuanning0818.tk/1673330529518.png](https://image.yuanning0818.tk/1673330529518.png)

![https://image.yuanning0818.tk/1673330605853.png](https://image.yuanning0818.tk/1673330605853.png)

把你的mysql用户名、数据库名、密码、地址记录下来

然后回到profreehost，点击“ftp”，点击“Show/Hide”，然后把ftp地址、用户名、密码记录下来

![https://image.yuanning0818.tk/1673329306089.png](https://image.yuanning0818.tk/1673329306089.png)

# 4.到[这里]([WinSCP :: Official Site :: Download](https://winscp.net/eng/download.php))下载winscp

![https://image.yuanning0818.tk/1673329438237.png](https://image.yuanning0818.tk/1673329438237.png)

然后打开winscp，连接站点

主机名：刚刚记录的ftp地址

#### 端口：21

用户名：刚才复制的ftp用户名

密码：刚才复制的ftp密码

点击“登录”，等待连接成功

# 5.下载discuz！

到这里[Disucz! 下载_免费搭建网站_开源建站系统下载_Discuz开源建站系统_为您提供全方位建站服务!](http://discuz.net/download.html)下载最新版

![https://image.yuanning0818.tk/1673329775144.png](https://image.yuanning0818.tk/1673329775144.png)

然后解压，进入\upload 目录

![https://image.yuanning0818.tk/1673329977168.png](https://image.yuanning0818.tk/1673329977168.png)


然后把这个目录里的所有文件上传到winscp连接的ftp中\htdocs目录

![https://image.yuanning0818.tk/1673330081011.png](https://image.yuanning0818.tk/1673330081011.png)

上传完成应该是这样

![https://image.yuanning0818.tk/1673330108726.png](https://image.yuanning0818.tk/1673330108726.png)

（其实上传速度还是~~蛮快的~~太慢啦！！！！10mb的东西要传一个多小时！啦！）

现在只是上传完了，下一期介绍安装discuz！

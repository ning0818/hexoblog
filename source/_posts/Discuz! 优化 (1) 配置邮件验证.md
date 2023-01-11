---
abbrlink: ''
categories:
- - Discuz!
date: '2023-01-11 16:19:53'
tags:
- Discuz!
title: Discuz! 优化 (1) 配置邮件验证
updated: '2023-01-11 16:39:01'
---
1.在 discuz 后台的 站长 - 邮件设置 里

![https://image.yuanning0818.tk/1673425453587.png](https://image.yuanning0818.tk/1673425453587.png)

按如下配置：

1.选择“通过 SOCKET 连接 SMTP 服务器发送(支持 ESMTP 验证)”

SMTP 服务器固定：163 网易填 ssl://smtp.163.com ，QQ 邮箱则填 ssl://smtp.qq.com
端口：465

超时(秒):30
验证：勾选（配置完成后，会进行测试验证）
发信人邮件地址：你的邮箱（例如：abc@163.com）

SMTP 身份验证用户名：你的邮箱（例如：abc@163.com）
SMTP 身份验证密码：填写授权码（生成方式见下）

2. 进入全局>注册与访问控制，如图操作![https://image.yuanning0818.tk/1673426414642.png](https://image.yuanning0818.tk/1673426414642.png)![https://image.yuanning0818.tk/1673426446020.png](https://image.yuanning0818.tk/1673426446020.png)


3.授权码获取

① 163邮箱

进入邮箱，如图操作

![https://image.yuanning0818.tk/1673425647797.png](https://image.yuanning0818.tk/1673425647797.png)

![https://image.yuanning0818.tk/1673425787455.png](https://image.yuanning0818.tk/1673425787455.png)

![https://image.yuanning0818.tk/1673425827869.png](https://image.yuanning0818.tk/1673425827869.png)

![https://image.yuanning0818.tk/1673425871508.png](https://image.yuanning0818.tk/1673425871508.png)

成功后他会给你一个授权码。

② QQ邮箱

如图操作

![https://image.yuanning0818.tk/1673426017891.png](https://image.yuanning0818.tk/1673426017891.png)

![https://image.yuanning0818.tk/1673426045079.png](https://image.yuanning0818.tk/1673426045079.png)

![https://image.yuanning0818.tk/1673426103862.png](https://image.yuanning0818.tk/1673426103862.png)

![https://image.yuanning0818.tk/1673426170053.png](https://image.yuanning0818.tk/1673426170053.png)

![https://image.yuanning0818.tk/1673426222512.png](https://image.yuanning0818.tk/1673426222512.png)

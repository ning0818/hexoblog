---
abbrlink: ''
categories: []
date: '2022-11-28 07:46:59'
tags: []
title: Linux 有趣命令,你知道几个?
updated: '2022-11-28 07:47:02'
---
**1. sl 命令**

sl是指“steam locomotive（蒸汽机车）”，你会看到一辆火车从屏幕右边开往左边。。。。。。

安装  `$ sudo apt-get install sl`
运行  `$ sl`

![](https://i.postimg.cc/zfbGLvhJ/image.png)

可以通过设置别名，给别人来个恶作剧，让ta敲ls就跑出个火车出来，不知道的肯定很有效果 O(∩_∩)O

`$alias ls=sl`

**2. fortune  命令**

输出一句话，有笑话，名言什么的，中文版有唐诗宋词，英文版有马克吐温等的诗句

安装 `$sudo apt-get install fortune-zh`   （中文版）

安装 `$sudo apt-get install fortune `     （英文版）

运行 `$fortune-zh`

![](https://i.postimg.cc/T3SRXx4B/image.png)

运行 `$fortune`

![](https://i.postimg.cc/JzyLxgzx/image.png)

**3. cowsay 命令**

用ASCII字符打印牛，羊等动物，还有个cowthink，这个是奶牛想，那个是奶牛说，差不多，哈哈

安装  `$sudo apt-get install cowsay`

运行  `$cowsay "I am not a little cow, hahaha"`

![](https://i.postimg.cc/ZKntYgpm/image.png)

`$cowsay -l`  查看其它动物的名字，然后-f跟上动物名，如

`$cowsay -f tux` "坑爹啊"

![](https://i.postimg.cc/1tKXST66/image.png)

还可以让cowsay说出fortune的内容，就像这样：

`$fortune-zh | cowsay`

![](https://i.postimg.cc/1tKXST66/image.png)

**4. cmatrix 命令**

《黑客帝国》那种矩阵风格的动画效果，各种字符不断随机下落，非常酷！

安装   `$sudo apt-get install cmatrix`

运行   `$cmatrix`

![](https://i.postimg.cc/Gt5ch1pB/image.png)

**5. figlet、toilet命令**

艺术字生成器，由ASCII字符组成，把文本显示成标题栏。此外还有banner这个命令

安装  `$sudo apt-get install figlet`

  $sudo apt-get install toilet
运行  `$figlet I Love YOU Rom-Qian`

  $toilet I Love You  Rom-Qian
![](https://i.postimg.cc/59R1zbxy/image.png)

toilet还可以添加颜色，里面的选项请自己man一下

`$ toilet -f mono12 -F gay Rom-Qian`

![](https://i.postimg.cc/sxttNfXJ/image.png)

**6. oneko 命令**

桌面上出现一直喵星人，跟着你的鼠标跑，你不动了它就睡觉。哈哈，这个挺不错

安装 `$sudo apt-get install oneko`

运行` $oneko`

![](https://i.postimg.cc/g2yfgWPv/08154053-d25763e5c5974b22b824ff8053698b9a.png)

要关掉这家伙，只能按 Ctrl+c 终止结束

**7. xeyes 命令**

在屏幕上出现一双眼睛，盯着你的鼠标指针

安装 `$sudo apt-get install xeyes`

运行 `$xeyes`

![](https://i.postimg.cc/XqwTtSCS/08154654-0671839c0c444d3c8ffd47d19f1adcb0.png)

**8. yes 命令**

输出无穷无尽的字符，按ctrl+c结束，如

`$ yes  I Love sunboy_2050`

**9. cal 9 1752**

cal是打印日历，不过这个是很奇葩的一个月

`$ cal 9 1752`

![](https://i.postimg.cc/50zGFdpY/image.png)

**10. shred**

覆盖搞乱文件，就是文档粉碎，哈哈，要把你私藏的大片种子和电影销毁，不被恢复出来，就靠它了

**11. factor**

分解因数，这个。。。小学生可以用一下

```
$ factor 60
```
![](https://i.postimg.cc/wjBGQs0d/image.png)

**12.** 挨个敲下面这一堆, aptitude没有的可以安装上

```

aptitude moo
aptitude -v moo
aptitude -vv moo
aptitude -vvv moo
aptitude -vvvv moo
aptitude -vvvvv moo
aptitude -vvvvvv moo
aptitude -vvvvvvv moo
```
运行结果：

![](https://i.postimg.cc/d3vWk7Lp/image.png)

Linux还有很多好玩的命令，不得不感叹开源系统的强大！

有兴趣的你可以研究这些命令的源码从而修改或开发自己有趣的Linux命令，寓学于乐，供大家分享娱乐！！！

英文原文： [The funny side of Linux command line](http://mylinuxbook.com/funny-side-of-linux-command-line/)

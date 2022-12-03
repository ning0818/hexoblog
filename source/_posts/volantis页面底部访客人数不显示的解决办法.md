---
abbrlink: ''
categories:
- - 博客
date: '2022-12-03 15:05:17'
tags:
- 博客
title: volantis页面底部访客人数不显示的解决办法
updated: '2022-12-03 15:05:07'
---
最近，一篇文章里，收到反馈，访客人数不能正常显示，去网上找教程，全都是说解决next，里面说的文件我都找不到，然后看见volantis是用卜算子计数的，于是我就去官网看了看，仔细寻找，发现配置里的和官网的不一样，于是我就改成了卜算子官网的代码，解决了。

解决办法：把

```
<span>本站总访问量为 <span id='busuanzi_value_site_pv'><i class="fa-solid fa-loader fa-spin fa-fw" aria-hidden="true"></i></span> 次</span>
    <span>访客数为 <span id='busuanzi_value_site_uv'><i class="fa-solid fa-loader fa-spin fa-fw" aria-hidden="true"></i></span> 人</span>
```

改为：

```mermaid
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><span id="busuanzi_container_site_pv">本站总访问量为 <span id="busuanzi_value_site_pv"></span> 次</span>
    <span>访客数为 <span id='busuanzi_value_site_uv'><i class="fa-solid fa-loader fa-spin fa-fw" aria-hidden="true"></i></span> 人</span>
```

解决！

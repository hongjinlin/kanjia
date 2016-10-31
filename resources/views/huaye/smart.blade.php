<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>知读</title>
    <!-- <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"> -->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="/css/huaye/reset.css">
    <link rel="stylesheet" href="/css/huaye/smart.css">
    <script src="/js/huaye/jquery.js" charset="utf-8" type="text/javascript"></script>

    <style>
    </style>
</head>
<body>
    <div class="static-bg">
    </div>
    <div class="main">
        <div class="header">
            <span>STARTUP APP</span>
            <h1>资讯阅读 APP</h1>
            <span>-2016-</span>
        </div>
        <div class="big-pic">
            <img src="../images/huaye/smart_bigpic.jpg" alt="">
        </div>
        <div class="product-pic">
            <div class="pro-title">
                <div>
                    <h2>界面展示</h2>
                    <span>INTERFACE DISPLAY</span>     
                </div>
            </div>
            <div class="pro-con">
                <ul>
                    <li>
                        <div class="left">
                            <img src="../images/huaye/smart_pro_1.jpg" class="shadow" alt="">
                            <p>1.启动页</p>
                        </div>
                        <div class="right">
                            <img src="../images/huaye/smart_pro_2.jpg" class="shadow" alt="">
                            <p>2.引导页</p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="../images/huaye/smart_pro_3.jpg" class="shadow" alt="">
                            <p>3.场景定位</p>
                        </div>
                        <div class="right">
                            <img src="../images/huaye/smart_pro_4.jpg" class="shadow" alt="">
                            <p>4.场景阅读页面</p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="../images/huaye/smart_pro_5.jpg" class="shadow" alt="">
                            <p>5.app首页-订阅页面</p>
                        </div>
                        <div class="right">
                            <img src="../images/huaye/smart_pro_6.jpg" class="shadow" alt="">
                            <p>6.文章详情页</p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="../images/huaye/smart_pro_7.jpg" class="shadow" alt="">
                            <p>7.发布页面</p>
                        </div>
                        <div class="right">
                            <img src="../images/huaye/smart_pro_8.jpg" class="shadow" alt="">
                            <p>8.登录页面</p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="../images/huaye/smart_pro_9.jpg" class="shadow" alt="">
                            <p>9.app首页-推荐页面</p>
                        </div>
                        <div class="right">
                            <img src="../images/huaye/smart_pro_10.jpg" class="shadow" alt="">
                            <p>10.视频页面</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <div class="back">
                <a href="/huaye">点击返回</a>
            </div>
            <p>&copy; 2016 CHAUWA CHAN DESIGN</p>
        </div>
    </div>
    <script>
        $(document).ready(function(){
            // 窗口resize事件
            $(window).resize(function(){
                init();
            });
            // 设置首页高度
            function setHomeHeight() {
                var wh = $(window).height() > 600? $(window).height() : 600;
                $(".main").css({
                    "padding-top" : wh+"px"
                });
            }
            // 初始化
            function init() {
                setHomeHeight();
            }
            init();
        });
    </script>
</body>
</html>
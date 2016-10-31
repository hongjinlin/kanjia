<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>模仿秀</title>
    <!-- <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"> -->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="/css/huaye/reset.css">
    <link rel="stylesheet" href="/css/huaye/mofan.css">
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
            <h1>视频娱乐 APP</h1>
            <span>-2016-</span>
        </div>
        <div class="big-pic">
            <img src="../images/huaye/mofan_bigpic.jpg" alt="">
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
                        <img src="../images/huaye/mofan_pro_1.png" alt="">
                    </li>
                    <li>
                        <img src="../images/huaye/mofan_pro_2.png" alt="">
                    </li>
                    <li>
                        <img src="../images/huaye/mofan_pro_3.png" alt="">
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
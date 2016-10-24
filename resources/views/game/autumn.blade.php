<!doctype html>
<html lang="zh-CN" class="room">
<head>
    <meta charset="UTF-8">
    <title>中秋博饼</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="/css/autumn/autumn_min.css">
    <link href='http://api.youziku.com/webfont/CSS/57b13146f629d80cfc431e59' rel='stylesheet' type='text/css' />
    <script src="/js/autumn/thirty_flex.js" charset="utf-8" type="text/javascript"></script>
    <script src="/js/autumn/jquery.js" charset="utf-8" type="text/javascript"></script>
    <base target="_blank" />
</head>
<body class="room">
    <div class="wrap">
        <div class="main">
            <div id="canvas-container"></div>
            <audio id="audios" preload="load">
                <source src="/sound/yao.ogg" type="audio/ogg">
                <source src="/sound/yao.mp3" type="audio/mpeg">
            </audio>
            <audio id="cheer" preload="load">
                <source src="/sound/cheer.ogg" type="audio/ogg">
                <source src="/sound/cheer.mp3" type="audio/mpeg">
            </audio>
            <audio id="clap" preload="load">
                <source src="/sound/clap.ogg" type="audio/ogg">
                <source src="/sound/clap.mp3" type="audio/mpeg">
            </audio>
            <audio id="hail" preload="load">
                <source src="/sound/hail.ogg" type="audio/ogg">
                <source src="/sound/hail.mp3" type="audio/mpeg">
            </audio>
            <div class="rule-btn rule">游戏规则</div>
            <div class="award-btn rule">活动奖品</div>
            <div class="top-scenery">
                <div class="business-pic">
                    <a href="" title="">
                        <img src="/images/autumn/autumn_lottery_top.jpg" alt="" title="">
                    </a>
                </div>
                <div class="moon"></div>
                <div class="house"></div>
                <div class="clouds"></div>
                <div class="stars"></div>
                <div class="firework"></div>
                <div class="scroll-join"></div>
            </div>
            <div class="lottery-square">
                <div class="ranking-trigger"></div>
                <div class="award-trigger"></div>
                <div class="red-wall">
                    <div class="door">
                        <span></span>
                    </div>
                </div>
                <div class="triangle clearfix">
                    <div class="left-triangle fll">
                        <span class="drum"></span>
                    </div>
                    <div class='right-triangle flr'>
                        <span class="drum"></span>
                    </div>
                </div>
                <div class="stairs">
                    <span></span>
                </div>
                <div class="bowl" id="lottery" shark="yes">
                    <span class="posi0 dice1"></span>
                    <span class="posi1 dice2"></span>
                    <span class="posi2 dice3"></span>
                    <span class="posi3 dice4"></span>
                    <span class="posi4 dice5"></span>
                    <span class="posi5 dice6"></span>
                    <div class="bowl-business-icon">
                        <img src="" alt="" title="">
                    </div>
                </div>
                <div class="time-left" >
                    <em>剩余:</em>
                    <span id="changes" class="oh">10</span>
                    <em>次</em>
                </div>
            </div>
        </div>
    </div>
    <!-- 资料填写 -->
    <div class="fill-info">
        <div class="fill-info-inner">
            <div class="fill-info-box">
                <form action="">
                    <div class="form-title">
                        <h2>个人资料</h2>
                        <i class="close"></i>
                    </div>
                    <div class="user-info">
                        <div class="user-name">
                            <div class="lab">
                                <label for="username">姓名：</label>
                            </div>
                            <div class="inp">
                                <input type="text" id="username">
                            </div>
                        </div>
                        <div class="user-tel">
                            <div class="lab">
                                <label for="tel">电话：</label>
                            </div>
                            <div class="inp">
                                <input type="text" id="phone">
                            </div>
                        </div>
                        <div class="user-address">
                            <div class="lab">
                                <label for="address">地址：</label>
                            </div>
                            <div class="tex">
                                <textarea name="" id="address"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="info-btn">
                        <a href="javascript:void(0);" onclick="return false;" title="" id="register">确认提交</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- 积分排行 -->
    <div class="ranking">
        <div class="scroll-title score">
            <i class="left"></i>
            <i class="right"></i>
        </div>
        <div class="ranking-list">
            <div class="close-btn">
                <i class="close"></i>
            </div>
            <div class="my-score">
                <div class="my-score-score">
                    <span class="fll oh">我的积分：</span>
                    <span class="fll oh" id="score"></span>
                </div>
                <div class="myscore-grade">
                    <span class="fll oh" style="max-width:70%;">我的排名：</span>
                    <span class="fll oh" id="grade"></span>
                </div>
            </div>
            <div class="ranking-list-inner">
                <ul>
                </ul>
                <div class="spinner">
                    <div class="spinner-container container1">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="spinner-container container2">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="spinner-container container3">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                </div>
                <div class="ajax-info">暂无数据</div>
            </div>
        </div>
    </div>
    <!-- 奖品 -->
    <div class="award">
        <div class="scroll-title result">
            <i class="left"></i>
            <i class="right"></i>
        </div>
        <div class="award-list">
            <div class="close-btn">
                <i class="close"></i>
            </div>
            <div class="award-title">
                <span>中奖时间</span>
                <span>奖项</span>
                <span>奖品</span>
            </div>
            <div class="award-data-btn">
                <a href="javascript:void(0);" onclick="return false;" title="">修改个人资料</a>
            </div>
            <div class="award-list-inner">
                <ul class="eee">
                </ul>
                <div class="spinner">
                    <div class="spinner-container container1">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="spinner-container container2">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                    <div class="spinner-container container3">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                        <div class="circle4"></div>
                    </div>
                </div>
                <div class="ajax-info">暂无数据</div>
            </div>
        </div>
    </div>
    <div class="prize-banners js-none">
        <div class="close-btn">
            <div class="close"></div>
        </div>
        <div class="prize-banners-inner">
            <!-- 状元插金花 -->
            <div class="best js-none">
                <div class="canvas-bg"></div>
                <div class="prize-banner-bg-light light-effects"></div>
                <div class="img"></div>
                <div class="title"></div>
                <div class="prize">现金2000元</div>
            </div>
            <!-- 状元 -->
            <div class="scholar js-none">
                <div class="hat">
                    <span class="hat-main"></span>
                    <span class="left-brim brim"></span>
                    <span class="right-brim brim"></span>
                    <span class="left-red redbox"></span>
                    <span class="right-red redbox"></span>
                </div>
                <div class="canvas-bg"></div>
                <div class="prize-banner-bg-light light-effects"></div>
                <div class="img"></div>
                <div class="title minijianjianzhi oh"></div>
                <div class="prize"></div>
            </div>
            <!-- 榜眼 -->
            <div class="second type2 js-none">
                <div class="img"></div>
                <div class="canvas-bg"></div>
                <div class="prize-banner-bg-light light-effects"></div>
                <div class="title minijianjianzhi oh"></div>
                <div class="prize"></div>
                <span class="left-title minijianjianzhi">对</span>
                <span class="right-title minijianjianzhi">堂</span>
            </div>
            <!-- 探花 -->
            <div class="third type2 js-none">
                <div class="img"></div>
                <div class="canvas-bg"></div>
                <div class="title minijianjianzhi oh"></div>
                <div class="prize-banner-bg-light light-effects"></div>
                <div class="prize"></div>
                <span class="left-title minijianjianzhi">三</span>
                <span class="right-title minijianjianzhi">红</span>
            </div>
            <!-- 四进、二举、一秀 -->
            <div class="four type3 js-none">
                <div class="img"></div>
                <div class="bg-light">
                    <span class="bot"></span>
                    <span class="up"></span>
                </div>
                <div class="glim">
                    <span class="bigger"></span>
                    <span class="middle"></span>
                    <span class="small"></span>
                </div>
                <div class="title minijianjianzhi oh"></div>
                <div class="prize oh"></div>
            </div>
            <!-- 未中奖 -->
            <div class="lose js-none">
                <div class="title" style="display:none;"></div>
                <div class="prize"></div>
            </div>
            <!-- 抽奖次数用完 -->
            <div class="no-chanse js-none">
                <div class="msg">
                    您今日的博饼次数已达上限
                </div>
                <div class="code-change">
                </div>
                <div class="title" style="display:none;"></div>
            </div>
            <!-- 错误 -->
            <div class="lottery-error js-none">
                <!-- <div class="msg">抱歉<br>出错了</div> -->
                <div class="prize"></div>
                <div class="title" style="display:none;"></div>
            </div>
        </div>
    </div>
    <!-- 活动规则 -->
    <div class="autumn-rule">
        <div class="scroll-title rule">
            <i class="left"></i>
            <i class="right"></i>
        </div>
        <div class="autumn-rule-inner">
            <div class="close-btn">
                <i class="close"></i>
            </div>
            <div class="rule-detail">
                <img src="/images/autumn/autumn_rule.gif" alt="" title="">
            </div>
        </div>
    </div>
    <!-- 活动奖品 -->
    <div class="autumn-award-intro">
        <div class="scroll-title award-intro">
            <i class="left"></i>
            <i class="right"></i>
        </div>
        <div class="award-intro-list">
            <div class="close-btn">
                <i class="close"></i>
            </div>
 <!--            <div class="award-intro-title">
                <span>名次</span>
                <span>奖品</span>
                <span>数量</span>
            </div> -->
            <div class="autumn-award-intro-inner">
                <div class="award-intro-detail">
          <!--           <ul>
                        <li>
                            <span class="level">状元插金花</span>
                            <span class="goods">高压锅</span>
                            <span class="number">1</span>
                        </li>
                    </ul> -->
                    <!-- <img src="" alt="" title=""> -->
                </div>
            </div>
        </div>
    </div>
    <div class="bargain-footer" >Copyright © 2015 - 2016 云媒互动. All Rights Reserved</div>
    <script src="/js/autumn/autumn.js" charset="utf-8" type="text/javascript"></script>
    <script type="text/javascript">
    </script>
    <script type="text/javascript" src="http://tajs.qq.com/stats?sId=57975707" charset="UTF-8"></script>
</body>
</html>
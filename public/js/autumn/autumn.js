$(document).ready(function() {
    setTimeout(function() {
        function formRegular(){}formRegular.prototype.regular=function(a,b){if(a.test(b)){return true}else{return false}};formRegular.prototype.phone=function(c){var r=/^1[3|4|5|7|8]\d{9}$/;return this.regular(r,c)};formRegular.prototype.tel=function(c){var r=/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;return this.regular(r,c)};formRegular.prototype.empty=function(c){if(c){return true}else{return false}};formRegular.prototype.mail=function(){};var Fireworks=function(obj,param){var self=this;this.box=obj;this.pause=true;this.param=param;var rand=function(rMi,rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi)};var hitTest=function(x1,y1,w1,h1,x2,y2,w2,h2){return !(x1+w1<x2||x2+w2<x1||y1+h1<y2||y2+h2<y1)};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1000/60)}}();self.init=function(){self.dt=0;self.oldTime=Date.now();self.canvas=document.createElement("canvas");self.canvasContainer=self.box;var canvasContainerDisabled=self.box[0];self.canvas.onselectstart=function(){return false};self.canvas.width=self.cw=self.canvasContainer.width();self.canvas.height=self.ch=self.canvasContainer.height();self.count=self.param.count||3;self.particles=[];self.partCount=self.param.partCount||55;self.fireworks=[];self.mx=self.cw/2;self.my=self.ch/2;self.currentHue=120;self.timer=self.param.timer||2000;self.fly=self.param.fly||false;self.partSpeed=self.param.partSpeed||3;self.partSpeedVariance=self.param.partSpeedVariance||6;self.partWind=self.param.partWind||13;self.partFriction=self.param.partFriction||20;self.partGravity=1;self.hueMin=self.param.hueMin||1;self.hueMax=self.param.hueMax||360;self.fworkSpeed=self.param.fworkSpeed||2;self.fworkAccel=self.param.fworkAccel||4;self.hueVariance=self.param.hueVariance||100;self.flickerDensity=self.param.flickerDensity||36;self.clearAlpha=25;self.canvasContainer.append(self.canvas);self.ctx=self.canvas.getContext("2d");self.ctx.lineCap="round";self.ctx.lineJoin="round";self.lineWidth=1;self.bindEvents();self.canvasLoop();self._start();self.canvas.onselectstart=function(){return false}};var Particle=function(x,y,hue){this.x=x;this.y=y;this.coordLast=[{x:x,y:y},{x:x,y:y},{x:x,y:y}];this.angle=rand(0,360);this.speed=rand(((self.partSpeed-self.partSpeedVariance)<=0)?1:self.partSpeed-self.partSpeedVariance,(self.partSpeed+self.partSpeedVariance));this.friction=1-self.partFriction/100;this.gravity=self.partGravity/2;this.hue=rand(self.hueMin,self.hueMax);this.brightness=rand(50,80);this.alpha=rand(40,100)/100;this.decay=rand(10,50)/1000;this.wind=(rand(0,self.partWind)-(self.partWind/2))/25;this.lineWidth=self.lineWidth};Particle.prototype.update=function(index){var radians=this.angle*Math.PI/180;var vx=Math.cos(radians)*this.speed;var vy=Math.sin(radians)*this.speed+this.gravity;this.speed*=this.friction;this.coordLast[2].x=this.coordLast[1].x;this.coordLast[2].y=this.coordLast[1].y;this.coordLast[1].x=this.coordLast[0].x;this.coordLast[1].y=this.coordLast[0].y;this.coordLast[0].x=this.x;this.coordLast[0].y=this.y;this.x+=vx*self.dt;this.y+=vy*self.dt;this.angle+=this.wind;this.alpha-=this.decay;if(!hitTest(0,0,self.cw,self.ch,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)||this.alpha<0.05){self.particles.splice(index,1)}};Particle.prototype.draw=function(){var coordRand=(rand(1,3)-1);self.ctx.beginPath();self.ctx.moveTo(Math.round(this.coordLast[coordRand].x),Math.round(this.coordLast[coordRand].y));self.ctx.lineTo(Math.round(this.x),Math.round(this.y));self.ctx.closePath();self.ctx.strokeStyle="hsla("+this.hue+", 100%, "+this.brightness+"%, "+this.alpha+")";self.ctx.stroke();if(self.flickerDensity>0){var inverseDensity=50-self.flickerDensity;if(rand(0,inverseDensity)===inverseDensity){self.ctx.beginPath();self.ctx.arc(Math.round(this.x),Math.round(this.y),rand(this.lineWidth,this.lineWidth+3)/2,0,Math.PI*2,false);self.ctx.closePath();var randAlpha=rand(50,100)/100;self.ctx.fillStyle="hsla("+this.hue+", 100%, "+this.brightness+"%, "+randAlpha+")";self.ctx.fill()}}};self.createParticles=function(x,y,hue){var countdown=self.partCount;while(countdown--){self.particles.push(new Particle(x,y,hue))}};self.updateParticles=function(){var i=self.particles.length;while(i--){var p=self.particles[i];p.update(i)}};self.drawParticles=function(){var i=self.particles.length;while(i--){var p=self.particles[i];p.draw()}};var Firework=function(startX,startY,targetX,targetY){this.x=startX;this.y=startY;this.startX=startX;this.startY=startY;this.hitX=false;this.hitY=false;this.coordLast=[{x:startX,y:startY},{x:startX,y:startY},{x:startX,y:startY}];this.targetX=targetX;this.targetY=targetY;this.speed=self.fworkSpeed;this.angle=Math.atan2(targetY-startY,targetX-startX);this.shockwaveAngle=Math.atan2(targetY-startY,targetX-startX)+(90*(Math.PI/180));this.acceleration=self.fworkAccel/100;this.hue=self.currentHue;this.brightness=rand(70,100);this.alpha=1;this.lineWidth=self.lineWidth;this.targetRadius=1};Firework.prototype.update=function(index){self.ctx.lineWidth=this.lineWidth;vx=Math.cos(this.angle)*this.speed,vy=Math.sin(this.angle)*this.speed;this.speed*=1+this.acceleration;this.coordLast[2].x=this.coordLast[1].x;this.coordLast[2].y=this.coordLast[1].y;this.coordLast[1].x=this.coordLast[0].x;this.coordLast[1].y=this.coordLast[0].y;this.coordLast[0].x=this.x;
        this.coordLast[0].y=this.y;if(self.showTarget){if(this.targetRadius<8){this.targetRadius+=0.25*self.dt}else{this.targetRadius=1*self.dt}}if(this.startX>=this.targetX){if(this.x+vx<=this.targetX){this.x=this.targetX;this.hitX=true}else{this.x+=vx*self.dt}}else{if(this.x+vx>=this.targetX){this.x=this.targetX;this.hitX=true}else{this.x+=vx*self.dt}}if(this.startY>=this.targetY){if(this.y+vy<=this.targetY){this.y=this.targetY;this.hitY=true}else{this.y+=vy*self.dt}}else{if(this.y+vy>=this.targetY){this.y=this.targetY;this.hitY=true}else{this.y+=vy*self.dt}}if(this.hitX&&this.hitY){var randExplosion=rand(0,9);self.createParticles(this.targetX,this.targetY,this.hue);self.fireworks.splice(index,1)}};Firework.prototype.draw=function(){self.ctx.lineWidth=this.lineWidth;var coordRand=(rand(1,3)-1);self.ctx.beginPath();if(!self.fly){self.ctx.moveTo(Math.round(this.coordLast[coordRand].x),Math.round(this.coordLast[coordRand].y))}self.ctx.lineTo(Math.round(this.x),Math.round(this.y));self.ctx.closePath();self.ctx.strokeStyle="hsla("+this.hue+", 100%, "+this.brightness+"%, "+this.alpha+")";self.ctx.stroke()};self.createFireworks=function(startX,startY,targetX,targetY){if(self.fireworks.length<3){self.fireworks.push(new Firework(startX,startY,targetX,targetY))}};self.updateFireworks=function(){var i=self.fireworks.length;while(i--){var f=self.fireworks[i];f.update(i)}};self.drawFireworks=function(){var i=self.fireworks.length;while(i--){var f=self.fireworks[i];f.draw()}};self.bindEvents=function(){$(window).on("resize",function(){clearTimeout(self.timeout);self.timeout=setTimeout(function(){self.ctx.lineCap="round";self.ctx.lineJoin="round"},100)});$(self.canvas).on("mousedown",function(e){var randLaunch=rand(0,5);self.mx=e.pageX-self.canvasContainer.offset().left;self.my=e.pageY-self.canvasContainer.offset().top;self.currentHue=rand(self.hueMin,self.hueMax);self.createFireworks(self.cw/2,self.ch,self.mx,self.my);$(self.canvas).on("mousemove.fireworks",function(e){var randLaunch=rand(0,5);self.mx=e.pageX-self.canvasContainer.offset().left;self.my=e.pageY-self.canvasContainer.offset().top;self.currentHue=rand(self.hueMin,self.hueMax);self.createFireworks(self.cw/2,self.ch,self.mx,self.my)})});$(self.canvas).on("mouseup",function(e){$(self.canvas).off("mousemove.fireworks")})};self.clear=function(){self.particles=[];self.fireworks=[];self.ctx.clearRect(0,0,self.cw,self.ch)};self.updateDelta=function(){var newTime=Date.now();self.dt=(newTime-self.oldTime)/16;self.dt=(self.dt>5)?5:self.dt;self.oldTime=newTime};self._pause=function(){self.pause=true;self.clear()};self._renew=function(){self.pause=false;self._start()};self.canvasLoop=function(){requestAnimFrame(self.canvasLoop,self.canvas);self.updateDelta();self.ctx.globalCompositeOperation="destination-out";self.ctx.fillStyle="rgba(0,0,0,"+self.clearAlpha/100+")";self.ctx.fillRect(0,0,self.cw,self.ch);self.ctx.globalCompositeOperation="lighter";self.updateFireworks();self.updateParticles();self.drawFireworks();self.drawParticles()};self._start=function(){self.clear();var ins=0;for(var i=0;i<self.count;i++){setTimeout(function(){ins++;self.createFireworks(self.canvasContainer.width()*0.25*ins,self.canvasContainer.height(),rand(self.canvasContainer.width()*0.18*ins,self.canvasContainer.width()*0.33*ins),rand(self.canvasContainer.height()*0.1,self.canvasContainer.height()*0.5))},100*Math.floor(rand(0,3)))}setTimeout(function(){if(!self.pause){self._start()}},self.timer)};self.init()};
        // 烟花
        var best_fwork, //插金花
            scholar, // 状元
            second,
            third;
        $(".prize-banners").removeClass("js-none").find(".prize-banners-inner").children().removeClass("js-none")
        best_fwork = new Fireworks($(".prize-banners .best .canvas-bg"),{
            "fly" : true,
            "timer" : 1000,
            "fworkSpeed" : 12,
            "partSpeedVariance" : 8,
            "hueMin" : 50,
            "hueMax" : 51,
            "partCount" : 55,
        });
        scholar =  new Fireworks($(".prize-banners .scholar .canvas-bg"),{
            "fly" : true,
            "timer" : 1000,
            "fworkSpeed" : 50,
            "partSpeedVariance" : 8,
            "hueMin" : 0,
            "hueMax" : 1,
            "partCount" : 55,
        });
        second =  new Fireworks($(".prize-banners .second .canvas-bg"),{
            "fly" : true,
            "timer" : 1000,
            "fworkSpeed" : 12,
            "partSpeedVariance" : 8,
            "hueMin" : 300,
            "hueMax" : 301,
            "partCount" : 55,
        });


        third =  new Fireworks($(".prize-banners .third .canvas-bg"),{
            "fly" : true,
            "timer" : 2000,
            "partSpeedVariance" : 8,
            "hueMin" : 300,
            "hueMax" : 301,
            "partCount" : 55,
        });                

        $(".prize-banners").addClass("js-none").find(".prize-banners-inner").children().addClass("js-none")
        // 移动端hover效果
        document.body.addEventListener("touchstart", function(){});
        function defaultdata(a, b) {
            if(!a) {
                return b;
            } else {
                return a;
            }
        }
        function selectFrom(startNumber, endNumber) {
            var choice = endNumber - startNumber + 1;
            return Math.floor(Math.random() * choice + startNumber)
        }
        ;(function(document,window,undefined){
            var prizer_scroll,result = [
                {
                    "cn": ".lose",
                    "title": "未中奖",
                    "song" : undefined
                },
                {
                    "cn" : ".best",
                    "title" : "状元插金花",
                    "song" : "#cheer"
                },
                {
                    "cn" : ".scholar",
                    "title" : "六杯红",
                    "song" : "#hail"
                },
                {
                    "cn" : ".scholar",
                    "title" : "遍地锦",
                    "song" : "#hail"
                },
                {
                    "cn" : ".scholar",
                    "title" : "五红",
                    "song" : "#hail"
                },
                {
                    "cn" : ".scholar",
                    "title" : "五子登科",
                    "song" : "#hail"
                },
                {
                    "cn" : ".scholar",
                    "title" : "四点红",
                    "song" : "#hail"
                },
                {
                    "cn" : ".second",
                    "title" : "对堂",
                    "song" : undefined
                },
                {
                    "cn" : ".third",
                    "title" : "三红",
                    "song" : undefined
                },
                {
                    "cn" : ".type3",
                    "title" : "四进",
                    "song" : undefined
                },
                {
                    "cn" : ".type3",
                    "title" : "二举",
                    "song" : undefined
                },
                {
                    "cn" : ".type3",
                    "title" : "一秀",
                    "song" : undefined
                },
                {
                    "cn" : ".no-chanse",
                    "title" : "抱歉。您今日的博饼次数已达到上限",
                    "song" : undefined
                },
                {
                    "cn" : ".lottery-error",
                    "title" : "错误",
                    "song" : undefined
                }
            ]
            /*
             * 功能：时间转换
             */
            function  formatDate(now)   {
                var  _timer = new Date(now);
                var  year = _timer.getFullYear();
                var  month = _timer.getMonth()+1;
                var  date = _timer.getDate();
                return  year+"-"+month+"-"+date;
            }
            /*
             * 功能：模拟animate
             * 作者：LYF
             * 最后修改时间：2016.03.24
             */
            function animates(el, css, timer, fn) {
                if (!el) return;
                if(Math.abs(el.offsetWidth - el.parentNode.offsetWidth) > 0) {
                    var callback = function () {
                        el.removeEventListener('webkitTransitionEnd', callback);
                        el.style['-webkit-transition'] = '';
                        el.style['-moz-transition'] = '';
                        el.style['transition'] = '';
                        el.style['-o-transition'] = '';
                        if(fn) {
                            fn();
                        }
                    };
                    el.addEventListener('webkitTransitionEnd', callback);
                    for (var k in css) {
                    //这里暂时只考虑webkit内核
                        el.style['-webkit-transition'] = k + ' ' + timer + 's linear';
                        el.style['-moz-transition'] = k + ' ' + timer + 's linear';
                        el.style['transition'] = k + ' ' + timer + 's linear';
                        el.style['-o-transition'] = k + ' ' + timer + 's linear';
                    }
                    for (var k in css) {
                        el.style[k] = css[k];
                    }
                }
            }
            /*
             * 功能：摇奖信息生成
             */
            function creatResultData(obj,prize) {
                var box = $(".prize-banners");
                box.fadeIn(200).find(obj.cn).removeClass("js-none").siblings().addClass("js-none");
                box.find(obj.cn).children(".prize").text(prize).siblings(".title").text(obj.title);
                if(obj.song) {
                    $(obj.song)[0].play();
                }
            }
            /*
             * 功能：摇奖结果
             */
            function resultShow(id, prize) {
                if(result[id]&&result[id].cn&&result[id].title) {
                    // bworks._pause();
                    $("#canvas-container").hide();
                    creatResultData(result[id],prize);
                    if(id==1) {
                        best_fwork._renew();
                    }
                    if(id>=2 && id<=6) {
                        scholar._renew();
                    }
                    if(id==7) {
                        second._renew();
                    }
                    if(id==8) {
                        third._renew();              
                    }
                }
            }
            /*
             * 功能：滚动消息
             */
            function scrollMsg() {
                this.$box = $(".scroll-join");
                this.eleArr = new Array();
                this._busy = false;

                if(this.$box.children(".scroll-ele").length) {
                    this.newEleActive();
                }
            }
            scrollMsg.prototype = {
                newEleActive: function() {
                    this._busy = true;
                    var _ele = this.$box.children(".scroll-ele");
                    if(_ele.length < 3) {
                        if(this.eleArr.length) {
                            this.$box.append(this.eleArr[0]);
                            this.eleArr.splice(0,1);
                            if(this.$box.children(".news").length != 0) {
                                var eles = this.$box.children(".news");
                                var _that = this;
                                var randArr = new Array(), inx = 0;
                                eles.removeClass("news");
                                if(!_ele.hasClass("posi-top")) {
                                    randArr[inx] = "posi-top";
                                    inx++;
                                }
                                if(!_ele.hasClass("posi-middle")) {
                                    randArr[inx] = "posi-middle";
                                    inx++;
                                }
                                if(!_ele.hasClass("posi-bottom")){
                                    randArr[inx] = "posi-bottom";
                                    inx++;
                                }

                                eles.addClass(randArr[selectFrom(0,inx-1)]);
                                animates(eles[0], {"transform": " translate(-"+$("body").width()*2+"px,0)"}, selectFrom(4,6), function() {
                                    eles.remove();
                                    _that.newEleActive();
                                })
                                setTimeout(function() {
                                    _that.newEleActive();
                                },Math.random()*8000)
                            }
                        } else {
                            var _this = this;
                            this._busy = false;
                            bulletScreen();
                            setTimeout(function() {
                                _this.newEleActive();
                            },8000)
                        }
                    } else {
                        // if(!_ele.hasClass("go-left")) {
                        //     var _that = this;
                        //     animates(_ele[0], {"left": "-100%"}, 8, function() {
                        //         _ele.remove();
                        //         _that.newEleActive();
                        //     })
                        // }
                        var _this = this;
                        setTimeout(function() {
                            _this.newEleActive();
                        },8000)
                    }
                },
                // 添加新的中奖人员
                addNewEle: function(face, name, award) {
                    var str =
                        "<div class='scroll-ele news'>" +
                            "<a href='javascript:void(0);' onclick='return false;' title=''>" +
                                "<div class='join-img'>" +
                                    "<img src="+ face +" alt='' title=''>" +
                                "</div>" +
                                "<div class='msg'>" +
                                    "<h3>" +
                                        "<span>恭喜:</span>" +
                                        "<em>"+ name +"</em>" +
                                    "</h3>" +
                                    "<p>获得" +
                                        award +
                                    "</p>" +
                                "</div>" +
                            "</a>" +
                        "</div>";
                    this.eleArr.push(str);
                    if(!this._busy) {
                        this.newEleActive();
                    }
                }
            }
            prizer_scroll = new scrollMsg();
            /*
             * 功能：滚动到底部事件(基于JQ)
             */
            function scrollToBottom(ele,callback) {
                this.$box = ele,
                this.$inner = this.$box.children(),
                this._callback = callback;

                this._start();
            }
            scrollToBottom.prototype = {
                _start: function() {
                    var diff = this.$inner.height() - this.$box.height();
                    if(diff > 0) {
                        var _this = this;
                        return _this.$box.scroll(function() {
                            if(_this.$box.scrollTop() >= (diff - 10)) {
                                _this.$box.unbind("scroll");
                                _this._callback();
                            }
                        });
                    }
                }
            }
            $.fn.YMHDscroll = function(fn) {
                var _scroll = new scrollToBottom(this, fn);
            }
            // 是否overflow
            $.fn.hasOverflow = function() {
                if(this.children().length != 0) {
                    if(this.children().height() > this.height()) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            // 我的奖品加载数据函数
            function awardLoading(box,pages) {
                box.children("ul").html("");
                box.find(".spinner").show();
                box.find(".ajax-info").hide();
                $.ajax({
                    type: "get",
                    url: "/ActMidAutumn/my",
                    data: {},
                    dataType:"json",
                    success:function(data) {
                        if(data.length) {
                            var str = "",wrap = $(".award");
                            for(var i = 0,len = data.length;i < len;i++) {
                                str +=
                                "<li>" +
                                    "<a href='javascript:void(0);' onclick='return false;' title=''>" +
                                        "<span>"+ formatDate(data[i].time*1000)  +"</span>" +
                                        "<span>"+ data[i].hit +"</span>" +
                                        "<span>"+ data[i].award +"</span>" +
                                    "</a>" +
                                "</li>";
                            }
                            box.children("ul").html(str);
                            // if(wrap.css("display") == "none") {
                            //     wrap.addClass("showheight");
                            // }
                            // if(!box.hasOverflow()) {
                            //     awardLoading(box);
                            // } else {
                            //     $(".award-list-inner").YMHDscroll(function() {
                            //         awardLoading($(".award-list-inner"));
                            //     })
                            // }
                            // if(wrap.hasClass("showheight")) {
                            //     wrap.removeClass("showheight");
                            // }
                        } else {
                            box.find(".ajax-info").show();
                        }
                        box.find(".spinner").hide();
                    },
                    error:function(data) {
                        box.find(".spinner").hide();
                        box.find(".ajax-info").show();
                    }
                })
            }
            // 积分排行加载数据函数
            function rankingLoading(box,pages) {
                box.children("ul").html("");
                box.find(".spinner").show();
                box.find(".ajax-info").hide();
                $.ajax({
                    type: "get",
                    url: "/ActMidAutumn/rank",
                    data: {},
                    dataType:"json",
                    success:function(data) {
                        if(data.ret == 1 && data.rank.length) {
                            var str = "",wrap = $(".ranking");
                            $("#score").text(defaultdata(data.score,"-"));
                            if(data.me === false) {
                                $("#grade").text("-");
                            } else {
                                $("#grade").text(defaultdata(data.me+1,"-"));
                            }
                            for(var i = 0,len = data.rank.length;i < len;i++) {
                                str +=
                                "<li>" +
                                    "<a href='javascript:void(0);''  title=''>" +
                                        "<i></i>" +
                                        "<em>"+(i+1)+"</em>" +
                                        "<span>"+data.rank[i].nickname+"</span>" +
                                        "<strong>"+ data.rank[i].score +"分</strong>" +
                                    "</a>"+
                                "</li>";
                            }
                            box.children("ul").append(str);
                            // if(wrap.css("display") == "none") {
                            //     wrap.addClass("showheight");
                            // }
                            // if(!box.hasOverflow()) {
                            //     rankingLoading(box);
                            // } else {
                            //     $(".ranking-list-inner").YMHDscroll(function() {
                            //         rankingLoading($(".ranking-list-inner"));
                            //     })
                            // }
                            // if(wrap.hasClass("showheight")) {
                            //     wrap.removeClass("showheight");
                            // }
                        } else {
                            box.find(".ajax-info").show();
                            $("#score").text("-");
                            $("#grade").text("-");
                        }
                        box.find(".spinner").hide();
                    },
                    error:function(data) {
                        box.find(".spinner").hide();
                        box.find(".ajax-info").show();
                        $("#score").text("-");
                        $("#grade").text("-");
                    }
                })
            }
            /*
             * 功能：排行、奖品注册弹窗
             */
            // 排行
            $(".ranking-trigger").click(function() {
                rankingLoading($(".ranking-list-inner"));
                $(".ranking").fadeIn(0).find(".scroll-title").addClass("full-w");
            })
            $(".ranking").find(".close").click(function() {
                $(".ranking").fadeOut().find(".scroll-title").removeClass("full-w");
            })
            // 奖品
            $(".award-trigger").click(function() {
                awardLoading($(".award-list-inner"));
                $(".award").fadeIn(0).find(".scroll-title").addClass("full-w");
            })
            $(".award").find(".close").click(function() {
                $(".award").fadeOut().find(".scroll-title").removeClass("full-w");
            })
            // 资料填写
            $(".award-data-btn a").click(function() {
                getUserInfo();
                $(".award").fadeOut(0).find(".scroll-title").removeClass("full-w");
                $(".fill-info").fadeIn(0);
            })
            $(".fill-info").find(".close").click(function() {
                $(".fill-info").fadeOut();
            })
            // 中奖弹窗
            $(".prize-banners").click(function(e) {
                $(".prize-banners").fadeOut(200);
                setTimeout(function() {
                    window.addEventListener('devicemotion', deviceMotionHandler, false);
                    $(".bowl").on("click",clickLottery);
                    $("#lottery").attr({"shark": "yes"});
                })
                $("#canvas-container").show();
                if(best_fwork) {
                    best_fwork._pause();
                }
                if(scholar) {
                    scholar._pause();
                }
                if(second) {
                    second._pause();
                }
                if(third) {
                    second._pause();
                }
            })
            // 规则
            $(".rule-btn").click(function() {
                $(".autumn-rule").fadeIn(0).find(".scroll-title").addClass("full-w");;
            })
            $(".autumn-rule .close-btn").click(function() {
                $(".autumn-rule").fadeOut(0).find(".scroll-title").removeClass("full-w");
            })
            // 奖品说明
            $(".award-btn").click(function() {
                $(".autumn-award-intro").fadeIn(0).find(".scroll-title").addClass("full-w");;
            })
            $(".autumn-award-intro .close-btn").click(function() {
                $(".autumn-award-intro").fadeOut(0).find(".scroll-title").removeClass("full-w");
            })       
            /*
             * 功能：摇一摇事件监听
             */
            var shake = 3000,
            last_update=0,
            last_time = 0,
            curTime,
            count = 0,
            x=y=z=last_x=last_y=last_z=0,firstcount=1,canlottery = 1;
            if(window.DeviceMotionEvent) {
                window.addEventListener('devicemotion', deviceMotionHandler, false);
            }
            $(".bowl").on("click",clickLottery);
            function clickLottery(evt) {
                evt.preventDefault();
                startRoll();
            }
            function deviceMotionHandler(eventData) {
                eventData.preventDefault();
                curTime = new Date().getTime();
                var diffTime = curTime - last_update;
                if (diffTime > 100) {
                    var acceleration = eventData.accelerationIncludingGravity;
                    last_update = curTime;
                    x = acceleration.x;
                    y = acceleration.y;
                    z = acceleration.z;
                    var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
                    last_x = x;
                    last_y = y;
                    last_z = z;
                    if (speed > shake) {
                        if(count < 1) {
                            count++
                        } else {
                            count = 0;
                            startRoll();
                        }
                    }
                }
            }
            /*
             * 功能：开始摇骰子
             * 步骤：1、开始摇
             *       2、申请数据
             *       3、停止
             */
            function startRoll() {
                window.removeEventListener('devicemotion', deviceMotionHandler, false);
                $(".bowl").off("click",clickLottery);
                if($("#lottery").attr("shark") == "yes") {
                    $("#lottery").attr({"shark": "no"});
                    last_time = curTime;
                    $(".bowl").addClass("active");
                    $("#audios")[0].currentTime = 0;
                    $("#audios")[0].play();
                    // 有中奖
                    setTimeout(function() {
                        // for(var i = 0, len = data.dices.length;i < len; i++) {
                        //     $("#lottery span").eq(i).attr({"class": "posi"+ (i) +" dice" + data.dices[i]})
                        // }
                        $(".bowl").removeClass("active");
                        $("#audios")[0].pause();
                        setTimeout(function() {
                            resultShow(Math.floor(Math.random()*11), "100积分");
                            firstcount = 1;
                            canlottery = 1;    
                        }, 1000)
                    },900)
                    // $.ajax({
                    //     type: "get",
                    //     url: "/ActMidAutumn/luck",
                    //     data: {},
                    //     dataType: "json",
                    //     success: function(data) {
                    //         if(data.ret == 1) {
                    //             $("#changes").text(data.luck);
                    //             if(data.hit) {
                    //                 // 有中奖
                    //                 setTimeout(function() {
                    //                     for(var i = 0, len = data.dices.length;i < len; i++) {
                    //                         $("#lottery span").eq(i).attr({"class": "posi"+ (i) +" dice" + data.dices[i]})
                    //                     }
                    //                     $(".bowl").removeClass("active");
                    //                     $("#audios")[0].pause();
                    //                     setTimeout(function() {
                    //                         resultShow(data.hit, data.title);
                    //                         firstcount = 1;
                    //                         canlottery = 1;    
                    //                     }, 1000)
                    //                 },900)
                    //             } else {
                    //                 // 没中奖
                    //                 setTimeout(function() {
                    //                     for(var i = 0, len = data.dices.length;i < len; i++) {
                    //                         $("#lottery span").eq(i).attr({"class": "posi"+ (i) +" dice" + data.dices[i]});
                    //                     }
                    //                     $(".bowl").removeClass("active");   
                    //                     $("#audios")[0].pause();
                    //                     setTimeout(function() {
                    //                         resultShow(0, "获得"+data.title);
                    //                         firstcount = 1;
                    //                         canlottery = 1; 
                    //                     },1000)
                    //                 },900)
                    //             }
                    //         } else if (data.ret == -1){
                    //             $("#changes").text(0);
                    //             $(".bowl").removeClass("active");
                    //             setTimeout(function() {
                    //                 firstcount = 1;
                    //                 canlottery = 1;
                    //                 $("#audios")[0].pause();      
                    //             },1000)
                    //             resultShow(12, "no-chanse");
                    //         } else if (data.ret == 0) {
                    //            $(".bowl").removeClass("active");
                    //             setTimeout(function() {
                    //                 firstcount = 1;
                    //                 canlottery = 1;
                    //                 $("#audios")[0].pause();      
                    //             },1000)
                    //             resultShow(13, data.msg);        
                    //         } else {
                    //            $(".bowl").removeClass("active");
                    //             setTimeout(function() {
                    //                 firstcount = 1;
                    //                 canlottery = 1;
                    //                 $("#audios")[0].pause();      
                    //             },1000)
                    //             resultShow(13, "error");         
                    //         }
                    //     },
                    //     error: function(datas) {
                    //        $(".bowl").removeClass("active");
                    //         setTimeout(function() {
                    //             firstcount = 1;
                    //             canlottery = 1;
                    //             $("#audios")[0].pause();      
                    //         },1000)
                    //         resultShow(13, "error");   
                    //     }
                    // })
                }
            }
            /*
             * 功能：获取用户信息
             */
            function getUserInfo() {
                $.ajax({
                    type: "get",
                    url: "/ActMidAutumn/info",
                    data: {},
                    dataType: "json",
                    success: function(data) {
                        if(data.ret == 1) {
                            $("#username").val(data.info.name);
                            $("#phone").val(data.info.telephone);
                            $("#address").val(data.info.addr);
                        }
                    },
                    error: function(data) {
                    }
                })
            }
            /*
             * 功能：表单验证
             */
            $("#register").click(function() {
                var form_test = new formRegular();
                if(!form_test.empty($("#username").val())) {
                    $("#username").focus().parent().addClass("boxlight");
                    setTimeout(function() {
                        $("#username").parent().removeClass("boxlight");
                    },1000)
                    return false;
                }
                if(!(form_test.phone($("#phone").val()) || form_test.tel($("#phone").val()))) {
                    $("#phone").focus().parent().addClass("boxlight");
                    setTimeout(function() {
                        $("#phone").parent().removeClass("boxlight");
                    },2000)
                    return false;
                }
                if(!form_test.empty($("#address").val())) {
                    $("#address").focus().parent().addClass("boxlight");
                    setTimeout(function() {
                        $("#address").parent().removeClass("boxlight");
                    },2000)
                    return false;
                }
                // 这里是数据赋值
                var params = {
                    name: $("#username").val(),
                    telephone: $("#phone").val(),
                    addr: $("#address").val()
                };
                // 提交数据
                $.post("/ActMidAutumn/saveInfo", params, function(ret){
                    if(ret.ret != 1){
                        alert(ret.msg);
                    }else{
                        alert('您的信息已经登记');
                        $(".fill-info").fadeOut();
                    }
                }, 'json');
            });
            /*
             * 功能：获奖弹幕
             */
            function bulletScreen() {
                $.ajax({
                    type: "get",
                    url: "/ActMidAutumn/record",
                    data: {},
                    dataType : "json",
                    success: function(data) {
                        if(data.length) {
                            for (var i = 0,len = data.length; i < len; i++) {
                                prizer_scroll.addNewEle(data[i].headimgurl,data[i].user, data[i].award);
                            };
                        } else {
                            setTimeout(function() {
                                bulletScreen();
                            }, 10000)
                        }
                    },
                    error: function(msg) {
                        setTimeout(function() {
                            bulletScreen();
                        },10000)
                    }
                })
            }
            // bulletScreen();
            var bworks = new Fireworks($("#canvas-container"),{});
            bworks._renew();
            $("#canvas-container").click(function() {
                $(".top-scenery .business-pic a")[0].click();
            })
        })(document, window)
    },200)
})

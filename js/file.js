var list = ["20241124|补了 ARC 的前两道题。A 是 $DP$，暴力 $\\mathcal{O}(n^9)$ 显然，不容易注意到可以合并状态。这是一种优化 $DP$ 的思考方向。",
            "20241125|今天模拟赛有点困难。T1 在读错题后注意到了指数级增长的代价，但是没有细想。T2 是容易的，可惜赛场上卡常不够彻底。",
            "20241125|做了一道构造好题 CF1682D，这道题思考流程是先考虑特殊情况，再思考能不能把特殊情况带到一般情况下。考虑了几个和\
            题目相关的问题，比如说对于一颗一般的树怎么构造使得边互不相交。",
            "20241125|大部分时间在颓废，不应该。",
            "20241126|今天模拟赛 T2 花太久了，没时间打暴力了。",
            "20241126|下午啥都没干？哦原来去补 T3 了，我是废物。",
            "20241127|上午模拟赛，T2 没开 __int128 挂分了，寄。但是优化的思路确实很巧妙，考虑斐波那契数列满足辗转相减。",
            "20241127|下午终于把模拟赛 T3 补出来了！！！！！！！！感动啊！！！！！！！",
            "20241127|晚上和 yzx 爽爽决斗，构造题势均力敌，T3 摆烂了没做。睡觉想一想。希望能做出来。",
            "20241128|早上 T1 挂分，其他稳定发挥。wjc 太恐怖了，竟然场切 T3。",
            "20241128|下午一直补 T3，没看懂。wjc 为什么对我敌意这么大。感觉大家对我都是负面评价，要收一收了。",
            "20241128|晚上打了一局 duel，这都没赢？最近有点菜。",
            "20241128|明天一定一大早去问优子 T3 怎么做。然后问 wjc。我现在是弱者，要对强者虚心请教。",
            "20241128|NOIP 一定记住了！不要冲正解！稳定发挥即可！",
            "20241202|今天做完作业（其实没作业）美美睡觉啥事没干。",
            "20241202|爽学英语，终于学会了现在完全时的全部用法！！！",
            "20241203|学会了英语的反义疑问句，爽！",
            "20241203|完成了英语的学英语报，顺便学习了一下硬核学长 $2077$ 的视频。",
            "20241204|写完作业后一直在玩手机，估算一下好像玩了 $1.6$ 个小时，手机太恐怖了。。。",
            "20241204|在自习课做了一篇语文阅读，只扣了 $2.5$ 分，拿下！",
            "20241204|获得了很多英语装备。",
            "20241204|单词重修七年级，直接乱杀。",
            "20241205|数学周测烤炸了，总结一句话：对模型的关键性质还是不熟练。",
            "20241205|背英语，背背背。",
            "20241205|狠狠学习了英语口语，感觉现在随便乱杀。",
            "20241205|早上起来做了一篇完型，错了两个，看不懂题。",
            "20241205|英语提纲好难背啊！！！但是明天早点起来背。"
            ];
var n = list.length;
var split = function (s) {
    var m = s.length;
    var p = "";
    for (var i = 0; i < m; i ++) {
        if (s[i] == '|') {
            return p;
        }
        p = p + s[i];
    }
}
var split2 = function (s) {
    var m = s.length;
    var p = "";
    for (var i = m - 1; i >= 0; i --) {
        if (s[i] == '|') {
            return p;
        }
        p = s[i] + p;
    }
}
var getDate = function (s) {
    var m = s.length;
    var year = "";
    var month = "";
    var date = "";
    for (var i = 0; i < 4; i ++) year += s[i];
    for (i = 4; i < 6; i ++) month += s[i];
    for (i = 6; i < 8; i ++) date += s[i];
    return year + " 年 " + month + " 月 " + date + " 日";
}
var pre = "";
for (var i = 0; i < n; i ++) {
    var wjl = split(list[i]);
    var wjlwjl = getDate(wjl);
    var str = "p_" + wjl;
    // console.log(wjlwjl);
    if (pre != str) {
        var content = document.getElementsByClassName("content")[0];
        // console.log("content = " + content.innerHTML);
        pre = str;
        var content_copy = content.innerHTML;
        content_copy += "<p class = 'date large'>" + wjlwjl + "</p><div class = 'improve' id = '" + str + "'></div>";
        content.innerHTML = content_copy;
        // console.log("content change to = " + content.innerHTML);
        // console.log("content_copy to = " + content_copy);
    }
    // console.log(str);
    var wjc = document.getElementById(str);
    // console.log(wjc.innerHTML);
    var lzy = wjc.innerHTML;
    lzy += "\<ul\>\<li\>\<la-tex\>";
    lzy += split2(list[i]);
    lzy += "\</la-tex\>\</li\>\</ul\>";
    wjc.innerHTML = lzy;
}

/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text2',
                type: 'text',
                rect: ['220', '260','auto','auto','auto', 'auto'],
                text: "永远忘不了那天…",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'guokr2',
                type: 'image',
                rect: ['112px', '52px','800px','496px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/guokr.jpg','0px','0px']
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['589px', '137px','auto','auto','auto', 'auto'],
                text: "在无意中点开了果壳主页",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Wanyou2',
                type: 'image',
                rect: ['167px', '177px','690px','208px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/Wanyou.jpg','0px','0px']
            },
            {
                id: 'comment',
                type: 'image',
                rect: ['440', '475','661px','458px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/comment.jpg','0px','0px']
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['69', '317','auto','auto','auto', 'auto'],
                text: "于是写下了一篇回复",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'qq',
                type: 'image',
                rect: ['50px', '104px','339px','496px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/qq.jpg','0px','0px']
            },
            {
                id: 'slx',
                type: 'image',
                rect: ['296px', '73px','587px','508px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/slx.jpg','0px','0px']
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['112', '302','auto','auto','auto', 'auto'],
                text: "很幸运地<br>竟然生平第一次有妹子回我并加我QQ了",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text2Copy3',
                type: 'text',
                rect: ['116px', '202px','auto','auto','auto', 'auto'],
                text: "看到一个万有引力小组的帖子",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['65', '95','auto','auto','auto', 'auto'],
                text: "不知怎的，就突然想试试看勾搭",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['469', '260','auto','auto','auto', 'auto'],
                text: "而更让我惊讶的是——",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text15',
                type: 'text',
                rect: ['540', '225','auto','auto','auto', 'auto'],
                text: "我们竟然同一天生日！",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'bircake',
                type: 'image',
                rect: ['108px', '71px','376px','377px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/bircake.jpg','0px','0px']
            },
            {
                id: 'think2',
                type: 'image',
                rect: ['672', '268','1024px','725px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/think.jpg','0px','0px']
            },
            {
                id: 'cloud',
                type: 'image',
                rect: ['212', '281','398px','259px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/cloud.jpg','0px','0px']
            },
            {
                id: 'Text21',
                type: 'text',
                rect: ['203px', '165px','auto','auto','auto', 'auto'],
                text: "如果说一开始的热情是为了打开局面",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text22',
                type: 'text',
                rect: ['203', '239','auto','auto','auto', 'auto'],
                text: "那后来则是真正喜欢上了这样一个单纯可爱的妹子了",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text20',
                type: 'text',
                rect: ['59px', '52px','auto','auto','auto', 'auto'],
                text: "“这难道是上天<br>注定的缘分吗？”",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'cloud1',
                type: 'image',
                rect: ['-51px', '-26px','745px','353px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/cloud1.jpg','0px','0px']
            },
            {
                id: 'cloud2',
                type: 'image',
                rect: ['486px', '260px','48px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/cloud2.jpg','0px','0px']
            },
            {
                id: 'Text24',
                type: 'text',
                rect: ['265', '170','auto','auto','auto', 'auto'],
                text: "她会是单纯的、善良的、真心的<br><br>能和我心灵契合，嬉笑怒骂的",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 50, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'cloud23',
                type: 'image',
                rect: ['198px', '148px','80px','31px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",'resources/cloud2.jpg','0px','0px']
            },
            {
                id: 'cloud32',
                type: 'image',
                rect: ['589px', '252px','750px','354px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/cloud3.jpg','0px','0px']
            },
            {
                id: 'Text23',
                type: 'text',
                rect: ['127px', '261px','auto','auto','auto', 'auto'],
                text: "无数次心中想象着梦中之人的样子——",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 50, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text25',
                display: 'block',
                type: 'text',
                rect: ['453px', '239','auto','auto','auto', 'auto'],
                text: "而如今",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text27',
                display: 'block',
                type: 'text',
                rect: ['207px', '319','auto','auto','auto', 'auto'],
                text: "上天竟然把我梦中的那个人带到了我的面前",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text37',
                type: 'text',
                rect: ['296px', '197px','auto','auto','auto', 'auto'],
                text: "在对方怀里享受着对方的爱",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'hug',
                type: 'image',
                rect: ['491px', '281px','400px','286px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/hug.jpg','0px','0px']
            },
            {
                id: 'Text38',
                type: 'text',
                rect: ['40px', '136px','auto','auto','auto', 'auto'],
                text: "抱着对方",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text28',
                type: 'text',
                rect: ['154', '104','auto','auto','auto', 'auto'],
                text: "视频中的她",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text29',
                type: 'text',
                rect: ['198', '169','auto','auto','auto', 'auto'],
                text: "抱着我送的玩偶",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'video1',
                type: 'image',
                rect: ['170px', '38px','674px','506px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/video1.jpg','0px','0px']
            },
            {
                id: 'video2',
                type: 'image',
                rect: ['50px', '136px','262px','199px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/video2.jpg','0px','0px']
            },
            {
                id: 'Text30',
                type: 'text',
                rect: ['277', '239','auto','auto','auto', 'auto'],
                text: "羞羞地笑着",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text32',
                type: 'text',
                rect: ['324px', '310px','auto','auto','auto', 'auto'],
                text: "简直让我的心都融化了",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'video3',
                type: 'image',
                rect: ['1047px', '141px','265px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'resources/video3.jpg','0px','0px']
            },
            {
                id: 'Text33',
                type: 'text',
                rect: ['504', '261','auto','auto','auto', 'auto'],
                text: "无数次幻想与她以后的人生",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text35',
                type: 'text',
                rect: ['327px', '239px','auto','auto','auto', 'auto'],
                text: "无数次幻想与她手牵手",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text36',
                type: 'text',
                rect: ['282px', '310px','auto','auto','auto', 'auto'],
                text: "Walk to the end of the world",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text40',
                type: 'text',
                rect: ['468', '233','auto','auto','auto', 'auto'],
                text: "但此时却不由自主地紧张了起来",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text41',
                type: 'text',
                rect: ['306px', '279px','auto','auto','auto', 'auto'],
                text: "“如果失去了怎么办？”",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text42',
                type: 'text',
                rect: ['183px', '331px','auto','auto','auto', 'auto'],
                text: "“如果由于距离，她被人抢走了怎么办？”",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text43',
                type: 'text',
                rect: ['402px', '385px','auto','auto','auto', 'auto'],
                text: "“如果……”",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text44',
                type: 'text',
                rect: ['351px', '156px','auto','auto','auto', 'auto'],
                text: "古人有云：关心则乱",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text45',
                type: 'text',
                rect: ['187px', '233px','auto','auto','auto', 'auto'],
                text: "这句话真的可以表达出我现在都所有心态",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text46',
                type: 'text',
                rect: ['418', '310','auto','auto','auto', 'auto'],
                text: "“要怎么才能让她高兴”",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text47',
                type: 'text',
                rect: ['313px', '364px','auto','auto','auto', 'auto'],
                text: "“要怎么才能让她喜欢我”",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text48',
                type: 'text',
                rect: ['154px', '104px','auto','auto','auto', 'auto'],
                text: "越想越多……",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text49',
                type: 'text',
                rect: ['154px', '158px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "最终不知所措",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text51',
                type: 'text',
                rect: ['360px', '195px','auto','auto','auto', 'auto'],
                text: "但是仍然想把我内心的想法传达给你",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 150, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text52',
                type: 'text',
                rect: ['133px', '279px','auto','auto','auto', 'auto'],
                text: "渴望着有朝一日能与你携手走过人生短短数十载",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text53',
                type: 'text',
                rect: ['428px', '343px','auto','auto','auto', 'auto'],
                text: "不离不弃",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text54',
                type: 'text',
                rect: ['432px', '394px','auto','auto','auto', 'auto'],
                text: "相濡以沫",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 35, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text55',
                type: 'text',
                rect: ['379px', '210px','auto','auto','auto', 'auto'],
                text: "七夕节快乐",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 50, "rgba(0,0,0,1)", "900", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_comment}": [
                ["style", "top", '73px'],
                ["style", "opacity", '0'],
                ["style", "left", '177px']
            ],
            "${_Text15}": [
                ["style", "top", '225px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '540px'],
                ["style", "font-size", '45px']
            ],
            "${_Text10}": [
                ["style", "top", '317px'],
                ["style", "opacity", '0'],
                ["style", "left", '69px']
            ],
            "${_Text41}": [
                ["style", "top", '279px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '306px']
            ],
            "${_Text46}": [
                ["style", "top", '300px'],
                ["style", "opacity", '0'],
                ["style", "left", '331px']
            ],
            "${_Text22}": [
                ["style", "top", '229px'],
                ["style", "height", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '98px'],
                ["style", "width", 'auto']
            ],
            "${_Text32}": [
                ["style", "top", '310px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '324px']
            ],
            "${_Text48}": [
                ["subproperty", "filter.grayscale", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '154px'],
                ["style", "top", '104px']
            ],
            "${_think2}": [
                ["style", "top", '-36px'],
                ["style", "opacity", '0'],
                ["style", "left", '-5px']
            ],
            "${_hug}": [
                ["style", "top", '281px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '491px']
            ],
            "${_guokr2}": [
                ["style", "top", '52px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '112px']
            ],
            "${_Text52}": [
                ["style", "top", '279px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '133px']
            ],
            "${_Text54}": [
                ["style", "top", '394px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '432px']
            ],
            "${_Text21}": [
                ["style", "top", '165px'],
                ["style", "height", '42px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '203px'],
                ["style", "width", 'auto']
            ],
            "${_Text47}": [
                ["style", "top", '364px'],
                ["style", "opacity", '0'],
                ["style", "left", '313px']
            ],
            "${_Text13}": [
                ["style", "opacity", '0.000000'],
                ["style", "left", '469px'],
                ["style", "font-size", '35px']
            ],
            "${_Text35}": [
                ["style", "top", '239px'],
                ["style", "opacity", '0'],
                ["style", "left", '327px']
            ],
            "${_Text33}": [
                ["style", "top", '160px'],
                ["style", "opacity", '0'],
                ["style", "left", '295px']
            ],
            "${_Wanyou2}": [
                ["style", "top", '177px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '167px']
            ],
            "${_Text42}": [
                ["style", "top", '331px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '183px']
            ],
            "${_Text39}": [
                ["style", "left", '371px'],
                ["style", "top", '233px']
            ],
            "${_bircake}": [
                ["style", "top", '71px'],
                ["style", "height", '377px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '108px'],
                ["style", "width", '376px']
            ],
            "${_Text20}": [
                ["style", "top", '52px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '59px'],
                ["style", "font-size", '35px']
            ],
            "${_cloud1}": [
                ["style", "top", '127px'],
                ["style", "height", '99px'],
                ["style", "opacity", '0'],
                ["style", "left", '106px'],
                ["style", "width", '163px']
            ],
            "${_Text51}": [
                ["style", "top", '118px'],
                ["style", "opacity", '0'],
                ["style", "left", '212px'],
                ["style", "font-size", '35px']
            ],
            "${_cloud32}": [
                ["style", "top", '252px'],
                ["style", "height", '354px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '589px'],
                ["style", "width", '750px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '202px'],
                ["style", "font-weight", '900'],
                ["style", "left", '116px'],
                ["style", "font-size", '35px']
            ],
            "${_Text43}": [
                ["style", "top", '385px'],
                ["style", "opacity", '0'],
                ["style", "left", '402px']
            ],
            "${_Text40}": [
                ["style", "top", '220px'],
                ["style", "opacity", '0'],
                ["style", "left", '255px']
            ],
            "${_Text55}": [
                ["style", "top", '210px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '379px'],
                ["style", "font-size", '50px']
            ],
            "${_Text38}": [
                ["style", "top", '160px'],
                ["style", "opacity", '0'],
                ["style", "left", '-103px']
            ],
            "${_Text7}": [
                ["style", "top", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '103px']
            ],
            "${_cloud2}": [
                ["style", "top", '260px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '486px'],
                ["style", "width", '48px']
            ],
            "${_Text49}": [
                ["subproperty", "filter.grayscale", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '154px'],
                ["style", "top", '158px']
            ],
            "${_video2}": [
                ["style", "top", '122px'],
                ["style", "opacity", '0'],
                ["style", "left", '-197px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '197px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-weight", '900'],
                ["style", "left", '121px'],
                ["style", "font-size", '35px']
            ],
            "${_qq}": [
                ["style", "top", '104px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '50px']
            ],
            "${_Text23}": [
                ["style", "top", '260px'],
                ["style", "opacity", '0'],
                ["style", "left", '78px'],
                ["style", "font-size", '50px']
            ],
            "${_video3}": [
                ["style", "top", '302px'],
                ["style", "opacity", '0'],
                ["style", "left", '1062px']
            ],
            "${_video1}": [
                ["style", "top", '33px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '167px']
            ],
            "${_Text29}": [
                ["subproperty", "filter.blur", '0.000000px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text53}": [
                ["style", "top", '343px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '428px']
            ],
            "${_cloud23}": [
                ["style", "top", '148px'],
                ["style", "height", '31px'],
                ["style", "opacity", '0'],
                ["style", "left", '198px'],
                ["style", "width", '80px']
            ],
            "${_cloud}": [
                ["style", "top", '-41px'],
                ["style", "opacity", '0'],
                ["style", "left", '-69px']
            ],
            "${_Text30}": [
                ["style", "opacity", '0.000000'],
                ["style", "left", '277px'],
                ["subproperty", "filter.blur", '0.000000px']
            ],
            "${_slx}": [
                ["style", "top", '73px'],
                ["style", "opacity", '0'],
                ["style", "left", '296px']
            ],
            "${_Text28}": [
                ["subproperty", "filter.blur", '0.000000px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text36}": [
                ["style", "top", '310px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '282px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text44}": [
                ["style", "top", '156px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '351px']
            ],
            "${_Text24}": [
                ["style", "top", '170px'],
                ["style", "opacity", '0'],
                ["style", "left", '265px'],
                ["color", "color", 'rgba(0,0,0,1)']
            ],
            "${_Text45}": [
                ["style", "top", '233px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '187px']
            ],
            "${_Text23Copy}": [
                ["style", "top", '260px'],
                ["style", "opacity", '0'],
                ["style", "left", '78px'],
                ["style", "font-size", '50px']
            ],
            "${_Text25}": [
                ["style", "top", '241px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '437px'],
                ["style", "font-size", '35px']
            ],
            "${_Text6}": [
                ["style", "top", '137px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '589px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '202px'],
                ["style", "font-weight", '900'],
                ["style", "left", '116px'],
                ["style", "font-size", '35px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '202px'],
                ["style", "opacity", '1'],
                ["style", "font-weight", '900'],
                ["style", "left", '116px'],
                ["style", "font-size", '35px']
            ],
            "${_Text12}": [
                ["style", "top", '218px'],
                ["style", "opacity", '0'],
                ["style", "left", '121px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,238,1.00)'],
                ["style", "width", '1024px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text37}": [
                ["style", "top", '240px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-280px']
            ],
            "${_Text2}": [
                ["style", "font-weight", '900'],
                ["style", "opacity", '0'],
                ["style", "font-size", '35px']
            ],
            "${_Text27}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '162px'],
                ["style", "top", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 71626,
            autoPlay: true,
            timeline: [
                { id: "eid398", tween: [ "style", "${_Text44}", "opacity", '1', { fromValue: '0.000000'}], position: 55626, duration: 500 },
                { id: "eid407", tween: [ "style", "${_Text44}", "opacity", '0', { fromValue: '1'}], position: 58626, duration: 1000 },
                { id: "eid84", tween: [ "style", "${_bircake}", "opacity", '1', { fromValue: '0.000000'}], position: 19000, duration: 1000 },
                { id: "eid89", tween: [ "style", "${_bircake}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 500 },
                { id: "eid112", tween: [ "style", "${_Text21}", "opacity", '1', { fromValue: '0.000000'}], position: 23750, duration: 750 },
                { id: "eid128", tween: [ "style", "${_Text21}", "opacity", '0', { fromValue: '1'}], position: 28063, duration: 500 },
                { id: "eid64", tween: [ "style", "${_qq}", "opacity", '1', { fromValue: '0.000000'}], position: 13500, duration: 500 },
                { id: "eid72", tween: [ "style", "${_qq}", "opacity", '0', { fromValue: '1'}], position: 15543, duration: 457 },
                { id: "eid107", tween: [ "style", "${_Text20}", "opacity", '1', { fromValue: '0.000000'}], position: 21500, duration: 500 },
                { id: "eid109", tween: [ "style", "${_Text20}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 750 },
                { id: "eid83", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0.000000'}], position: 19000, duration: 1000 },
                { id: "eid90", tween: [ "style", "${_Text15}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 500 },
                { id: "eid467", tween: [ "style", "${_Text27}", "left", '162px', { fromValue: '162px'}], position: 35412, duration: 0 },
                { id: "eid385", tween: [ "style", "${_Text40}", "top", '220px', { fromValue: '220px'}], position: 51626, duration: 0 },
                { id: "eid418", tween: [ "subproperty", "${_Text49}", "filter.grayscale", '0', { fromValue: '0'}], position: 60626, duration: 0 },
                { id: "eid419", tween: [ "subproperty", "${_Text49}", "filter.grayscale", '0', { fromValue: '0'}], position: 61626, duration: 0 },
                { id: "eid293", tween: [ "style", "${_video1}", "left", '167px', { fromValue: '167px'}], position: 41626, duration: 0 },
                { id: "eid352", tween: [ "style", "${_video1}", "left", '174px', { fromValue: '167px'}], position: 47126, duration: 500 },
                { id: "eid468", tween: [ "style", "${_Text27}", "top", '310px', { fromValue: '310px'}], position: 35412, duration: 0 },
                { id: "eid260", tween: [ "style", "${_Text25}", "opacity", '1', { fromValue: '0'}], position: 33563, duration: 500 },
                { id: "eid284", tween: [ "style", "${_Text25}", "opacity", '0', { fromValue: '1'}], position: 37626, duration: 500 },
                { id: "eid141", tween: [ "style", "${_cloud1}", "height", '439px', { fromValue: '99px'}], position: 28563, duration: 211 },
                { id: "eid332", tween: [ "style", "${_Text36}", "opacity", '1', { fromValue: '0.000000'}], position: 44426, duration: 450 },
                { id: "eid336", tween: [ "style", "${_Text36}", "opacity", '0', { fromValue: '1'}], position: 46626, duration: 500 },
                { id: "eid101", tween: [ "style", "${_think2}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 500 },
                { id: "eid108", tween: [ "style", "${_think2}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 750 },
                { id: "eid475", tween: [ "style", "${_Text51}", "left", '212px', { fromValue: '212px'}], position: 65000, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Text24}", "top", '169px', { fromValue: '170px'}], position: 31563, duration: 500 },
                { id: "eid218", tween: [ "style", "${_cloud23}", "height", '179px', { fromValue: '31px'}], position: 30563, duration: 313 },
                { id: "eid222", tween: [ "style", "${_cloud23}", "height", '289px', { fromValue: '179px'}], position: 30876, duration: 437 },
                { id: "eid404", tween: [ "style", "${_Text46}", "opacity", '1', { fromValue: '0'}], position: 56626, duration: 500 },
                { id: "eid409", tween: [ "style", "${_Text46}", "opacity", '0', { fromValue: '1'}], position: 58626, duration: 1000 },
                { id: "eid392", tween: [ "style", "${_Text43}", "opacity", '1', { fromValue: '0'}], position: 53126, duration: 500 },
                { id: "eid394", tween: [ "style", "${_Text43}", "opacity", '0', { fromValue: '1'}], position: 54626, duration: 1000 },
                { id: "eid329", tween: [ "style", "${_Text33}", "opacity", '1', { fromValue: '0'}], position: 43326, duration: 600 },
                { id: "eid335", tween: [ "style", "${_Text33}", "opacity", '0', { fromValue: '1'}], position: 46626, duration: 500 },
                { id: "eid449", tween: [ "style", "${_Text53}", "opacity", '1', { fromValue: '0.000000'}], position: 67126, duration: 500 },
                { id: "eid455", tween: [ "style", "${_Text53}", "opacity", '0.04', { fromValue: '1'}], position: 67626, duration: 2000 },
                { id: "eid459", tween: [ "style", "${_Text53}", "opacity", '0', { fromValue: '0.040000'}], position: 69626, duration: 104 },
                { id: "eid463", tween: [ "style", "${_Text53}", "opacity", '0', { fromValue: '0.000000'}], position: 69730, duration: 1896 },
                { id: "eid346", tween: [ "style", "${_Text37}", "opacity", '1', { fromValue: '0.000000'}], position: 47626, duration: 500 },
                { id: "eid380", tween: [ "style", "${_Text37}", "opacity", '0', { fromValue: '1'}], position: 49126, duration: 500 },
                { id: "eid126", tween: [ "style", "${_Text21}", "top", '56px', { fromValue: '165px'}], position: 28063, duration: 500 },
                { id: "eid47", tween: [ "style", "${_Text10}", "left", '167px', { fromValue: '69px'}], position: 10500, duration: 500 },
                { id: "eid125", tween: [ "style", "${_Text21}", "left", '198px', { fromValue: '203px'}], position: 28063, duration: 500 },
                { id: "eid416", tween: [ "subproperty", "${_Text48}", "filter.grayscale", '0', { fromValue: '0'}], position: 60626, duration: 0 },
                { id: "eid417", tween: [ "subproperty", "${_Text48}", "filter.grayscale", '0', { fromValue: '0'}], position: 61626, duration: 0 },
                { id: "eid230", tween: [ "style", "${_cloud32}", "height", '646px', { fromValue: '354px'}], position: 30562, duration: 1001 },
                { id: "eid269", tween: [ "style", "${_video2}", "left", '15px', { fromValue: '-197px'}], position: 36626, duration: 500 },
                { id: "eid235", tween: [ "style", "${_Text23}", "top", '260px', { fromValue: '260px'}], position: 28563, duration: 0 },
                { id: "eid306", tween: [ "subproperty", "${_Text29}", "filter.blur", '225px', { fromValue: '0.000000px'}], position: 41626, duration: 1000 },
                { id: "eid313", tween: [ "subproperty", "${_Text29}", "filter.blur", '30px', { fromValue: '225px'}], position: 42626, duration: 35 },
                { id: "eid98", tween: [ "style", "${_think2}", "top", '-36px', { fromValue: '-36px'}], position: 21500, duration: 0 },
                { id: "eid268", tween: [ "style", "${_video2}", "opacity", '1', { fromValue: '0'}], position: 36626, duration: 500 },
                { id: "eid280", tween: [ "style", "${_video2}", "opacity", '0', { fromValue: '1'}], position: 38126, duration: 500 },
                { id: "eid309", tween: [ "style", "${_video2}", "opacity", '0', { fromValue: '0'}], position: 41532, duration: 0 },
                { id: "eid310", tween: [ "style", "${_video2}", "opacity", '0', { fromValue: '0'}], position: 41626, duration: 0 },
                { id: "eid105", tween: [ "style", "${_cloud}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 500 },
                { id: "eid110", tween: [ "style", "${_cloud}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 750 },
                { id: "eid391", tween: [ "style", "${_Text42}", "opacity", '1', { fromValue: '0.000000'}], position: 52626, duration: 500 },
                { id: "eid396", tween: [ "style", "${_Text42}", "opacity", '0', { fromValue: '1'}], position: 54626, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid3", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid148", tween: [ "style", "${_cloud2}", "width", '298px', { fromValue: '48px'}], position: 29063, duration: 500 },
                { id: "eid155", tween: [ "style", "${_cloud2}", "width", '985px', { fromValue: '298px'}], position: 29563, duration: 500 },
                { id: "eid159", tween: [ "style", "${_cloud2}", "width", '1719px', { fromValue: '985px'}], position: 30063, duration: 500 },
                { id: "eid35", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 500 },
                { id: "eid447", tween: [ "style", "${_Text52}", "opacity", '1', { fromValue: '0.000000'}], position: 66626, duration: 500 },
                { id: "eid453", tween: [ "style", "${_Text52}", "opacity", '0.04', { fromValue: '1'}], position: 67126, duration: 2500 },
                { id: "eid457", tween: [ "style", "${_Text52}", "opacity", '0', { fromValue: '0.040000'}], position: 69626, duration: 104 },
                { id: "eid113", tween: [ "style", "${_Text22}", "left", '98px', { fromValue: '98px'}], position: 24500, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Text22}", "left", '93px', { fromValue: '98px'}], position: 28063, duration: 500 },
                { id: "eid275", tween: [ "style", "${_video3}", "opacity", '1', { fromValue: '0'}], position: 37126, duration: 500 },
                { id: "eid282", tween: [ "style", "${_video3}", "opacity", '0', { fromValue: '1'}], position: 38126, duration: 500 },
                { id: "eid229", tween: [ "style", "${_cloud32}", "opacity", '1', { fromValue: '0.000000'}], position: 30562, duration: 1001 },
                { id: "eid471", tween: [ "style", "${_Text51}", "opacity", '1', { fromValue: '0'}], position: 63626, duration: 1374 },
                { id: "eid478", tween: [ "style", "${_Text51}", "opacity", '0', { fromValue: '1'}], position: 67626, duration: 2000 },
                { id: "eid48", tween: [ "style", "${_Text10}", "top", '506px', { fromValue: '317px'}], position: 10500, duration: 500 },
                { id: "eid400", tween: [ "style", "${_Text45}", "opacity", '1', { fromValue: '0.000000'}], position: 56126, duration: 500 },
                { id: "eid408", tween: [ "style", "${_Text45}", "opacity", '0', { fromValue: '1'}], position: 58626, duration: 1000 },
                { id: "eid147", tween: [ "style", "${_cloud2}", "height", '197px', { fromValue: '32px'}], position: 29063, duration: 500 },
                { id: "eid154", tween: [ "style", "${_cloud2}", "height", '620px', { fromValue: '197px'}], position: 29563, duration: 500 },
                { id: "eid156", tween: [ "style", "${_cloud2}", "height", '1158px', { fromValue: '620px'}], position: 30063, duration: 500 },
                { id: "eid99", tween: [ "style", "${_think2}", "left", '-5px', { fromValue: '-5px'}], position: 21500, duration: 0 },
                { id: "eid262", tween: [ "style", "${_Text27}", "opacity", '1', { fromValue: '0.000000'}], position: 34063, duration: 500 },
                { id: "eid283", tween: [ "style", "${_Text27}", "opacity", '0', { fromValue: '1'}], position: 37626, duration: 500 },
                { id: "eid292", tween: [ "style", "${_Text32}", "opacity", '1', { fromValue: '0.000000'}], position: 40126, duration: 500 },
                { id: "eid324", tween: [ "style", "${_Text32}", "opacity", '0', { fromValue: '1'}], position: 42923, duration: 403 },
                { id: "eid237", tween: [ "style", "${_Text23}", "opacity", '1', { fromValue: '0'}], position: 28563, duration: 612 },
                { id: "eid241", tween: [ "style", "${_Text23}", "opacity", '0', { fromValue: '1'}], position: 31563, duration: 500 },
                { id: "eid370", tween: [ "style", "${_Text38}", "opacity", '1', { fromValue: '0'}], position: 47126, duration: 500 },
                { id: "eid378", tween: [ "style", "${_Text38}", "opacity", '0', { fromValue: '1'}], position: 49126, duration: 500 },
                { id: "eid234", tween: [ "style", "${_Text23}", "left", '78px', { fromValue: '78px'}], position: 28563, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text13}", "left", '312px', { fromValue: '469px'}], position: 16538, duration: 462 },
                { id: "eid103", tween: [ "style", "${_cloud}", "top", '-20px', { fromValue: '-41px'}], position: 21500, duration: 500 },
                { id: "eid231", tween: [ "style", "${_cloud32}", "width", '1165px', { fromValue: '750px'}], position: 30562, duration: 1001 },
                { id: "eid351", tween: [ "style", "${_Text37}", "top", '218px', { fromValue: '240px'}], position: 47626, duration: 428 },
                { id: "eid373", tween: [ "style", "${_Text37}", "top", '233px', { fromValue: '218px'}], position: 48054, duration: 72 },
                { id: "eid413", tween: [ "style", "${_Text49}", "opacity", '1', { fromValue: '0.000000'}], position: 60126, duration: 500 },
                { id: "eid425", tween: [ "style", "${_Text49}", "opacity", '0', { fromValue: '1'}], position: 61626, duration: 500 },
                { id: "eid114", tween: [ "style", "${_Text22}", "top", '229px', { fromValue: '229px'}], position: 24500, duration: 0 },
                { id: "eid124", tween: [ "style", "${_Text22}", "top", '120px', { fromValue: '229px'}], position: 28063, duration: 500 },
                { id: "eid256", tween: [ "style", "${_Text22}", "top", '118px', { fromValue: '120px'}], position: 28563, duration: 5000 },
                { id: "eid142", tween: [ "style", "${_cloud1}", "width", '745px', { fromValue: '163px'}], position: 28563, duration: 211 },
                { id: "eid353", tween: [ "style", "${_hug}", "left", '587px', { fromValue: '491px'}], position: 47126, duration: 1000 },
                { id: "eid53", tween: [ "style", "${_Text12}", "top", '218px', { fromValue: '218px'}], position: 11750, duration: 0 },
                { id: "eid470", tween: [ "style", "${_Text25}", "top", '241px', { fromValue: '241px'}], position: 35412, duration: 0 },
                { id: "eid246", tween: [ "style", "${_Text24}", "opacity", '1', { fromValue: '0'}], position: 31563, duration: 500 },
                { id: "eid251", tween: [ "style", "${_Text24}", "opacity", '0', { fromValue: '1'}], position: 33063, duration: 500 },
                { id: "eid31", tween: [ "style", "${_Text7}", "left", '103px', { fromValue: '103px'}], position: 9000, duration: 500 },
                { id: "eid38", tween: [ "style", "${_Text7}", "left", '-535px', { fromValue: '103px'}], position: 10000, duration: 500 },
                { id: "eid149", tween: [ "style", "${_cloud2}", "opacity", '1', { fromValue: '0'}], position: 29063, duration: 500 },
                { id: "eid160", tween: [ "style", "${_cloud2}", "opacity", '0', { fromValue: '1'}], position: 29563, duration: 1000 },
                { id: "eid253", tween: [ "style", "${_cloud2}", "opacity", '0', { fromValue: '0'}], position: 33563, duration: 0 },
                { id: "eid244", tween: [ "color", "${_Text24}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 31563, duration: 500 },
                { id: "eid26", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 750 },
                { id: "eid30", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 },
                { id: "eid233", tween: [ "style", "${_cloud32}", "top", '335px', { fromValue: '252px'}], position: 30562, duration: 1001 },
                { id: "eid143", tween: [ "style", "${_cloud1}", "left", '-322px', { fromValue: '106px'}], position: 28563, duration: 211 },
                { id: "eid145", tween: [ "style", "${_cloud1}", "left", '-656px', { fromValue: '-322px'}], position: 28774, duration: 39 },
                { id: "eid466", tween: [ "style", "${_Text37}", "left", '-278px', { fromValue: '-280px'}], position: 34676, duration: 12950 },
                { id: "eid350", tween: [ "style", "${_Text37}", "left", '50px', { fromValue: '-278px'}], position: 47626, duration: 428 },
                { id: "eid372", tween: [ "style", "${_Text37}", "left", '68px', { fromValue: '50px'}], position: 48054, duration: 72 },
                { id: "eid27", tween: [ "style", "${_Text2Copy3}", "left", '121px', { fromValue: '121px'}], position: 7000, duration: 750 },
                { id: "eid74", tween: [ "style", "${_Text13}", "opacity", '1', { fromValue: '0.000000'}], position: 16538, duration: 462 },
                { id: "eid78", tween: [ "style", "${_Text13}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 750 },
                { id: "eid22", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1250 },
                { id: "eid52", tween: [ "style", "${_Text12}", "left", '121px', { fromValue: '121px'}], position: 11750, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0'}], position: 11750, duration: 750 },
                { id: "eid61", tween: [ "style", "${_Text12}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 1000 },
                { id: "eid367", tween: [ "style", "${_Text38}", "top", '153px', { fromValue: '160px'}], position: 47126, duration: 500 },
                { id: "eid219", tween: [ "style", "${_cloud23}", "top", '-38px', { fromValue: '148px'}], position: 30563, duration: 313 },
                { id: "eid223", tween: [ "style", "${_cloud23}", "top", '-195px', { fromValue: '-38px'}], position: 30876, duration: 437 },
                { id: "eid227", tween: [ "style", "${_cloud23}", "top", '-289px', { fromValue: '-195px'}], position: 31313, duration: 250 },
                { id: "eid140", tween: [ "style", "${_cloud1}", "opacity", '1', { fromValue: '0'}], position: 28563, duration: 211 },
                { id: "eid87", tween: [ "style", "${_Text15}", "left", '212px', { fromValue: '540px'}], position: 21000, duration: 500 },
                { id: "eid411", tween: [ "style", "${_Text48}", "opacity", '1', { fromValue: '0.000000'}], position: 59626, duration: 500 },
                { id: "eid424", tween: [ "style", "${_Text48}", "opacity", '0', { fromValue: '1'}], position: 61626, duration: 500 },
                { id: "eid307", tween: [ "subproperty", "${_Text28}", "filter.blur", '225px', { fromValue: '0.000000px'}], position: 41626, duration: 1000 },
                { id: "eid312", tween: [ "subproperty", "${_Text28}", "filter.blur", '30px', { fromValue: '225px'}], position: 42626, duration: 35 },
                { id: "eid290", tween: [ "style", "${_Text30}", "opacity", '1', { fromValue: '0.000000'}], position: 39626, duration: 500 },
                { id: "eid323", tween: [ "style", "${_Text30}", "opacity", '0', { fromValue: '1'}], position: 42661, duration: 262 },
                { id: "eid220", tween: [ "style", "${_cloud23}", "left", '-120px', { fromValue: '198px'}], position: 30563, duration: 313 },
                { id: "eid224", tween: [ "style", "${_cloud23}", "left", '-339px', { fromValue: '-120px'}], position: 30876, duration: 437 },
                { id: "eid226", tween: [ "style", "${_cloud23}", "left", '-541px', { fromValue: '-339px'}], position: 31313, duration: 250 },
                { id: "eid7", tween: [ "style", "${_guokr2}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 750 },
                { id: "eid10", tween: [ "style", "${_guokr2}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 500 },
                { id: "eid80", tween: [ "style", "${_Text13}", "font-size", '35px', { fromValue: '35px'}], position: 16538, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text13}", "font-size", '396px', { fromValue: '35px'}], position: 18000, duration: 750 },
                { id: "eid44", tween: [ "style", "${_comment}", "top", '73px', { fromValue: '73px'}], position: 10500, duration: 500 },
                { id: "eid151", tween: [ "style", "${_cloud2}", "top", '182px', { fromValue: '260px'}], position: 29063, duration: 500 },
                { id: "eid153", tween: [ "style", "${_cloud2}", "top", '-10px', { fromValue: '182px'}], position: 29563, duration: 500 },
                { id: "eid157", tween: [ "style", "${_cloud2}", "top", '-260px', { fromValue: '-10px'}], position: 30063, duration: 500 },
                { id: "eid326", tween: [ "style", "${_Text33}", "top", '160px', { fromValue: '160px'}], position: 43326, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 500 },
                { id: "eid60", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 1500 },
                { id: "eid402", tween: [ "style", "${_Text46}", "top", '300px', { fromValue: '300px'}], position: 56626, duration: 0 },
                { id: "eid389", tween: [ "style", "${_Text41}", "opacity", '1', { fromValue: '0.000000'}], position: 52126, duration: 500 },
                { id: "eid393", tween: [ "style", "${_Text41}", "opacity", '0', { fromValue: '1'}], position: 54626, duration: 1000 },
                { id: "eid144", tween: [ "style", "${_cloud1}", "top", '307px', { fromValue: '127px'}], position: 28563, duration: 211 },
                { id: "eid146", tween: [ "style", "${_cloud1}", "top", '590px', { fromValue: '307px'}], position: 28774, duration: 39 },
                { id: "eid255", tween: [ "style", "${_cloud1}", "top", '588px', { fromValue: '590px'}], position: 28813, duration: 4750 },
                { id: "eid277", tween: [ "style", "${_video3}", "top", '-7px', { fromValue: '302px'}], position: 37126, duration: 500 },
                { id: "eid102", tween: [ "style", "${_cloud}", "left", '-17px', { fromValue: '-69px'}], position: 21500, duration: 500 },
                { id: "eid215", tween: [ "style", "${_cloud23}", "opacity", '0', { fromValue: '0'}], position: 30562, duration: 0 },
                { id: "eid217", tween: [ "style", "${_cloud23}", "opacity", '1', { fromValue: '0.000000'}], position: 30563, duration: 313 },
                { id: "eid270", tween: [ "style", "${_video2}", "top", '141px', { fromValue: '122px'}], position: 36626, duration: 500 },
                { id: "eid311", tween: [ "style", "${_video2}", "top", '142px', { fromValue: '141px'}], position: 41376, duration: 250 },
                { id: "eid452", tween: [ "style", "${_Text54}", "opacity", '1', { fromValue: '0.000000'}], position: 67626, duration: 500 },
                { id: "eid454", tween: [ "style", "${_Text54}", "opacity", '0.04', { fromValue: '1'}], position: 68126, duration: 1500 },
                { id: "eid458", tween: [ "style", "${_Text54}", "opacity", '0', { fromValue: '0.040000'}], position: 69626, duration: 104 },
                { id: "eid462", tween: [ "style", "${_Text55}", "opacity", '1', { fromValue: '0.000000'}], position: 70626, duration: 1000 },
                { id: "eid86", tween: [ "style", "${_bircake}", "top", '539px', { fromValue: '71px'}], position: 21000, duration: 500 },
                { id: "eid150", tween: [ "style", "${_cloud2}", "left", '358px', { fromValue: '486px'}], position: 29063, duration: 500 },
                { id: "eid152", tween: [ "style", "${_cloud2}", "left", '34px', { fromValue: '358px'}], position: 29563, duration: 500 },
                { id: "eid158", tween: [ "style", "${_cloud2}", "left", '-283px', { fromValue: '34px'}], position: 30063, duration: 500 },
                { id: "eid264", tween: [ "style", "${_video1}", "opacity", '1', { fromValue: '0.000000'}], position: 36126, duration: 500 },
                { id: "eid281", tween: [ "style", "${_video1}", "opacity", '0', { fromValue: '1'}], position: 38126, duration: 500 },
                { id: "eid348", tween: [ "style", "${_hug}", "opacity", '1', { fromValue: '0.000000'}], position: 47126, duration: 1000 },
                { id: "eid379", tween: [ "style", "${_hug}", "opacity", '0', { fromValue: '1'}], position: 48126, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_comment}", "left", '182px', { fromValue: '177px'}], position: 10500, duration: 500 },
                { id: "eid88", tween: [ "style", "${_Text15}", "top", '623px', { fromValue: '225px'}], position: 21000, duration: 500 },
                { id: "eid387", tween: [ "style", "${_Text40}", "opacity", '1', { fromValue: '0'}], position: 51626, duration: 500 },
                { id: "eid395", tween: [ "style", "${_Text40}", "opacity", '0', { fromValue: '1'}], position: 54626, duration: 1000 },
                { id: "eid365", tween: [ "style", "${_Text38}", "left", '68px', { fromValue: '-103px'}], position: 47126, duration: 500 },
                { id: "eid401", tween: [ "style", "${_Text46}", "left", '331px', { fromValue: '331px'}], position: 56626, duration: 0 },
                { id: "eid469", tween: [ "style", "${_Text25}", "left", '437px', { fromValue: '437px'}], position: 35412, duration: 0 },
                { id: "eid325", tween: [ "style", "${_Text33}", "left", '295px', { fromValue: '295px'}], position: 43326, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text2Copy3}", "top", '394px', { fromValue: '197px'}], position: 7000, duration: 750 },
                { id: "eid286", tween: [ "style", "${_Text28}", "opacity", '1', { fromValue: '0.000000'}], position: 38626, duration: 500 },
                { id: "eid321", tween: [ "style", "${_Text28}", "opacity", '0', { fromValue: '1'}], position: 42661, duration: 262 },
                { id: "eid33", tween: [ "style", "${_Text7}", "top", '95px', { fromValue: '90px'}], position: 9000, duration: 500 },
                { id: "eid39", tween: [ "style", "${_Text7}", "top", '218px', { fromValue: '95px'}], position: 10000, duration: 500 },
                { id: "eid288", tween: [ "style", "${_Text29}", "opacity", '1', { fromValue: '0.000000'}], position: 39126, duration: 500 },
                { id: "eid322", tween: [ "style", "${_Text29}", "opacity", '0', { fromValue: '1'}], position: 42661, duration: 262 },
                { id: "eid276", tween: [ "style", "${_video3}", "left", '603px', { fromValue: '1062px'}], position: 37126, duration: 500 },
                { id: "eid116", tween: [ "style", "${_Text22}", "opacity", '1', { fromValue: '0'}], position: 24500, duration: 500 },
                { id: "eid127", tween: [ "style", "${_Text22}", "opacity", '0', { fromValue: '1'}], position: 28063, duration: 500 },
                { id: "eid477", tween: [ "style", "${_Text51}", "top", '218px', { fromValue: '118px'}], position: 65000, duration: 1807 },
                { id: "eid85", tween: [ "style", "${_bircake}", "left", '-416px', { fromValue: '108px'}], position: 21000, duration: 500 },
                { id: "eid371", tween: [ "style", "${_video1}", "top", '33px', { fromValue: '33px'}], position: 48126, duration: 0 },
                { id: "eid474", tween: [ "style", "${_Text51}", "font-size", '35px', { fromValue: '35px'}], position: 65000, duration: 0 },
                { id: "eid305", tween: [ "subproperty", "${_Text30}", "filter.blur", '225px', { fromValue: '0.000000px'}], position: 41626, duration: 1000 },
                { id: "eid314", tween: [ "subproperty", "${_Text30}", "filter.blur", '30px', { fromValue: '225px'}], position: 42626, duration: 35 },
                { id: "eid384", tween: [ "style", "${_Text40}", "left", '255px', { fromValue: '255px'}], position: 51626, duration: 0 },
                { id: "eid330", tween: [ "style", "${_Text35}", "opacity", '1', { fromValue: '0'}], position: 43926, duration: 500 },
                { id: "eid334", tween: [ "style", "${_Text35}", "opacity", '0', { fromValue: '1'}], position: 46626, duration: 500 },
                { id: "eid349", tween: [ "style", "${_Text30}", "left", '274px', { fromValue: '277px'}], position: 47126, duration: 428 },
                { id: "eid405", tween: [ "style", "${_Text47}", "opacity", '1', { fromValue: '0'}], position: 57126, duration: 500 },
                { id: "eid406", tween: [ "style", "${_Text47}", "opacity", '0', { fromValue: '1'}], position: 58626, duration: 1000 },
                { id: "eid232", tween: [ "style", "${_cloud32}", "left", '814px', { fromValue: '589px'}], position: 30562, duration: 1001 },
                { id: "eid24", tween: [ "style", "${_Wanyou2}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 750 },
                { id: "eid40", tween: [ "style", "${_Wanyou2}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 500 },
                { id: "eid221", tween: [ "style", "${_cloud23}", "width", '318px', { fromValue: '80px'}], position: 30563, duration: 313 },
                { id: "eid225", tween: [ "style", "${_cloud23}", "width", '460px', { fromValue: '318px'}], position: 30876, duration: 437 },
                { id: "eid131", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,238,238,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,238,1.00)'}], position: 28563, duration: 339 },
                { id: "eid132", tween: [ "color", "${_Stage}", "background-color", 'rgba(231,182,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,238,238,1)'}], position: 28902, duration: 273 },
                { id: "eid133", tween: [ "color", "${_Stage}", "background-color", 'rgba(197,182,253,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(231,182,253,1)'}], position: 29175, duration: 229 },
                { id: "eid134", tween: [ "color", "${_Stage}", "background-color", 'rgba(32,39,62,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(197,182,253,1)'}], position: 29404, duration: 1159 },
                { id: "eid258", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,156,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(32,39,62,1)'}], position: 33563, duration: 1000 },
                { id: "eid333", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,238,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,156,1)'}], position: 44426, duration: 450 },
                { id: "eid381", tween: [ "color", "${_Stage}", "background-color", 'rgba(187,189,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,238,1)'}], position: 49626, duration: 2000 },
                { id: "eid464", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,238,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(187,189,255,1)'}], position: 63626, duration: 2500 },
                { id: "eid242", tween: [ "style", "${_Text24}", "left", '154px', { fromValue: '265px'}], position: 31563, duration: 500 },
                { id: "eid46", tween: [ "style", "${_comment}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 500 },
                { id: "eid62", tween: [ "style", "${_comment}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 2500 },
                { id: "eid68", tween: [ "style", "${_slx}", "opacity", '1', { fromValue: '0'}], position: 14383, duration: 367 },
                { id: "eid71", tween: [ "style", "${_slx}", "opacity", '0', { fromValue: '1'}], position: 15543, duration: 457 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-22549854");

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
                opacity: 0,
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
            "${_Text2Copy}": [
                ["style", "top", '202px'],
                ["style", "font-weight", '900'],
                ["style", "left", '116px'],
                ["style", "font-size", '35px']
            ],
            "${_Text7}": [
                ["style", "top", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '103px']
            ],
            "${_Wanyou2}": [
                ["style", "top", '177px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '167px']
            ],
            "${_Text2}": [
                ["style", "font-weight", '900'],
                ["style", "opacity", '0'],
                ["style", "font-size", '35px']
            ],
            "${_Text10}": [
                ["style", "top", '317px'],
                ["style", "opacity", '0'],
                ["style", "left", '69px']
            ],
            "${_Text2Copy2}": [
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
            "${_guokr2}": [
                ["style", "top", '52px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '112px']
            ],
            "${_Text6}": [
                ["style", "top", '137px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '589px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '197px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-weight", '900'],
                ["style", "left", '121px'],
                ["style", "font-size", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9500,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid3", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
                { id: "eid28", tween: [ "style", "${_Text2Copy3}", "top", '394px', { fromValue: '197px'}], position: 3750, duration: 750 },
                { id: "eid24", tween: [ "style", "${_Wanyou2}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 750 },
                { id: "eid40", tween: [ "style", "${_Wanyou2}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
                { id: "eid35", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 },
                { id: "eid50", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500 },
                { id: "eid60", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 1500 },
                { id: "eid26", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 750 },
                { id: "eid30", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500 },
                { id: "eid33", tween: [ "style", "${_Text7}", "top", '95px', { fromValue: '90px'}], position: 5000, duration: 500 },
                { id: "eid39", tween: [ "style", "${_Text7}", "top", '218px', { fromValue: '95px'}], position: 6000, duration: 500 },
                { id: "eid27", tween: [ "style", "${_Text2Copy3}", "left", '121px', { fromValue: '121px'}], position: 3750, duration: 750 },
                { id: "eid44", tween: [ "style", "${_comment}", "top", '73px', { fromValue: '73px'}], position: 6500, duration: 500 },
                { id: "eid59", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0'}], position: 7750, duration: 750 },
                { id: "eid61", tween: [ "style", "${_Text12}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 750 },
                { id: "eid22", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 1250 },
                { id: "eid31", tween: [ "style", "${_Text7}", "left", '103px', { fromValue: '103px'}], position: 5000, duration: 500 },
                { id: "eid38", tween: [ "style", "${_Text7}", "left", '-535px', { fromValue: '103px'}], position: 6000, duration: 500 },
                { id: "eid48", tween: [ "style", "${_Text10}", "top", '506px', { fromValue: '317px'}], position: 6500, duration: 500 },
                { id: "eid47", tween: [ "style", "${_Text10}", "left", '167px', { fromValue: '69px'}], position: 6500, duration: 500 },
                { id: "eid52", tween: [ "style", "${_Text12}", "left", '121px', { fromValue: '121px'}], position: 7750, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text12}", "top", '218px', { fromValue: '218px'}], position: 7750, duration: 0 },
                { id: "eid46", tween: [ "style", "${_comment}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500 },
                { id: "eid62", tween: [ "style", "${_comment}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 2500 },
                { id: "eid43", tween: [ "style", "${_comment}", "left", '182px', { fromValue: '177px'}], position: 6500, duration: 500 },
                { id: "eid7", tween: [ "style", "${_guokr2}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 750 },
                { id: "eid10", tween: [ "style", "${_guokr2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 500 }            ]
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

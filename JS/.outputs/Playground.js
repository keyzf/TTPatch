_import('TTPatchParser,NSURLSession,TTPatchURLSession,NSURLRequest,NSURL,NSString,TTPatchHotRefrshTool,UIDevice,UIView,UILabel,UIColor,UIFont,UIScreen,UIImageView,UIImage,UITapGestureRecognizer,UIButton,TTPlaygroundModel');defineClass('TTPlaygroundController:UIViewController', {name: property(),viewDidLoad: function () {Super()._c('viewDidLoad');self._c('refresh');},refresh: function () {self._c('cleanSubviews');self._c('addSomeTestView');},funcWithParams_: dynamic(function (param1) {Utils.log_info('[1]动态方法入参:' + param1);}),funcWithParams_param2_: dynamic('void,id,id', function (param1, param2) {Utils.log_info('[2]动态方法入参:' + param1 + ',' + param2);var arg1 = param1[0];var arg2 = param2['vc'];Utils.log_info('[2]动态方法入参:' + arg1 + ',' + arg2);}),funcWithParams_param2_param3_: dynamic('void,NSString *,NSString *,NSString *', function (param1, param2, param3) {Utils.log_info('[3]动态方法入参:' + param1 + ',' + param2 + ',' + param3);}),cleanSubviews: function () {self._c('view')._c('subviews')._c('forEach', subview => {subview._c('removeFromSuperview');});},addSomeTestView: function () {let screenWidth = UIScreen._c('mainScreen')._c('bounds').size.width;let screenHeight = UIScreen._c('mainScreen')._c('bounds').size.height;var label = UILabel._c('new');label._c('setFont_', UIFont._c('systemFontOfSize_', 18));label._c('setTextColor_', UIColor._c('blackColor'));label._c('setFrame_', new TTReact(10, 64 + 20, self._c('view')._c('bounds').size.width - 20, 80));label._c('setText_', '------本页面为Native声明创建的空页面\n修改 Playground.js 实时查看修改效果');label._c('setNumberOfLines_', 0);self._c('view')._c('addSubview_', label);for (var i = 0; i < 9; i++) {let width = screenWidth / 3.5;let react = new TTReact(10 + i % 3 * (width + 10), 120 + 64 + 15 + parseInt(i / 3) * (width + 10), width, width);let witdh = react.size.width;let view = UIButton._c('buttonWithType_', 0);view._c('setFrame_', react);view._c('setBackgroundColor_', UIColor._c('systemGreenColor'));let label = UILabel._c('alloc')._c('init');label._c('setFrame_', react);label._c('setText_', String(i) + '\uD83C\uDF53');label._c('setFont_', UIFont._c('systemFontOfSize_', 20));label._c('setTextColor_', UIColor._c('whiteColor'));label._c('setTextAlignment_', 1);self._c('view')._c('addSubview_', view);self._c('view')._c('addSubview_', label);view._c('addTarget_action_forControlEvents_', self, 'action:', 1 << 6);view._c('setUserInteractionEnabled_', true);label._c('setUserInteractionEnabled_', false);}var btn = UIButton._c('buttonWithType_', 0);btn._c('setBackgroundColor_', UIColor._c('blackColor'));btn._c('setTitle_forState_', 'UUID', 0);btn._c('setFrame_', new TTReact(0, 600, screenWidth, 50));btn._c('addTarget_action_forControlEvents_', self, 'btnDidAction:', 1 << 6);self._c('view')._c('addSubview_', btn);},action_: dynamic(',id', function (btn) {btn._c('setSelected_', !btn._c('isSelected'));if (btn._c('isSelected')) {btn._c('setBackgroundColor_', UIColor._c('whiteColor'));} else {btn._c('setBackgroundColor_', UIColor._c('systemGreenColor'));}}),btnDidAction_: dynamic(',id', function (btn) {var uuid = UIDevice._c('currentDevice')._c('identifierForVendor')._c('UUIDString');Utils.log_info('uuid->' + uuid);let str = self._c('name');btn._c('setTitle_forState_', uuid, 0);btn._c('setBackgroundColor_', UIColor._c('systemGreenColor'));self._c('testFunc');var dic = JSON._c('parse', '{"id":1,"name":"jb51","email":"admin@jb51.net","interest":["wordpress","php"]}');Utils.log_info(dic.name);var userMmodel = UserModel._c('new');userMmodel._c('getUserName');}),funcWithBlockParams_param2_: dynamic(',id,?', function (arg1, callback) {Utils.log_info('block:' + arg1);if (callback) {callback(1);}}),funcWithBlockParams_paramInt2_: dynamic(',id,?', function (arg1, callback) {Utils.log_info('block:' + arg1);if (callback) {callback(1);}})}, {testAction_: function (str) {}});defineClass('UserModel:NSObject', {getUserName: function () {Utils.log_info(self._c('getUserPW'));return 'Alibaba';},getUserPW: function () {return 'self -> UserModel';}}, {});
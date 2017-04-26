var vietteltvApp = angular.module("vietteltvApp",
	["ngRoute",
		"vietteltvControllers",
		"vietteltvServices"
	]);
var vietteltvControllers = angular.module("vietteltvControllers", []);
var vietteltvServices = angular.module("vietteltvServices", []);

vietteltvApp.constant('Constant', {
	DebugMode: true,
	StepCounter: 0,
	clientId: 'viettelSdpClient2',
	guestToken: '00536aefb1f78bca51f8b3fde6f643c5',
	accessToken: '00536aefb1f78bca51f8b3fde6f643c5',
	tokenSecret: '00536aefb1f78bca51f8b3fde6f643c5',
	appSecret: 'viettelSdpUserprofile1',

	APIHost: 'http://otttv.viettel.com.vn',
	//	APIHost : 'http://10.60.70.209:18080',

	WebHost: 'http://beta.vietteltv.vn',
	RecommendHost: 'http://otttv.viettel.com.vn',
	APIHostStream: 'http://27.67.50.6:18080',
	channelDefault: '54c201bc718ce0b6e1007944',
	vodDefault: "58a12fdc718cde303c3e030e",
	channelIdDefault: '154',
	limitedFav: 8,
	currentChannel: 'currentChannel'
});
/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*  Leaked by ♏α⊥⊥ḯṧḯṧм  */

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "TOSS";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/224.jpg",
	"backgrounds/images/225.jpg",
	"backgrounds/images/226.jpg",
	"backgrounds/images/227.jpg",
	"backgrounds/images/228.jpg",
	"backgrounds/images/229.jpg",
	"backgrounds/images/300.jpg",
	"backgrounds/images/301.jpg",
	"backgrounds/images/302.jpg",
	"backgrounds/images/303.jpg",
	"backgrounds/images/304.jpg",
	"backgrounds/images/305.jpg",
	"backgrounds/images/306.jpg",
	"backgrounds/images/307.jpg",
	"backgrounds/images/308.jpg",
	"backgrounds/images/309.jpg",
	"backgrounds/images/310.jpg",
	"backgrounds/images/311.jpg",
	"backgrounds/images/312.jpg",
	"backgrounds/images/313.jpg",
	"backgrounds/images/314.jpg",
	"backgrounds/images/315.jpg",
	"backgrounds/images/316.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "mhjlK3dxm9U", name: "Abul Mogard - Drooping Off"}, 
	{youtube: "kdFGgBsgD7s", name: "Nine Inch Nails - Corona Radiata"}, 
	{youtube: "09pafELL-tU", name: "Akira Yamaoka – Never Forgive Me Never Forget"}, 
	{youtube: "pT7pVK5q8tk", name: "Kelly Bailey - Self-Esteem Fund"}, 
	{youtube: "0z2L0Mo8C1s", name: "Aphex Twin - Curtains"},  
	{youtube: "CUPKGQpsmcQ", name: "Lungfish - Sin To Love"}, 
	
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Enjoy the server",
"Thanks for joining us!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
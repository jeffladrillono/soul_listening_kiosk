$(document).ready(function(){
 
 new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"1. Rich & Flexin",
			poster:"img/album.jpg",
			mp3:"media/mp3/rich_flexin.mp3",
			oga:"media/ogg/rich_flexin.ogg"
		},
		{
			title:"2. Rich & Flexin",
			poster:"img/album.jpg",
			mp3:"media/mp3/rich_flexin.mp3",
			oga:"media/ogg/rich_flexin.ogg"
		},
		{
			title:"3. Rich & Flexin",
			poster:"img/album.jpg",
			mp3:"media/mp3/rich_flexin.mp3",
			oga:"media/ogg/rich_flexin.ogg"
		},
		{
			title:"4. Rich & Flexin",
			poster:"img/album.jpg",
			mp3:"media/mp3/rich_flexin.mp3",
			oga:"media/ogg/rich_flexin.ogg"
		},
		{
			title:"5. Rich & Flexin",
			poster:"img/album.jpg",
			mp3:"media/mp3/rich_flexin.mp3",
			oga:"media/ogg/rich_flexin.ogg"
		},
		{
			title:"6. Rich & Flexin",
			poster:"img/album.jpg",
			mp3:"media/mp3/rich_flexin.mp3",
			oga:"media/ogg/rich_flexin.ogg"
		}
		
	], {
		swfPath: "../js",
		supplied: "oga, mp3",
		wmode: "window"
	});

	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
 
 });
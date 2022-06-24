
	const droparrowimg = document.querySelector("#droparrowimg")
	const searchbar = document.getElementById("search_bar")
	const floors = document.getElementById('floors')
	const arrows = document.getElementById('arrows')
	const currentposition = document.getElementById("current_position")
	const searchlist = document.getElementById("search_bar");
	const img = "src/assert/img/lib/img1.jpg"
	const searchinput = document.getElementById("searchinput")


searchinput.addEventListener('keyup',(e)=>{
	const searchString = e.target.value.toLowerCase()
	const filteredlist = list.filter((item)=>{
		return(
			item.name.toLowerCase().includes(searchString)
			||item.room.toLowerCase().includes(searchString)

			);
	});
	objconverter(filteredlist);
});

const mainpage=()=>{
	const homepage = document.getElementById("homepage");
	homepage.setAttribute("style","opacity :0; visiblity:hidden");
	setTimeout(()=>{homepage.style.display = "none"; },200)
	backToHome(img)
}

const searchback=()=>{	
	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
	const classname= "search_bar";
	searchbar.className = classname;
	droparrowimg.setAttribute("class","")
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
	document.getElementById("searchlistexist").remove();

	}else{
		searchlistrooms()
	}
}
// making list of rooms 
const searchlistrooms=()=>{

	const classname= "search_bar "+"fullpage"
	droparrowimg.setAttribute("class","droparrowimg")
	searchbar.className = classname;
	floors.style.display = "none";
	arrows.style.display = "none";
	currentposition.style.display = "none";
	objconverter(list)
}


const objconverter=(object)=>{
	const flist = object.map((item)=>{
		return `
		<div onclick = "moveforward(${item.id})">
		<div id = "${item.id}">${item.room}</div>
		<div class = "teachname">${item.name}</div>
		</div>
		`
	}).join('');

	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
		document.getElementById("searchlistexist").innerHTML = flist;
	}else {
	const newhave = document.createElement('div');
	newhaveclassname = "center-align "+"container_list";
	newhave.setAttribute("class",newhaveclassname)
	newhave.setAttribute("id","searchlistexist")
	newhave.innerHTML = flist;
	searchlist.appendChild(newhave);}
}
 // urls for library
libimg=["src/assert/img/lib/img1.jpg","src/assert/img/lib/img2.jpg","src/assert/img/lib/img3.jpg","src/assert/img/lib/img4.jpg","src/assert/img/lib/img5.jpg","src/assert/img/lib/img6.jpg","src/assert/img/lib/img7.jpg","src/assert/img/lib/img8.jpg","src/assert/img/lib/img9.jpg","src/assert/img/lib/img10.jpg","src/assert/img/lib/img11.jpg","src/assert/img/lib/img12.jpg","src/assert/img/lib/img13.jpg","src/assert/img/lib/img14.jpg","src/assert/img/lib/img15.jpg","src/assert/img/lib/img16.jpg","src/assert/img/lib/img17.jpg"]
// urls for poster Exhibition
peimg=[""]

// url is a list
const moveforward = (url) =>{
	// const ida=id.getAttribute("id");
	// const url = urllist[ida];
	// console.log(url)
	panorama(url);
	searchlist.style.display="none";
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
}

const panorama=(imglist)=>{
	exisit_file = !!document.getElementsByClassName("psv-canvas-container")
	if (exisit_file == true){
		document.getElementById("panorama").innerHTML=""
	}

	var viewer = new PhotoSphereViewer.Viewer({
		container: 'panorama',
		loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
		touchmoveTwoFingers: false,
		mousewheelCtrlKey: true,
		caption    : 'Cape Florida Light, Key Biscayne <b>&copy; Pixexid</b>',
		defaultLong: '0deg',
		plugins    : [
		  PhotoSphereViewer.MarkersPlugin,
		  [PhotoSphereViewer.VirtualTourPlugin, {
			positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
			renderMode  : PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
		  }],
		],
		navbar: 'zoom move download nodesList caption fullscreen',
	  });
	  
	  var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
	  

	  const node = []
	  virtualTour.setNodes([
		{
		  id      : '0',
		  panorama: imglist[0],
		  name    : 'One',
		  links   : [
			{ nodeId: '1' },
		  ],
		  position: [-78, 0, 0],
		  panoData: { poseHeading: 0 },
		},
		{
		  id      : '1',
		  panorama: imglist[1],
		  name    : 'One',
		  links   : [
			{ nodeId: '2' },
		  ],
		  position: [-78, 0, 0],
		  panoData: { poseHeading: 0 },
		},
		{
		  id      : '2',
		  panorama: imglist[2],
		  name    : 'One',
		  links   : [
			{ nodeId: '3' },
		  ],
		  position: [-78, 0, 0],
		  panoData: { poseHeading: 0 },
		},
		{
		  id      : '3',
		  panorama: imglist[3],
		  name    : 'One',
		  links   : [
			{ nodeId: '4' },
		  ],
		  position: [-78, 0, 0],
		  panoData: { poseHeading: 0 },
		},{
		  id      : '4',
		  panorama: imglist[4],
		  name    : 'One',
		  links   : [
			{ nodeId: '5' },
		  ],
		  position: [-78, 0, 0],
		  panoData: { poseHeading: 0 },
		},
		{
		  id      : '5',
		  panorama: imglist[5],
		  name    : 'six',
		  links   : [
			{ nodeId: '6' },
		  ],
		  position: [22, 0, 0],
		  panoData: { poseHeading: 0 },
		},
		{
		  id      : '6',
		  panorama: imglist[6],
		  name    : 'seven',
		  links   : [
			{ nodeId: '7' },
		  ],
		  position: [22, 0, 0],
		  panoData: { poseHeading: 0 },
		},
		{
		  id      : '7',
		  panorama: imglist[7],
		  name    : 'eight',
		  links   : [
			{ nodeId: '8' },
		  ],
		  position: [22,0, 0],
		  panoData: { poseHeading: 0 },
		},{
		  id      : '8',
		  panorama: imglist[8],
		  name    : 'One',
		  links   : [
			{ nodeId: '9' },
		  ],
		  position: [22, 0, 0],
		  panoData: { poseHeading: 0 },
		},
		{
		  id      : '9',
		  panorama: imglist[9],
		  name    : 'Mech',
		  links   : [
			{ nodeId: '10' },
		  ],
		  position: [22+90, 0, 0],
		  panoData: { poseHeading: 0 },
		},{
		  id      : '10',
		  panorama: imglist[10],
		  name    : '10',
		  links   : [
			{ nodeId: '11' },
		  ],
		  position: [22+90, 0, 0],
		  panoData: { poseHeading: 0 },
		},{
		  id      : '11',
		  panorama: imglist[11],
		  name    : 'One',
		  links   : [
			{ nodeId: '12' },
		  ],
		  position: [22+90, 0, 0],
		  panoData: { poseHeading: 0 },
		},{
		  id      : '12',
		  panorama: imglist[12],
		  name    : 'O13',
		  links   : [
			{ nodeId: '13' },
		  ],
		  position: [22+90, 0, 0],
		  panoData: { poseHeading: 0 },
		},{
		  id      : '13',
		  panorama: imglist[13],
		  name    : 'O14',
		  links   : [
			{ nodeId: '14' },
		  ],
		  position: [22+180, 0, 0],
		  panoData: { poseHeading: 0 },
		},{
		  id      : '14',
		  panorama: imglist[14],
		  name    : 'O15',
		  links   : [
			{ nodeId: '15' },
		  ],
		  position: [22+180, 0, 0],
		  panoData: { poseHeading: -90 },
		},{
		  id      : '15',
		  panorama: imglist[15],
		  name    : 'O16',
		  links   : [
			{ nodeId: '16' },
		  ],
		  position: [22, 0, 0],
		  panoData: { poseHeading: 90 },
		},{
		  id      : '16',
		  panorama: imglist[16],
		  name    : 'O0',
		  links   : [
		  ],
		  position: [45, 0, 0],
		  panoData: { poseHeading: 0 },
		}
	  ], '0');
document.querySelector(".psv-markers-svg-container").style.display = "none";
document.querySelector(".psv-markers").style.display = "none";
document.querySelector(".psv-navbar").style.display="none";
}

const backToHome=(url)=>{new PhotoSphereViewer.Viewer({
	navbar:[
	{"visible":false}
	],
	panorama: url,
	container: 'panorama',
	caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
	loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
	defaultLat: 0.3,
	touchmoveTwoFingers: false,
	mousewheelCtrlKey: true,
  });}

const back=()=>{
	backToHome(img);
	searchbar.style.display="";
	searchbar.className = "search_bar";
	document.getElementById("searchlistexist").innerHTML = "";
	droparrowimg.setAttribute("class","");
}


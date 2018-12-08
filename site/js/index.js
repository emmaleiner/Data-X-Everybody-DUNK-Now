$(document).ready(function() {
	navigator.getUserMedia({
		video: true,
	}, function(stream) {
		console.log("hi");
		$("#video")[0].srcObject = stream;
	}, function(error) {
		console.log(error);
	});

	var arr = ["bird", "cp3", "dirk", "durant0", "durant1", "durant2", "embiid", "giannis", "griffin", "harden0", "harden2", "hayward", "jaylen", "jordan0", "jordan1", "jordan2", "jordan3", "klay", "kobe", "kyrie0", "kyrie1", "lebron0", "lebron1", "lonzo", "lou", "magic", "oladipo", "shaq", "simmons", "steph0", "steph1", "steph2", "steph3", "tatum", "wall", "westbrook"];
	var row = $("#pics");

	function setImages() {
		var i = 0;
		while (i < arr.length) {
			row.append("<div class='col s4'><img class='mypic' width='100%' src='edited/" + arr[i] + ".png'>");
			i += 1;
		}
		$(".mypic").each(function(i) {
		$(this).click(function() {
			$("#selpic").attr("src", "edited/" + arr[i] + ".png");
		});
	});
	} setImages();

	$("#search-btn").click(function() {
		row.html("");
		var ret = []; var i = 0; var x;
		var search = $("#search-in").prop("value").toLowerCase();;
		while (i < arr.length) {
			x = arr[i];
			if (x.indexOf(search) >= 0) {
				ret.unshift(x);
			} else {
				ret.push(x);
			}
			i += 1;
		}
		arr = ret;
		setImages();
	});

	var b = true;
	$("#record").click(function() {
		var x = $("#record");
		x.removeClass("scale-in");
		x.addClass("scale-out");
		var s;
		var t;
		if (b) {
			s = "stop";
			t = "stop";
			$("#go-btn").removeClass("scale-in");
			$("#go-btn").addClass("scale-out");
			// $("#video")[0].pause();
			// $("#vsrc").attr("src", "assets/jenny1.mp4");
			// $("#video")[0].load();
			// $("#video")[0].play();
		} else {
			s = "play_circle_filled";
			t = "record";
			$("#go-btn").removeClass("scale-out");
			$("#go-btn").addClass("scale-in");
			$("#video")[0].pause();
		}
		setTimeout(function() {
			x.html("<i class='material-icons left'>" + s + "</i>" + t);
			x.removeClass("scale-out");
			x.addClass("scale-in");
			clearTimeout(this);
		}, 250);
		b = !b;
		console.log(b);
	});

	// $("#go-btn").click(function() {

	// });


});



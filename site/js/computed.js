$(document).ready(function() {
	var arr = ["computing source poses", "computing source poses", "computing source poses", "computing source poses", "computing source poses", "computing target poses", "computing target poses", "computing target poses", "computing target poses", "computing target poses", "training target model", "training target model", "training target model", "training target model", "matching target to source", "matching target to source", "matching target to source", "creating animation", "creating animation", "creating animation", "creating animation"];
	var i = 0;
	var toAdd = 100.0 / arr.length;

	function timeout() {
		setTimeout(
			function () {
	        	$("#prog-text").html(arr[i] + "...");
				$("#prog-prog").css("width", "" + toAdd*(i+1) + "%");
				i += 1;
				if (i < arr.length) { timeout(); } else { finished(); }
    		},
    		350
    	);
	} timeout();

	function finished() {
		$("#loader").css("display", "none");
		$("#finished").css("display", "");
	}

});

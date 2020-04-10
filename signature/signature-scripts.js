

function plusFix(str) {
	var k = "+";
	var nk = " ";
	var newStr = str.split(k).join(nk);
	return newStr;
}
function showfield(v) {
	if(v=='other')document.getElementById('other').classList.remove("hidden");
	else document.getElementById('other').classList.add("hidden");
}
function print_html() {
	document.getElementById("outputHTML").innerText = document.getElementById("emailSignature").innerHTML;
	document.getElementById("ssc_button").innerHTML = "update source code";
}
function update(a,b) {
	document.getElementById(b + "_field").innerHTML = a;
}
function update_brand(c,d) {
	var logoLocation = "images/logos/";
	var ic = "_icon";
	var lnk = "_link";
	if (c==='ASH') {
		document.getElementById(d + "_img").src = logoLocation + 'ASHospitality_web.jpg';
		document.getElementById("logo" + lnk).href = "http://ashospitality.com";
		document.getElementById("fb" + lnk).href = "http://www.facebook.com/ashospitality/";
		document.getElementById("tw" + lnk).href = "http://www.twitter.com/ashospitality";
		document.getElementById("li" + lnk).href = "http://www.linkedin.com/company/a-s-hospitality";
		document.getElementById("ws" + lnk).href = "http://ashospitality.com/";
		var newFB = document.getElementById("fb" + ic).alt.replace("Dexter Solutions","A S Hospitality");
		document.getElementById("fb" + ic).alt = newFB;
		var newTW = document.getElementById("tw" + ic).alt.replace("Dexter Solutions","A S Hospitality");
		document.getElementById("tw" + ic).alt = newTW;
		var newLI = document.getElementById("li" + ic).alt.replace("Dexter Solutions","A S Hospitality");
		document.getElementById("li" + ic).alt = newLI;
		var newWS = document.getElementById("ws" + ic).alt.replace("Dexter Solutions","A S Hospitality");
		document.getElementById("ws" + ic).alt = newWS;
	} else {
		document.getElementById(d + "_img").src = logoLocation + 'DSNFOB_esigLogo.jpg';
		document.getElementById("logo" + lnk).href = "http://www.dextersolutions.net";
		document.getElementById("fb" + lnk).href = "http://www.facebook.com/branddelivery/";
		document.getElementById("tw" + lnk).href = "http://www.twitter.com/branddelivery";
		document.getElementById("li" + lnk).href = "http://www.linkedin.com/company/dexter-solutions";
		document.getElementById("ws" + lnk).href = "http://www.dextersolutions.net/";
		var newFB = document.getElementById("fb" + ic).alt.replace("A S Hospitality","Dexter Solutions");
		document.getElementById("fb" + ic).alt = newFB;
		var newTW = document.getElementById("tw" + ic).alt.replace("A S Hospitality","Dexter Solutions");
		document.getElementById("tw" + ic).alt = newTW;
		var newLI = document.getElementById("li" + ic).alt.replace("A S Hospitality","Dexter Solutions");
		document.getElementById("li" + ic).alt = newLI;
		var newWS = document.getElementById("ws" + ic).alt.replace("A S Hospitality","Dexter Solutions");
		document.getElementById("ws" + ic).alt = newWS;
	}
}
function contact_update(eml) {
	document.getElementById("email_field").href = "mailto:" + eml;
	var hsname = eml.split("@")[0] + ".png";
	var hsslot = document.getElementById("headshot_img");
	var lbox = document.getElementById("all-logos");
	var padhs = document.getElementById("hs-div");

	hsslot.src = "images/headshots/" + hsname;
	hsslot.width = "94";
	lbox.style = "padding-left: 114px;";
	padhs.style = "float: left; padding-right:18px";
}
function hsError() {
	    var hsslot = document.getElementById("headshot_img");
	    var lbox = document.getElementById("all-logos");
	    var padhs = document.getElementById("hs-div");
		hsslot.removeAttribute("src");
		hsslot.width = "0";
		lbox.style = "";
		padhs.style = "";
		return true;
}
function check_mobile(me) {
	var mi = document.getElementById("mobile_indicator");
	var mf = document.getElementById("mobile_field");
	if (me.checked) {
		mi.innerHTML = "m";
		mf.innerHTML = document.getElementById("mobile").value; }
	else {
		mi.innerHTML = "";
		mf.innerHTML = "";}
}
function check_banner(t,tov,toc) {
		var bf = document.getElementById("b_field");
		if (t.checked){
			bf.innerHTML = '<a href="http://www2.dextersolutions.net/' + toc + '" target="_blank"><img src="images/more/' + tov + '.jpg" style="display:inherit !important;"></a>'; }
		else {
			bf.innerHTML = "";
		}
	}// JavaScript Document


window.onload = function(){
  var anchors = document.getElementById('emailSignature').getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++){
    anchors[i].setAttribute('target', '_blank');
  }
  document.form1.brands.value = QueryString.brands;
  document.form1.name.value = plusFix(QueryString.name);
  document.form1.title.value = plusFix(QueryString.title);
  document.form1.address.value = plusFix(QueryString.address);
  document.form1.other.value = plusFix(QueryString.other);
  document.form1.phone.value = plusFix(QueryString.phone);
  document.form1.mobile.value = plusFix(QueryString.mobile);
  document.form1.email.value = plusFix(QueryString.email);
  document.form1.bannerOptions.value = plusFix(QueryString.bannerOptions);
		
  if (QueryString.m_enabler=="1") {
	  update(document.getElementById("mobile").value, "mobile"); 
	  update(document.getElementById("mobile").value, "mobile"); 
  } else {
	  document.getElementById("m_enable").checked = false;
	  check_mobile(document.getElementById("m_enable"));
	  
  };

  var ben = document.getElementById("b_enable");
  var bopt = document.getElementById("bannerOptions");
  if (QueryString.b_enabler=="1") {
	  ben.checked = true;
	  check_banner(ben,bopt.options[bopt.selectedIndex].value,bopt.options[bopt.selectedIndex].dataset.comment);
  }  else {};
		
  update_brand(QueryString.brands, "branding");
  update(document.getElementById("name").value, "name");
  update(document.getElementById("title").value, "title");
	//address update	
  var ads = document.getElementById("address");
  if (ads.selectedIndex == 4) { update(document.getElementById("other_address").value, "address");
  document.getElementById("other").classList.remove("hidden"); }
  else { update(ads.options[ads.selectedIndex].innerHTML, "address"); }
		
  update(document.getElementById("phone").value, "phone");
  update(document.getElementById("email").value, "email");
  contact_update(QueryString.email);
}
	




var objLang = {
    ar: {
        demo: "Arabic",
    },
    fr: {
       demo: "Francais",
    },
    an: {
       demo: "Anglais ",  
    }
}

var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
var language = urlParam.get('lang');

if (language === "ar") {
 
    document.getElementById("demo").innerHTML = objLang.ar.demo;      
}
else if (language === "fr") {

    document.getElementById("demo").innerHTML =objLang.fr.demo;  
  }
  
else if (language === "an") {

    document.getElementById("demo").innerHTML = objLang.an.demo;     
}
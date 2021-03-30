// clear cart
function vider_all_localstorage(){
    localStorage.clear();
}


// affichage cart 
function onload_start(){
    if (typeof(Storage) !== "undefined") {
        // Retrieve
        var body_table = document.getElementById("body_table");
        let old_data = JSON.parse(localStorage.getItem('data'));
        var prixOneProdact = 0;
        var prixProdactTotal = 0;
        var PointFTotal = 0;

        body_table.innerHTML = "";
        for (i = 0; i < old_data.length; i++) {
            prixOneProdact = parseFloat(old_data[i].contityData);
            prixProdactTotal = prixProdactTotal + prixOneProdact;
            PointFTotal +=10;
            body_table.innerHTML += '<tr class="print-product" ><td style="display: flex;"><img src="../image/tacos.jpg" style="width: 26%;"><p style="font-size: 28px; margin: 56px 115px;">'+old_data[i].nameData+'</p></td><td><p  style="font-size: 30px;"><span id="prixOneProdactData'+i+'" >'+old_data[i].contityData+'</span><span> DH </span></p></td></tr>';
            prixOneProdact = 0;
            console.log('old_data[i].nameData : '+old_data[i].nameData);
            console.log('old_data[i].contityData : '+old_data[i].contityData);
        }
        console.log(PointFTotal);
        body_table.innerHTML +=' <h3>Votre Point de fidélité est : '+PointFTotal+' Points </h3>'
        body_table.innerHTML +='<div class="subtotal cf"><ul><li class="totalRow final "><span class="label ">Total</span><span class="value" id="Total">'+prixProdactTotal+'DH </span></li><h1 id="PrixAfter"></h1><li class="totalRow"><a href="#" class="btn continue" Checkout></a></li></ul></div>';
        body_table.innerHTML += '<div class="promoCode"><label for="promo">Have A Promo Code?</label><input id="CodeP" type="text" name="promo" placholder="Enter Code" /><a href="#" onclick="SubCodeP();" class="btn"></a></div </div>';
       

        if(localStorage.getItem('PrixTotal') == null){
            
            localStorage.setItem("PrixTotal", prixProdactTotal);
        }
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
  
    axios.post('http://localhost:3000/table/true').then((response) => {
        var htmlTable = '';
        var elementTable = document.getElementById('tableDispo');
        if(response.data.length <= 0){
          htmlTable += `
          <option >Tous les tables est reservé !</option>
          `
        }
        else{
          response.data.forEach(element => {
            htmlTable += `
            <option value="${element.table}">${element.table}</option>
            `
        });
        }
    
        elementTable.innerHTML = htmlTable;
      })
}

//Code Promo 


// function pour  total - codepromo
function  SubCodeP(){
    prixProdactTotal= localStorage.getItem('PrixTotal');
    const CodeP = document.getElementById("CodeP").value;
    axios.get(`http://localhost:3000/code_promo/CodeP/${CodeP}`).then((res,data) => {

        console.log(res.data[0].code_promo);

    if (res.data[0].code_promo!= undefined || res.data[0].code_promo== "") {
       prixProdactTotal = prixProdactTotal - ((prixProdactTotal * 20) / 100);
       console.log(prixProdactTotal);
       document.getElementById("Total").innerHTML=prixProdactTotal;
       document.getElementById("CodeP").value='';

    }
    })
}









// Pop up 
$('button').click(function () {
    $('.pop-up').addClass('open');
  });
  
  $('.pop-up .close').click(function () {
    $('.pop-up').removeClass('open');
  });



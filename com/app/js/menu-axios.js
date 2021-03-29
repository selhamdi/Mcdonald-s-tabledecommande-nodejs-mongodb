//get all menu 
axios.get('http://localhost:3000/categorie')
.then(function (response) {
    var tbody = document.getElementById("tbody");
    var child = '';
    child+=" <div class='button'>";
    response.data.forEach(element => {
        child += "<li>";
        child += "<div class='colun'>";
        child += " <img src='../image/tacos.jpg' alt='' style=' height: 120px;'>";
        child += "<a href='./menu.html?_id=" + element._id + "'><p style='margin-top: -30%;margin-left: 55%;font-size: 22px;'>" + element.categorie_name + "</p></a>";
        child += "</div>";
        child += "</li>";
    });
    tbody.innerHTML = child;
})
.catch(function (err) {
    console.log(err);
});

//pas url 
const query = window.location.search;
const url = new URLSearchParams(query);
const _id = url.get('_id');
console.log(_id);

//get sous categorie
axios.get(`http://localhost:3000/sous_categorie/sous_categorie/${_id}`)
    .then(function (response) {
        var tbody = document.getElementById("sous_categorie");
        console.log(response)
        var child = '';
        child += "<header>";
        child += "<div class='colun' style='display: flex; border: 6px solid #FFCD00; padding: 11px;'>";
        child += " <img src='/Front-end/app/image/categorie.jpg' alt='' style='   height: 120px;'>";
        child += "<p style=' margin-top: 16%;'>Our Categorie</p>";
        child += "</div>";
        child += "</header>";
        child += "<div style= 'border: 6px solid #D52B1E;     margin-top: 7%;>";
        response.data.forEach(element => {
            child += "<li>";
            child += "<div class='colun'>";
            child += " <img src='../image/maxresdefault.jpg' alt='' style=' height: 120px;'>";
            child += "<a href='./menu.html?_id=" + element._id + "'><p style='margin-top: -30%;margin-left: 55%;font-size: 22px;'>" + element.sous_categorie_name + "</p></a>";
            child += "</div>";
            child += "</li>";
        });
        child += "</div>";

        tbody.innerHTML = child;
    })
    .catch(function (err) {
        console.log(err);
    });

   
//get product avec id
    axios.get(`http://localhost:3000/product/id/${_id}`)
    .then(function (response) {
      var tbody = document.getElementById("product");
      var child = '';
      var price ='';
      var name='';        
       response.data.forEach(element => {
        price = element.price;
        name=element.product_name;
        child += " <div style='display: flex;border: 6px solid #FFCD00;padding: 38px;width: 100%;'>";
        child += " <div class='col' style='display:flex'>";
        child += "<div class='card' style='width: 20rem;'>";
        child += "<img class='card-img-top' src='../image/eat it.png' alt='Card image cap' style='height: 196px;'>";
        child +=" <div class='card-block'>";
        child +="<h4 class='card-title'>"+element.product_name+"</h4><input type='hidden' id='product_name' value='"+element.product_name+"'>";
        child +=" <p class='card-text'>Price: <span >"+element.price+"</span></p><input type='hidden' id='price' value='"+element.price+"'>";
        // child +=" <a href='#'' data-name='"+element.product_name+"' data-price='0.5' class='add-to-cart btn btn-primary'>Add to cart</a>";
        child+=" <input type='button' value='Ajouter Au Panier' onclick='savee(`"+price+"`,`"+name+"`)' style='    padding: 8px;border: none;'>";
        child += "</div>";
        child += "</div>";
        child += "</div>";
        child += "</div>";

      });

      tbody.innerHTML = child;
    })
    .catch(function (err) {
      console.log(err);
    });



//get all sup 
    axios.get('http://localhost:3000/sup')
    .then(function (response) {
      var tbody = document.getElementById("sup");
      var child = '';
      response.data.forEach(element => {
        price = element.price;
        name= element.nomSupp;
        child += " <div class='col' style='display:flex'>";
        child += "<div class='card' style='width: 20rem;'>";
        child += "<img class='card-img-top' src='../image/Hawai.jpg' alt='Card image cap' style='height: 196px;'>";
        child +=" <div class='card-block'>";
        child +="<h4 class='card-title'>"+element.nomSupp+"</h4><input type='hidden' id='product_name' value='"+element.nomSupp+"'>";
        child +=" <p class='card-text'>Price: <span >"+element.price+"</span></p><input type='hidden' id='price' value='"+element.price+"'>";
        // child +=" <a href='#'' data-name='"+element.product_name+"' data-price='0.5' class='add-to-cart btn btn-primary'>Add to cart</a>";
        child+=" <input type='button' value='Ajouter Au Panier' onclick='savee(`"+price+"`,`"+name+"`)' style='    padding: 8px;border: none;'>";
        child += "</div>";
        child += "</div>";
        child += "</div>";
      });
            tbody.innerHTML = child;
    })
    .catch(function (err) {
      console.log(err);
    });


function savee(contity , name){
console.log(contity) ;
   console.log(name) ;

    let contityVal = contity;
    let nameVal = name;

    if(localStorage.getItem('data') == null){
        let obj1 = [
        {contityData: contityVal, nameData: nameVal}
        ]
        localStorage.setItem("data", JSON.stringify(obj1));
        window.location.assign("file:///C:/Users/admin/Desktop/M/Front-end/app/html/panier.html");
    }else{

        let old_data = JSON.parse(localStorage.getItem('data'));

        old_data.push({contityData: contityVal, nameData: nameVal})

        localStorage.setItem('data' , JSON.stringify(old_data));
        window.location.assign("file:///C:/Users/admin/Desktop/M/Front-end/app/html/panier.html");

    }
    
}

// Pop up 
$('button').click(function () {
  $('.pop-up').addClass('open');
});

$('.pop-up .close').click(function () {
  $('.pop-up').removeClass('open');
});



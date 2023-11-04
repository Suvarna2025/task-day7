//a.Print the countires of Asia

var  crequest= new XMLHttpRequest();
crequest.open("GET", "https://restcountries.com/v3.1/all",true)
crequest.send();
crequest.onload = function(){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((a)=>{
        if(a.region==='Asia'){
            return a.name
        }})
    
console.log(asia);}


//b. Print the total population of countries using reduce function

var  arequest= new XMLHttpRequest();
arequest.open("GET", "https://restcountries.com/v3.1/all",true)
arequest.send();
arequest.onload = function(){
    var adata= arequest.response;
    var aresult = JSON.parse(adata);
    var ares = aresult.reduce((a,b)=>a+b.population,0)

    console.log(ares);
}

//c.Print the following details name, capital, flag using forEach function

 var requ=new XMLHttpRequest();
 requ.open('GET',"https://restcountries.com/v3.1/all",true)
 requ.send();
 requ.onload=function (){
     var coD=JSON.parse(this.response);
     coD.forEach((element)=>{
         console.log(element.name,element.capital,element.flag);
     })}
 

//d. Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data= request.response;
    var result = JSON.parse(data);
    var res = result.filter((x)=> x.population<200000)
    res.map((ele)=>console.log(ele.name.common))
}



//e.Print the country that uses US dollars as currency.


var  brequest= new XMLHttpRequest();
brequest.open("GET", "https://restcountries.com/v3.1/all",true)
brequest.send();
brequest.onload = function(){
    var bdata= brequest.response;
    var bresult = JSON.parse(bdata); 
    var curr = bresult.filter((val)=>val.currencies && val.currencies.USD)
    curr.forEach((val)=>console.log(val.name.common))
    }

    
   
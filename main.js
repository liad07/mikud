 function f() {
        var arr;
        var  city=""
        var  street=""
        var  numhouse=""
        var all=""
        var url="https://galasd4w3.pythonanywhere.com/?mikud="+ document.getElementById("mikud").value
        fetch(url)
            .then(response => response.json())
            .then(data =>document.getElementById("all").textContent=data.city+","+data.street+","+data.numhouse)
/*
        arr.mikud//.replace("\r","")
        arr.city
        arr.street
        arr.numhouse
 */
       // document.getElementById("all").value=
    }

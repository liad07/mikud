    function f() {
        var arr;

        var url="https://galasd4w3.pythonanywhere.com/?mikud="+ document.getElementById("mikud").value
        fetch(url)
            .then(response => response.json())
            .then(data => arr=data)
/*
        arr.mikud//.replace("\r","")
        arr.city
        arr.street
        arr.numhouse
 */
        console.log(arr)
        document.getElementById("all").value=arr

    }

# mikud api
## javascript
```javascript
   var url="https://galasd4w3.pythonanywhere.com/?token=example&mikud="+ document.getElementById("mikud").value
        fetch(url)
            .then(response => response.json())
            .then(data =>document.getElementById("all").textContent=data.city+","+data.street+","+data.numhouse)
   var url="https://galasd4w3.pythonanywhere.com/?token=example&city="+ document.getElementById("city").value+"&street="+document.getElementById("street").value+"&numhouse="+document.getElementById("numhouse").value
        fetch(url)
            .then(response => response.json())
            .then(data =>document.getElementById("all").textContent=data.mikud)         
```
203 of the 365 chalenge in 2022 1 day 1 challenge

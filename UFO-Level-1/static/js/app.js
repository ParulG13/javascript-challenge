// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody= d3.select("tbody");
//console.log(data);
//clears the data
tbody.html("");

data.forEach((row) => {
    //console.log(row);
    var r = tbody.append("tr");
    Object.entries(row).forEach(([key, value])=>{
        //console.log(value);

        var cell=r.append("td");
        cell.text(value);
    }); 
});

// data.forEach((row) => {
//     var r=tbody.append("tr");
//     Object.values(row).forEach((val) => {
//         var cell=r.append("td");
//         cell.text(val);
//     });
// });


var submit=d3.select("#filter-btn");
submit.on("click", function(){
    var inputElement=d3.select("#datetime");
    var inputValue=inputElement.property("value");
    //console.log(inputValue);
    //console.log(tableData);

    var filteredData=tableData.filter(tableData => tableData.datetime === inputValue);
    //console.log(filteredData);
    
    tbody.html("");
    var td= d3.select("tbody")
    filteredData.forEach((row) => {
        console.log(row);
        var r = td.append("tr");
        Object.entries(row).forEach(([key, value])=>{
            console.log(value);
    
            var cell=td.append("td");
            cell.text(value);
        });
});
});

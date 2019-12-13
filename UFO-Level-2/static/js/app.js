// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody= d3.select("tbody");
//console.log(data);

//create and load table
function loadTable(data){
    //clears the data
    tbody.html("");

    // create table rows and add table data
    data.forEach((row) => {
        //console.log(row);
        var r = tbody.append("tr");
        Object.entries(row).forEach(([key, value])=>{
            //console.log(value);

            var cell=r.append("td");
            cell.text(value);
    });
});
}

// get the changed values of filters
var filters={};

// get values
function getValues(){
    //d3.event.preventDefault();
    var inputElement=d3.select(this).select("input");
    var inputValue=inputElement.property("value");
    var inputId=inputElement.attr("id");
    if (inputValue){
        filters[inputId]=inputValue;
    }
    else {
        delete filters[inputId];
    }
    applyFilters();
}

function applyFilters(){
    let filteredData=tableData;
    Object.entries(filters).forEach(([key, value])=>{
        filteredData=filteredData.filter(row => row[key]=== value);
    });
    loadTable(filteredData);
}

d3.selectAll(".filter").on("change", getValues);
loadTable(tableData);
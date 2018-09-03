/**
*	Converting Excel file to JSON
*	https://stackoverflow.com/questions/28782074/excel-to-json-javascript-code
*
*	!!Important
*	Only for excel.xls files. If we will need excel.xlsx we change XLS.CFB to XLSX.CFB
*/

var oFileIn;

$(function() {
    oFileIn = document.getElementById('my_file_input');
    if(oFileIn.addEventListener) {
        oFileIn.addEventListener('change', filePicked, false);
    }
});


function filePicked(oEvent) {
    // Get The File From The Input
    var oFile = oEvent.target.files[0];
    var sFilename = oFile.name;
    // Create A File Reader HTML5
    var reader = new FileReader();
    
    // Ready The Event For When A File Gets Selected
    reader.onload = function(e) {
        var data = e.target.result;
        var cfb = XLS.CFB.read(data, {type: 'binary'});
        var wb = XLS.parse_xlscfb(cfb);
        // Loop Over Each Sheet
        wb.SheetNames.forEach(function(sheetName) {
            // Obtain The Current Row As CSV
            var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);   
            var data = XLS.utils.sheet_to_json(wb.Sheets[sheetName], {header:1});
            // JSON stores in data variable
            console.log(data);   
            $.each(data, function( indexR, valueR ) {
                var sRow = "<tr>";
                $.each(data[indexR], function( indexC, valueC ) {
                    sRow = sRow + "<td>" + valueC + "</td>";
                });
                sRow = sRow + "</tr>";
                $("#my_file_output").append(sRow);
            });
        });
    };
    
    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(oFile);
}

/**	Not usable till we make a business logic

// function for sending sorted JSON to Python
	function sendJson(){
	    	//HTTP Request
	    	var xhr = new XMLHttpRequest();
	    	//POST method for http://example.com/json
	    	xhr.open('POST', 'http://example.com/json' , true);
	    	//header
	    	xhr.setRequestHeader("Content-type", "application/json");
	    	//checking response status
	    	xhr.onreadystatechange = function () {
	    		//if OK
	    	    if (xhr.readyState == 4 && xhr.status == 200) {
	    	        //var json = JSON.parse(xhr.responseText);
	    	    }
	    	}
	    	//prepare JSON to POST
	    	var data = JSON.stringify({ 
	    	// Here we will put JSON to POST. 
	    	// The problem is that I wrote here like "test": test where variable test was declared
	    	// with input from form.
	    	});
	    	//POST JSON
	    	xhr.send(data);
	    	//console.log for OK
	    	console.log("Folder " + name + " successfully added!");
	}

*/

// function for view Excel fiel
	function getExcel(){
	      //making AJAX request
	      var xhr = new XMLHttpRequest();
	      //GET method for //api.jsonbin.io/b/5b8c23f5db948c68635b6aea
	      xhr.open('GET', 'http://api.jsonbin.io/b/5b8c23f5db948c68635b6aea', true);
	      //function for checking status 
	      xhr.onload = function(){
	    	//checking status
	        if(this.status == 200){
	          //if OK here we parsing JSON
	          var data = JSON.parse(this.responseText);
	          // prepare var for output
	          var output = '';
	          //cheking responce
	          console.log(data);
	          //output in index.html where div id=excelData
	          document.getElementById('excelData').innerHTML = output;
	        }
	      }
	      //GET JSON
	      xhr.send();
	}

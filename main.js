	// function for view Excel fiel
	function getExcel(){
	      //making AJAX request
	      var xhr = new XMLHttpRequest();
	      //GET method for //api.jsonbin.io/b/5b8c23f5db948c68635b6aea
	      xhr.open('GET', 'api.jsonbin.io/b/5b8c23f5db948c68635b6aea', true);
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
	          //output data in a table
	          for(var i in data){
	        	  //output data in a table. Here we generate HTML
	        	  output +=  
	        		  '<th>' + data[i].id + '</th>' +
	        		  '<th>' + data[i].name + '</th>' +
	        		  '<th>' + data[i].name1 + '</th>' +
	        		  '<th>' + data[i].name2 + '</th>' +
	        		  '<th>' + data[i].name3 + '</th>' +
	        		  '<th>' + data[i].name4 + '</th>' +
	        		  '<th>' + data[i].name5 + '</th>' +
	        		  '<th>' + data[i].name6 + '</th>' +
	        		  '<th>' + data[i].name7+ '</th>' +
	        		  '<th>' + data[i].name8 + '</th>';
	          }
	          //output in index.html where div id=excelData
	          document.getElementById('excelData').innerHTML = output;
	        }
	      }
	      //GET JSON
	      xhr.send();
	}
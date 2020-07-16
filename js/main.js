// JavaScript Document
$(document).ready(function(){
		$.ajax({
			url:"http://mundofeliz.site/servicioweb/servicioclientes.php",
			method:"POST",
			dataType:"json"
		}).done(function(data){
			//alert(data);
			$.each(data,function(index,value){
				//alert(value.nombre);
				$("#tclientes tbody").append("<tr><td>" + value.dni + "</td><td>" + value.nombre + "</td></tr>" );
				
			});
			$("#tclientes tbody tr").click(function(){
				$("#tclientes tbody tr").css("background-color","transparent");
				$(this).css("background-color","#75D8E3");
				var codigo = $(this).find("td:first-child").text();
				//alert(codigo);
				mostrarPedidos(codigo);	
			});
					
			
		});
		
		function mostrarPedidos(codigocaty){
		
		$.ajax({
			url:"http://mundofeliz.site/servicioweb/servicioinfo.php",
			method:"POST",
			dataType:"json",
			data:{caty:codigocaty}
		}).done(function(data){
			//alert(data);
			$("#tinfo tbody").html("");
			$.each(data,function(index,value){
				//alert(value.nombre);
				$("#tinfo tbody").append("<tr><td>" + value.direccion + "</td><td>" + value.email + "</td><td>" + value.telefono + "</td></tr>");
			});
			/*$("#tinfo tbody tr").click(function(){
				$("#tinfo tbody tr").css("background-color","transparent");
				$(this).css("background-color","#ffcc00");
				var codigo = $(this).find("td:first-child").text();
				alert(codigo);
			});*/
			
		});
			
		}
	});
		
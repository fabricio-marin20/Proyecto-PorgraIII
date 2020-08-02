		function findMe(){
			var output = document.getElementById('map');

			//Obtenemos latitud y longitud
			function localizacion(posicion){

				var latitude = posicion.coords.latitude;
				var longitude = posicion.coords.longitude;

				
                                document.getElementById('inputlong').value = longitude;
                                document.getElementById('inputlat').value = latitude;

			}

			function error(){
				output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

			}

			navigator.geolocation.getCurrentPosition(localizacion,error);

		}
                
                        
                        function calcular(){

				var res = 0;
                                var RC = 0;
				var text1 = document.getElementById("Dis").value;
                                var num2 =0;
                                num2 = text1;
                                res= parseFloat(num2) * 0.80;
                                RC= parseFloat(res) * 581.81;

				
                                document.getElementById('TD').value = res;
                                document.getElementById('TC').value = RC;

			}
                        function entrar(){
                            var usu = document.getElementById("IniUsua").value;
                            var pass = document.getElementById("IniPass").value;
                            
                            
                        if (usu=='prueba' && pass =='1234' && document.getElementById("gridRadios2").checked){ 
                             alert("Bienvenido pasajero"); 
                            location.href='IterUsu.html';
                            } 
                        
                        if (usu=='conductor' && pass =='1234' && document.getElementById("gridRadios1").checked){ 
                             alert("Bienvenido conductor"); 
                             location.href='condu.html';
                            }
                        else{ 
                           alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
                            } 
                        } 
                    
                        function distancia(){
                            var LonO = document.getElementById("inputlong").value;
                            var LatO = document.getElementById("inputlat").value;
                            var LonD = document.getElementById("long").value;
                            var LatD = document.getElementById("lat").value;
                            var Radio = 6378.137; ;
                            var a = 0;
                            var c = 0;
                            var DT = 0;
                            var Dlong =0;
                            var Dlat=0;
                            
                            Dlong=parseFloat(LonD)-parseFloat(LonO);
                            Dlat=parseFloat(LatD)-parseFloat(LatO);
                            a = Math.pow(Math.sin(Dlat/2), 2) + Math.cos(LatO) * Math.cos(LatD)  * Math.pow(Math.sin(Dlong/2),2);
                            c= 2* Math.asin(Math.sqrt(a));
                            DT = Radio * c; 
                            document.getElementById('Dis').value = DT;
                            }
                      
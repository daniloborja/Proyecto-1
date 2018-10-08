/* Roles
1: Admin
2: cliente
*/
  	function obtenerListaUsuarios(){
  		var listaUsuarios =JSON.parse(localStorage.getItem('listaUsuariosls'));
  		if (listaUsuarios==null) {
  			listaUsuarios=[
  			//id    Nombre   Apellido    correo          contraseña   fecha nacimiento    rollUsuario
  			['1', 'Danilo', 'Borja', 'danborja@gmail.com', '1234',     '06/06/1966',      '1'],
  			['2', 'Edgar', 'Andrade', 'eandradee1991@gmail.com', '12345','16/10/1991', '2']
  			]
  		}
  		return listaUsuarios;
  	}

  	function validarCredenciales (pCorreo, pContrasena){
  		//Me va a valirdar si la persona puede o no iniciar sesion o no
  		var listaUsuarios=obtenerListaUsuarios();
  		var bAcceso=false;
  		for (var i = 0; i <listaUsuarios.length ; i++) {
  		  	if (pCorreo==listaUsuarios[i][3]&& pContrasena==listaUsuarios[i][4]) { 
  		  		bAcceso=true;
  		  		sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]+' '+ listaUsuarios[i][2]);
  		  		sessionStorage.setItem('rollUsuarioActivo', listaUsuarios[i][6]);
  		  	}
  		} 
  	 return bAcceso;
  	}
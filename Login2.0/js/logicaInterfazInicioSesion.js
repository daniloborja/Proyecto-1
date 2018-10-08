document.querySelector('#btnIngresar').addEventListener('click', iniciartSesion);

function iniciartSesion(){
	var sCorreo='';
	var sContrasena='';
	var bAcceso=false;
	
	sCorreo=document.querySelector('#txtCorreo').value;
	sContrasena=document.querySelector('#txtContrasena').value;

	bAcceso= validarCredenciales(sCorreo,sContrasena);
	console.log(bAcceso);   // Este boton solo es para ver si valida o no esta vaina
	
	if (bAcceso== true) {
		window.location.href= 'admin.html';
	}
	
}
/*
function ingresar(){
	var rol = sessionStorage.getItem('rollUsuarioActivo');
	switch (rol){
		case '1':
		window.location.href= 'admin.html';
		break;

		case '2':
		window.location.href='cliente.html';
		break;

		default :
		window.location.href= 'index.html';
		break;
	}
}
*/
//El btnIngresar es el id que se pudo en la pagina index.html al boton de inicio de sesion
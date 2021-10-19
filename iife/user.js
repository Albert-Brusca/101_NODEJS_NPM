// IIFE
var user =(function (e ='abrusca@iesebre.com' ) {
    let email = e;
    var password = 'anahsgvaha';

    function consoleme() {
        console.log('Usuari: ' + email)
    }

    function setemail() {

    }

    return {
        consoleme: consoleme,
        email: email
    }
})()
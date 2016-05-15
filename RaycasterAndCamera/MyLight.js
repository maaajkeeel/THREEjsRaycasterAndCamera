
/*
    klasa światła, utworzona w pliku MyLight.js
*/

function MyLight(color, intensity, distance, angle) {
    var light = [];
    //zmienne, np: materiał i geometria sfery


    // kontener
    var container = new THREE.Object3D();
    var lightGreen = new THREE.SpotLight(color, intensity, distance, angle);
    var spherGeom = new THREE.SphereGeometry(5, 32, 32);
    var mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var lampMesh = new THREE.Mesh(spherGeom, mat);    // init
    function init() {
        

        lightGreen.position.set(0, 150, 0);
        container.add(lampMesh);
        container.add(lightGreen);
        
        container.add(sHelper);

    }

    init();

    // funkcja publiczna zwracająca obiekt kontenera
    // czyli nasze światło

    this.getLight = function () {

        return container;

    }

    // inne funkcje publiczne potrzebne do manipulacji światłem
 
}

	//Here is the functionality of the slider

	wow = new WOW(
		{
		  animateClass: 'animated',
		  offset:       100,
		  callback:     function(box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		  }
		}
	  );
	  wow.init();
	  document.getElementById('moar').onclick = function() {
		var section = document.createElement('section');
		section.className = 'section--purple wow fadeInDown';
		this.parentNode.insertBefore(section, this);
	  };
	
//Here is the map of the site

	// On initialise la latitude et la longitude de Nantes (centre de la carte)
	var lat = 47.218371;
	var lon =  -1.553621;
	var macarte = null;
	// Fonction d'initialisation de la carte
	function initMap() {
		// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
					var	macarte = L.map('map').setView([lat, lon], 11);
						// Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
						L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
								// Il est toujours bien de laisser le lien vers la source des données
								attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
								minZoom: 1,
								maxZoom: 20
						}).addTo(macarte);
				}
	window.onload = function(){
		// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
		initMap(); 
	};
</script>
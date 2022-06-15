1- dalle richieste WP API vengono scaricati i dati nello store

MENU
Dai dati dello store del menu vengono presi 3 dati importanti per costruire ogni singolo bottone/link del menu.
questo corrisponde al menu che hai sul CMS WP:
    title -> il nome del singolo elemento del menu (il bottone)
    object_id ->
    object -> il tipo di elemento (se è una 'page' o un 'article', a seconda di cosa hai messo nel menu su WP)
Es: category/imieiviaggi/4 

REACT ROUTING
quando clicchi su un elemento del menu, il link dell' elemento viene riportato sulla barra degli indirizzi e letto da react router.
In ogni componente Route c'è un 'path' e un 'element'.
React router rimane in 'ascolto' della barra degli indirizzi e quando cambia va a controllare le 'path' di tutti i componenti Route che hai inserito. Quando trova quello che corrisponde a quello della barra indirizzi renderizza il componente che gli hai messo nella proprietà 'element'.

In questo modo, partendo dalla costruzione del link dal MENU, puoi decidere di dividere in gruppi gli elementi del menu (ognuno per tipo, es: 'page' o 'categoria') e costruire una 'path' per far capire a react route quale elemento vuoi far renderizzare in base al tipo.
Es: se inserisci all' inizio della path 'category' renderizza CategoryComponent.
//generación de todo4d.htm
var fs = require('fs'),  path = require('path'),  xmlReader = require('read-xml');
var convert = require('xml-js');
var FILE = path.join(__dirname, './todo4d.kml'); 
xmlReader.readXML(fs.readFileSync(FILE), function(err, data) {
    if (err) {
        console.error(err);
    }
	var rta ="<html><head><title>ToDo4D</title><meta name='Autor' content='Jorge4D' /><meta name='Topico' content='kml2svg' /><meta name='Entidad' content='todo4d' /><meta name='lat' content='6.217' /><meta name='lon' content='-75.563' /><meta name='alt' content='1600' /><meta name='tim' content='2024/01/27_08:39:29' /></head><body style='margin:0;padding:0;'><svg id='panel4d' preserveAspectRatio='none' viewBox='-180.000 -90.000 180 180' style='display: block; width:512px; height:512px;  position:absolute; left: 0;right: 0;top: 0px; margin: 0 auto; outline: blue solid 1px;'><polyline shape-rendering='geometricPrecision' id='fondomar' points='-180.000,-90.000 0,-90.000 0,90.000 -180.000,90.000 -180.000,-90.000' style='fill: rgb(9,61,222); stroke: rgb(9,61,222); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round;'></polyline>";
	var xml = data.content;
    var result = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));
	var listado=result.kml.Document.Folder.Placemark;
	for (var i=0; i< listado.length; i++){
		var nombre = listado[i].name._text;
		console.log(nombre);
		poligono=0;
		if (listado[i].Polygon) {
			var coordenadas = listado[i].Polygon.outerBoundaryIs.LinearRing.coordinates._text;
			var nodos = coordenadas.split(" ");
			var pruta = "";
			for (var j=0; j< (nodos.length-1); j++){
				texto=nodos[j].replace(/[\s*|\s*$\n\t]/g,'');
				var coord = texto.split(",");
				var lat= -coord[1];
				var lon=coord[0];
				//var alt = coord[2];
				pruta=pruta + lon +"," + lat + " ";
			}
			var pcolor='rgb(93,161,65)';
			if (nombre == 'Andes')        { pcolor = 'rgba(20,58,28,0.5)'; }
			if (nombre == 'LaMacarena')   { pcolor = 'rgba(20,58,28,0.5)'; }
			if (nombre == 'SierraNevada') { pcolor = 'rgba(20,58,28,0.5)'; }
			if (nombre == 'Groenlandia')  { pcolor = 'white'; }
			if (nombre == 'groenlandia1') { pcolor = 'white'; }
			if (nombre == 'groenlandia2') { pcolor = 'white'; }
			if (nombre == 'groenlandia3') { pcolor = 'white'; }
			if (nombre == 'groenlandia4') { pcolor = 'white'; }
			if (nombre == 'Islandia')     { pcolor = 'white'; }
			if (nombre == 'Antartida')    { pcolor = 'white'; }
			if (nombre == 'Antartida1')   { pcolor = 'white'; }
			if (nombre == 'Antartida2')   { pcolor = 'white'; }
            if (nombre == 'area1')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area2')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area3')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area4')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area5')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area6')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area7')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area8')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area9')  { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area10') { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area11') { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'area12') { pcolor = 'rgba(161,152,147,0.4)'; }
			if (nombre == 'CuadroAndes4D') { pcolor = 'rgba(255,0,0,0.2)'; }
			rta = rta + '<polyline shape-rendering="geometricPrecision" id="' + nombre + '" points="' + pruta + '" style="fill: ' + pcolor + ' ; stroke: ' + pcolor + '; stroke-width: 0.001; stroke-linecap: round; stroke-linejoin: round;"><title>' + nombre + '</title></polyline>'
			poligono=1;
		}
		if (listado[i].LookAt && poligono==0){
			//console.log(listado[i].name._text,listado[i].LookAt.longitude._text,listado[i].LookAt.latitude._text);
			var lat= -listado[i].LookAt.latitude._text;
			var lon= 1 * listado[i].LookAt.longitude._text;
            var pradio='0.003';
			var pstrokewidth='0.0001';
            var pfontsize='0.01';
            var px = (lon + 0.2);
			var py = (lat + 0.1);
			
			if (nombre == 'Necocl\u00ED') { px = (lon - 1.80); py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Cartagena')    { px = (lon - 2.2);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Barranquilla') { px = (lon - 2.80); py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Pereira')      { px = (lon - 1.8);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Cali')         { px = (lon - 1.0);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Popay\u00E1n') { px = (lon - 1.7);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Guayaquil')    { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Quito')        { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Bucaramanga')  { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Barquisimeto') { px = (lon + 0.1);  py = (lat + 0.4); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Valencia')     { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Bogot\u00E1')  { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Tunja')        { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'C\u00FAcuta')  { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Neiva')        { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
            if (nombre == 'M\u00E9rida')  { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Pasto')        { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Caracas')      { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Maracaibo')    { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Medellin4D')   { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
			if (nombre == 'Santa Marta')  { px = (lon + 0.1);  py = (lat + 0.1); pstrokewidth='0.001'; pfontsize='0.4'; pradio='0.1';}
            //Mede4D
			if (nombre == 'San Jer\u00F3nimo') { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'San F\u00E9lix')    { px = (lon - 0.073); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Bello')             { px = (lon - 0.041); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'San Crist\u00F3bal'){ px = (lon - 0.103); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Itag\u00FC\u00ED')  { px = (lon - 0.050); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'La Estrella')       { px = (lon - 0.090); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Caldas')            { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Amag\u00E1')        { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Barbosa')           { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Girardota')         { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Copacabana')        { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Medell\u00EDn')     { px = (lon + 0.004); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Guarne')            { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Envigado')          { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Santa Elena')       { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'El Pe\u00F1ol')     { px = (lon - 0.065); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Envigado')          { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Marinilla')         { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Rionegro')          { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Sabaneta')          { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Las Palmas')        { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Peaje')             { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'La F\u00E9')        { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'El C\u00E1rmen de Viboral') { px = (lon - 0.040); py = (lat + -.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'El Retiro')         { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'La Ceja')           { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Venecia')           { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'La Uni\u00F3n')     { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			if (nombre == 'Fredonia')          { px = (lon + 0.003); py = (lat + 0.003); pstrokewidth= '0.0002'; pfontsize='0.014';}
			rta = rta + '<circle shape-rendering="geometricPrecision" id="' + nombre + '" cx="' + lon + '" cy="' + lat + '"  r="' + pradio + '" style="fill: rgb(254,215,98); stroke: black; stroke-width: 0.001; stroke-linecap: round;stroke-linejoin: round;"><title>' + nombre + '</title></circle>';
            rta = rta + '<text shape-rendering="geometricPrecision" id="t' + nombre + '" x="' + px + '" y="' + py + '" style="fill: white; stroke: black; stroke-width: ' + pstrokewidth + '; font-family:monospace; font-size: ' + pfontsize + 'px;">' + nombre + '</text>';
		}
		if (listado[i].LineString){
			//console.log(listado[i].name._text,listado[i].LineString.coordinates._text);

			var coordenadas = listado[i].LineString.coordinates._text;
			var nodos = coordenadas.split(" ");
			var pruta = "";
			for (var j=0; j< (nodos.length-1); j++){
				texto=nodos[j].replace(/[\s*|\s*$\n\t]/g,'');
				var coord = texto.split(",");
				var lat= -coord[1];
				var lon=coord[0];
				//var alt = coord[2];
				pruta=pruta + lon +"," + lat + " ";
			}
            pcolor = "rgba(254,215,98,0.5)";
			if (nombre == 'RioAburra') { pcolor = "blue"; }
			if (nombre == 'RioLaMiel') { pcolor = "blue"; }
            rta = rta + '<polyline shape-rendering="geometricPrecision" id="' + nombre + '" points="' + pruta + '" style="fill: none; stroke: ' + pcolor + '; stroke-width: 0.001; stroke-linecap: round; stroke-linejoin: round;"><title>' + nombre + '</title></polyline>';
		}
	};
	rta=rta + "</svg>";
	rta=rta + "</body></html>";
	parchivo = './Todo4D.html';
	fs.writeFile(parchivo, rta, function (err) {
    if (err) throw console.log(err);
    console.log("archivo " + parchivo +" generado")
  });
});



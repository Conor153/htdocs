var data = [100,200,300];

window.onload = function() {	

	document.getElementById('chart').setAttribute('width',300);
	document.getElementById('chart').setAttribute('height',data.length*60);

	for(var i=0;i<data.length;i++)
	{
		var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
		rect.setAttribute('x',0);
		rect.setAttribute('y',i*60);
		rect.setAttribute('width',data[i]);
		rect.setAttribute('height',50);
		rect.setAttribute('fill','steelblue');

		text.setAttribute('x',20);
		text.setAttribute('y',i*60+10);
		text.setAttribute('font-size',30);
		text.setAttribute('fill','white');
		text.setAttribute('text', data[i])

		document.getElementById('chart').appendChild(rect);
		document.getElementById('chart').appendChild(text);
	}	
}
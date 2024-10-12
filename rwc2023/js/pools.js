var xmlhttp;

window.onload=function()
{
    nav();
    getAjaxData();
    
}
function getAjaxData()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showJSONData;
    xmlhttp.open("GET", "ajax/getPools.php", true);
    xmlhttp.send();
}
function showJSONData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var data = JSON.parse(xmlhttp.responseText);
        var output = '<table border=1>';         
        for (var i = 0; i < data.pools.length; i++) 
        {
            if(i%5==0){
                output += `<tr><th colspan="9"><img src="icons/pool${data.pools[i].pool}.png"></th></tr>`;
                output += `<th>Pos</th>`;
                output += `<th>Team</th>`;
                output += `<th>PD</th>`;
                output += `<th>W</th>`;
                output += `<th>D</th>`;
                output += `<th>L</th>`;
                output += `<th>PF</th>`;
                output += `<th>PA</th>`;
                output += `<th>Bonus</th>`;
                output += `<th>Pts</th>`;
                output += `</tr>`;

            }
            output += `<tr`;
            if(data.pools[i].position==1 ||  data.pools[i].position==2)
            {
                output += ' style="background:#D3D3D3;"';
            }
            output += `>`;
            output += `<td>${data.pools[i].position}</td>`;
            output += `<td><img src="icons/${data.pools[i].id}.png">${data.pools[i].team_name}</td>`;	 
            output += `<td>${data.pools[i].played}</td>`;
            output += `<td>${data.pools[i].w}</td>`;
            output += `<td>${data.pools[i].d}</td>`;
            output += `<td>${data.pools[i].l}</td>`;
            output += `<td>${data.pools[i].pf}</td>`;  
            output += `<td>${data.pools[i].pa}</td>`; 
            output += `<td>${data.pools[i].bonus}</td>`;
            output += `<td>${data.pools[i].pts}</td>`;
            output += `</tr>`;
            
        }

        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;    
    }
}
function poolsLogin(value) {
    setLogin(value);
}
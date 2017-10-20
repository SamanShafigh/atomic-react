var http = require("http");

function process(req, res) {
  var data = [
    {id: 1, title: 'Take two for Samsungs troubled Bixby', summary: '', date: '20/11/2017'},
    {id: 2, title: 'Mobile companies overcharging customers after contracts end', summary: '', date: '20/11/2017'},
    {id: 3, title: 'Richard Spencer speech at Florida campus sparks mass protest', summary: '', date: '20/11/2017'},
    {id: 4, title: 'Storm Brian: Strong winds set to hit British Isles', summary: '', date: '20/11/2017'},
    {id: 5, title: 'Newspaper headlines: No deal Brexit plans and rip-off mobiles', summary: '', date: '20/11/2017'},
    {id: 6, title: 'Sunwing flyer sues because he got sparkling wine not champagne', summary: '', date: '20/11/2017'},
    {id: 7, title: 'Brexit: Theresa May urges new dynamic in Brexit talks', summary: '', date: '20/11/2017'},
    {id: 8, title: 'Catalan crisis: EU leaders rule out involvement in crisis', summary: '', date: '20/11/2017'},
    {id: 9, title: 'Daphne Caruana Galizia: Malta journalist killed by remotely detonated bomb', summary: '', date: '20/11/2017'},
    {id: 10, title: 'White House chief of staff John Kelly defends Trump over widow remarks', summary: '', date: '20/11/2017'},
  ];

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ error: null, data: data }));
}

var server = http.createServer(process);
server.listen(8383);
console.log("Json Server is runnig on 8383");

var win = Ti.UI.currentWindow;
var data=[];
var winWidth=win.width;
function perpos(per){
var h=winWidth*per/100;
return h;
}

function testrow(name,mypy) {
data.push({title: name +""+mypy, py: mypy});
}

var db = Titanium.Database.install('py.db','quotes');
var dbrecords = db.execute('SELECT * FROM BOATS order by pyhcap');

//var row = Ti.UI.createTableViewRow();
//for (var c=1;c<3;c++)
while (dbrecords.isValidRow())
{
	var row = Titanium.UI.createTableViewRow();
	row.selectedBackgroundColor = '#fff';
	row.height = 50;
	row.className = 'datarow';
	row.clickName = 'row';
	var boatname= dbrecords.field('name');
	var pyvalue= dbrecords.field('pyhcap');
	var boat = Titanium.UI.createLabel({
		textAlign: 'left',
		font:{fontSize:20},
		text:dbrecords.fieldByName('name'),
		});

	row.add(boat);
	var py = Titanium.UI.createLabel({
		textSize: 30,
		textAlign: 'right',
		font:{fontSize:20},
		text: dbrecords.fieldByName('pyhcap'),
		});
	row.add(py);
	data.push(row);
	dbrecords.next();
}


//
// create table view
var tableViewOptions = {
		data:data,
		fontSize: '40',
		backgroundColor:'transparent',
		rowBackgroundColor:'white',
	};


var tableview = Titanium.UI.createTableView(tableViewOptions);


win.add(tableview);




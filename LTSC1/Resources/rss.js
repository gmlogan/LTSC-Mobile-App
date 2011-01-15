// create table view data object
var data = [];
 
var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","http://www.lochtummelsc.org/ltsc/index.php?option=com_rd_rss&id=2");
xhr.onload = function()
{
    try
    {
        var doc = this.responseXML.documentElement;
        var items = doc.getElementsByTagName("item");
        var x = 0;
        var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
        for (var c=0;c<items.length;c++)
        {
            var item = items.item(c);
            var title = item.getElementsByTagName("title").item(0).text;
            var date = item.getElementsByTagName("pubDate").item(0).text;
            var row = Ti.UI.createTableViewRow();
            var label = Ti.UI.createLabel({
                text:title+date,
                left:72,
                top:5,
                bottom:5,
                right:5             
            });
            row.add(label);
            data[x++] = row;
            row.url = item.getElementsByTagName("link").item(0).text;
        }
 
        var tableview = Titanium.UI.createTableView({data:data});
        Titanium.UI.currentWindow.add(tableview);
        tableview.addEventListener('click',function(e)
        {
            var w = Ti.UI.createWindow({title:doctitle});
            var wb = Ti.UI.createWebView({url:e.row.url});
            w.add(wb);
            var b = Titanium.UI.createButton({
                title:'Close',
                style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
            });
            w.setLeftNavButton(b);
            b.addEventListener('click',function()
            {
                w.close();
            });
            w.open({modal:true});
        });
    }
    catch(E)
    {
        alert(E);
    }
};
xhr.send();
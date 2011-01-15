//LTSC Mobile App Early version 0.1
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    url:'py.js',
    titleid:'PY'
    
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'PY Handicaps',
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    url:'rss.js',
    titleid:'News'
    
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'News',
    window:win2
});

var win3= Ti.UI.createWindow({
	url:'about.js',
	titleid:'About'
})
var tab3 = Ti.UI.createTab({
	title:'About',
	window:win3
})


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();

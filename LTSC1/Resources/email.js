var emailDialog = Titanium.UI.createEmailDialog();
emailDialog.subject = "Hello from Titanium";
emailDialog.toRecipients = ['graham.logan@hp.com'];
emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
emailDialog.open();
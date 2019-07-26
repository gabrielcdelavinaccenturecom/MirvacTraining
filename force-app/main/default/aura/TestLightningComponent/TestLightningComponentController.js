({
	doInit : function(component, event, helper) {
		component.set("v.myString", 'Hello World!');
	},
    changeMyString : function(component, event, helper) {
        component.set("v.myString", 'Bye World!');
        var tempString = 'Heeeeey';
        component.set("v.myString2", tempString);
    }
})
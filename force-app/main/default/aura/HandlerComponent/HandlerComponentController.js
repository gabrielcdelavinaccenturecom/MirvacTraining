({
	handleApplicationEvent : function(component, event, helper) {
		var message = event.getParam("message");
        component.set("v.messageFromEvent", message);
        var numEventsHandled = component.get("v.numEvents") + 1;
        component.set("v.numEvents", numEventsHandled);
	}
})
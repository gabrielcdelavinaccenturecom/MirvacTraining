({
	handleComponentEvent : function(component, event, helper) {
		//event.getParam to get the parameters in the child component
        var message = event.getParam("message");
        
        //always sa left side and susupplyan ng value, right side ang iseset na value
        component.set("v.messageFromEvent", message);
        //parseInt(component.get("v.numEvents")) + 1; is use to convert the data type if the data type of numEvents is not integer
        var numEventsHandled = component.get("v.numEvents") + 1;
        component.set("v.numEvents", numEventsHandled);
	}
})
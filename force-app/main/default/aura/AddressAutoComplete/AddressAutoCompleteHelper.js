({
	getSuggested : function(component, event) {
		 var action = component.get("c.autoPopAddress");
        action.setParams({"searchTerm": component.get("v.searchTerm")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var response = JSON.parse(response.getReturnValue());
                             component.set("v.data", response);
            }else{
               
            }
        });
        $A.enqueueAction(action);
    }
})
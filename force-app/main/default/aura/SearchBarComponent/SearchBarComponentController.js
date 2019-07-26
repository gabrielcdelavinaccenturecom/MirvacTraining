({
    searchKeyChange: function(component, event, helper) {
        console.log('event val -',event.target.value);
        //var searchTerm = component.find("searchTerm").get("v.value");
        var searchTerm = event.target.value;
        console.log('val = ', searchTerm);
        var action = component.get("c.findUnits");
        var appEvent = $A.get("e.c:SearchBar");
        action.setParams({
            "searchKey": searchTerm 
        });
        action.setCallback(this, function(results) {
            appEvent.setParams({
                "unit" : results.getReturnValue()
            });
            appEvent.fire();
        });
        $A.enqueueAction(action);
    }
})
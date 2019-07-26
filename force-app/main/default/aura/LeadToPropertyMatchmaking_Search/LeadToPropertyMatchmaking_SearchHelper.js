({
	pushSearchedUnits : function(component, unitList) {
        var eventHandler = component.getEvent("searchUnit");
        
        eventHandler.setParams({
            unitList : unitList
        })
        
        eventHandler.fire();
	}
})
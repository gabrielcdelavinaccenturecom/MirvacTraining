({
	getSuggestedUnits : function(component, event, helper) {
		var unit = component.get("c.getUnitRecords");
        unit.setParams({
            leadID : component.get("v.recordId")
        });
        unit.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS" && response.getReturnValue().length > 0) {
                var unitList = response.getReturnValue();
                component.set("v.units", unitList);
                console.log("unitList : ", JSON.parse(JSON.stringify(unitList)));
                component.set("v.displayedUnitList", JSON.parse(JSON.stringify(unitList)));
                
                if(response.getReturnValue().length > 0){
                    component.set("v.hasMatchingUnit","true");    
                }else{
                    component.set("v.hasMatchingUnit","false"); 
                }
            } else if (state === "ERROR") {
                console.log("No suggested properties");
            }    
        });
        $A.enqueueAction(unit);
	}
})
({
	updateLead : function(component, event, helper) {
		var recId = component.get("v.recordId");
        var unitId = component.get("v.unit").Id;
        var propty = component.get("c.updateLeadRecord");
        propty.setParams({
            leadID : recId,
            unitID : unitId
        });
        propty.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("Property successfully selected");
                $A.get('e.force:refreshView').fire();
            } else {
                console.log("Fail");
            }    
        });
        $A.enqueueAction(propty); 
	}
})
({
	searchUnits : function(component, event, helper) {
		var userInput = (event.target.value).toUpperCase();
        var unitList = component.get("v.unitList");
        var searchedUnitList = [];
        
        if(userInput != null && userInput != undefined && userInput != ""){
            for(var counter in unitList){
                var unit = unitList[counter];
                if(unit.PropertyType__c.toUpperCase().includes(userInput) || unit.Name.toUpperCase().includes(userInput)){
                    searchedUnitList.push(unit);
                }
            }
        } else {
            searchedUnitList = unitList;
        }
        
        helper.pushSearchedUnits(component, searchedUnitList);
	}
})
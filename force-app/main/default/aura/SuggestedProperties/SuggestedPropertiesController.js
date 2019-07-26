({
	refresh : function(component, event, helper) {
        console.log("before");
		$A.get('e.force:refreshView').fire();
        console.log("after");
	}
    
})
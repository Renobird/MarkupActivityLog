var diffModal = {

	init: function(editorType){
		
		// build wireTabs if applicable.
		this.buildTabs();
		
		var instanceID = $(".ProcessActivityLogService textarea").attr('id');
		this.setupTriggers(editorType, instanceID);

		// CKEditor 
		if (editorType == "CKEditor"){
			CKEDITOR.config.readOnly = true;
		}
		
	},

	buildTabs: function(){
		var tabs = $('#MarkupActivityLog-tabs');
		var items = $('#MarkupActivityLog-tabs .change_tab');
		if(tabs.size()) {
		    tabs.WireTabs({
		        items: $(items)
		    });
		}
	},

	setupTriggers: function(editorType, instanceID){
		$('.change-triggers li a').on( "click", function() {
	  		var elementID = $(this).attr('id');
	  		var data = $("div#" + elementID).html();
	  		if (data == '') data = "empty";
	  		$(this).addClass('on');
	  		$(this).parent().siblings().find('a').removeClass('on');
	  		
	  		if (editorType == "CKEditor"){
	  			// set data for editor instance. Cleaner than showing/hiding multiple instances
	  			CKEDITOR.instances[instanceID].setData(data);
	  		}
	  		
		});
	}
}

$(function(){

	$('.view-diff').magnificPopup({
  		type: 'ajax',
  		callbacks: {
  			parseAjax: function(mfpResponse) {
  				editorType = false;
  				console.log(mfpResponse.data);
    			if ($(mfpResponse.data).find('textarea.InputfieldCKEditor').length){
    				editorType = "CKEditor";
    			};
    			if ($(mfpResponse.data).find('textarea.InputfieldTinyMCE').length){
    				editorType = "tinyMCE";
    			};
  			},
			ajaxContentAdded: function() {
		  		diffModal.init(editorType);
			}
		}
	});
	
});
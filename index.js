$(document).ready(function() {
	// Register event listeners
	$("#education_link").click(function(event) {
		section_click("education", event);
	});
	$("#skills_link").click(function(event) {
		section_click("skills", event);
	});
	$("#employment_link").click(function(event) {
		section_click("employment", event);
	});
	$("#publications_link").click(function(event) {
		section_click("publications", event);
	});
	$("#professional_institutions_link").click(function(event) {
		section_click("professional_institutions", event);
	});
	$("#other_interests_link").click(function(event) {
		section_click("other_interests", event);
	});

	$("#uob_link").click(function(event) {
		detail_click("University of Birmingham", event);
	});

	$("#bgs_link").click(function(event) {
		detail_click("Bourne Grammar School", event);
	});

	$("#rabbitsoft_link").click(function(event) {
		detail_click("Rabbitsoft", event);
	});

	$("#google_link").click(function(event) {
		detail_click("Google", event);
	});

	$("#senokian_link").click(function(event) {
		detail_click("Senokian", event);
	});

	$("#twisted_lemon_link").click(function(event) {
		detail_click("Twisted Lemon", event);
	});

	$("#catmose_college_link").click(function(event) {
		detail_click("Catmose College", event);
	});

	$("#b_and_h_link").click(function(event) {
		detail_click("B & H Sound", event);
	});

	$("#music_link").click(function(event) {
		detail_click_child("Music", event);
	});

	$("#theatre_link").click(function(event) {
		detail_click_child("Theatre", event);
	});

	$("#travel_link").click(function(event) {
		detail_click_child("Travel", event);
	});

	$("#webian_link").click(function(event) {
		detail_click_child("Webian", event);
	});

});

function section_click(section, event) {
	event.preventDefault();
	// Show content if hidden
	if($('#' + section + ' .section_content').is(':hidden')) {
		$('#' + section + ' .section_content').slideDown();
	}
	// Hide content if already shown
	else  {
		$('#' + section + ' .section_content').slideUp();
	}
}

function detail_click(detail, event) {
	event.preventDefault();
	// Set what will be the title of the dialog
	var element = '<div title="' + detail + '">';
	// Fetch the content of the link which was clicked and display it as a dialog
	$(element).dialog({modal: true, width: 800}).load(event.target.href);
}

function detail_click_child(detail, event) {
	event.preventDefault();
	// Set what will be the title of the dialog
	var element = '<div title="' + detail + '">';
	// Fetch the content of the link which was clicked and display it as a dialog
	$(element).dialog({modal: true, width: 800}).load($(event.target).parent().attr("href"));
}

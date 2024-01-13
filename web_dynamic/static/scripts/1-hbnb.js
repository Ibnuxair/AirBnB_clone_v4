// Wait for the DOM to be fully loaded
$(document).ready(() => {
    // Variable to store Amenity IDs
    let amenityIds = [];

    // Function to update the h4 tag with the list of Amenities checked
    const updateAmenities = () => {
	// Get the h4 tag inside the div with the id "Amenities"
	const amenitiesH4 = $("#Amenities h4");

	// Update the text content with the list of Amenities checked
	amenitiesH4.text("Amenities: " + amenityIds.join(", "));
    };

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
	// Get the data-id and data-name attributes from the checkbox
	const amenityId = $(this).data("id");
	const amenityName = $(this).data("name");

	// Check if the checkbox is checked
	if ($(this).prop("checked")) {
	    // Add Amenity ID to the variable
	    amenityIds.push(amenityId);
	} else {
	    // Remove Amenity ID from the variable
	    amenityIds = amenityIds.filter((id) => id !== amenityId);
	}

	// Update the h4 tag with the list of Amenities checked
	updateAmenities();
    });
});

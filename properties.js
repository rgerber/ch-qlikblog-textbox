define( [], function () {
	'use strict';
	// *****************************************************************************
	// Dimensions & Measures
	// *****************************************************************************
	var measures = {
		uses: "measures",
		min: 0,
		max: 1
	};

	// *****************************************************************************
	// Appearance section
	// *****************************************************************************

	// Hintergrund Bild
	var hintergrundBild = {
		label: "Bild",
		type: "string",
		component: "media",
		layoutRef: "props.backgroundImage",
		ref: "props.backgroundImage"
	};

	var hintergrundColor = {
		label: "Farbe (rgb / hex)",
		type: "string",
		ref: 'props.backgroundColor',
		expression: "optional"
	};

	var textHorizontalAlign = {
		label: "Horizontale Ausrichtung",
		ref: "props.horizontalAlign",
		type: "string",
		component: "dropdown",
		options: [{ value: "left", label: "Links" }, 
			{ value: "center", label: "Mitte" }, 
			{ value: "right", label: "Rechts" }
		],
		defaultValue: "center"

	}

	var textVerticalAlign = {
		label: "Vertikale Ausrichtung",
		ref: "props.verticalAlign",
		type: "string",
		component: "dropdown",
		options: [{ value: "top", label: "Oben" }, 
			{ value: "middle", label: "Mitte" }, 
			{ value: "bottom", label: "Unten" }
		],
		defaultValue: "top"
	}

	var textSize = {
		label: "Text Grösse (in em)",
		ref: "props.textSize",
		type: "string",
		component: "dropdown",
		options: [{ value: "0.5em", label: "0.5" }, 
			{ value: "0.75em", label: "0.75" }, 
			{ value: "1em", label: "1" },
			{ value: "1.25em", label: "1.25" },
			{ value: "1.5em", label: "1.5" },
			{ value: "1.75em", label: "1.75" },
			{ value: "2em", label: "2" },
			{ value: "2.25em", label: "2.25" },
			{ value: "2.5em", label: "2.5" },
			{ value: "2.75em", label: "2.75" },
			{ value: "3em", label: "3" },
			{ value: "3.25em", label: "3.25" },
			{ value: "3.5em", label: "3.5" },
			{ value: "3.75em", label: "3.75" },
			{ value: "4em", label: "4" },
			{ value: "4.25em", label: "4.25" },
			{ value: "4.5em", label: "4.5" },
			{ value: "4.75em", label: "4.75" },
			{ value: "5em", label: "5" },
			{ value: "6em", label: "6" },
			{ value: "7em", label: "7" },
			{ value: "8em", label: "8" },
			{ value: "9em", label: "9" },
			{ value: "10em", label: "10" },
			{ value: "12em", label: "12" }
		],
		defaultValue: "1em"
	}

	var textColor = {
		label: "Farbe (rgb / hex)",
		type: "string",
		ref: 'props.textColor',
		expression: "optional"
	};

	/*
	var textWeight = {
		type: "string",
		component: "buttongroup",
		label: "Schriftgewicht",
		ref: 'props.textWeight',
		options: [{
			value: "normal",
			label: "Normal",
			tooltip: "Normal"
			}, {
			value: "bold",
			label: "Fett",
			tooltip: "Fett"
			}],
		defaultValue : "normal"
	}
	*/

	var textWeight = {
		type: "boolean",
		component: "switch",
		label: "Schriftgewicht",
		ref: "props.textWeight",
		options: [{
			value: true,
			label: "Fett"
		}, {
			value: false,
			label: "Normal"
		}],
		defaultValue: false
	}

	var textItalic = {
		type: "boolean",
		component: "switch",
		label: "Kursiv",
		ref: "props.textItalic",
		options: [{
			value: true,
			label: "Kursiv"
		}, {
			value: false,
			label: "Normal"
		}],
		defaultValue: false
	}
	

	var textOrientation = {
		label: "Ausrichtung",
		type: "string",
		ref: 'props.textOrientation',
		component: "dropdown",
		options: [{ value: "sideways", label: "Senkrecht (t-b)" }, 
			{ value: "upright", label: "Senkrecht (stehend)" },
			{ value: "initial", label: "Vertikal" }
		],
		defaultValue: "initial"
	};

	var textOrientationLR = {
		label: "Ausrichtung Vertikal",
		ref: "props.textOrientationLR",
		type: "string",
		component: "dropdown",
		options: [{ value: "vertical-lr", label: "Links" }, 
			{ value: "vertical-rl", label: "Rechts" }
		],
		defaultValue: "vertical-lr",
		show : function(data) {
			return data.props.textOrientation == 'upright' || data.props.textOrientation == 'sideways'; 
     	} 
	};



	var appearanceSection = {
		uses: "settings",
		items: {
			// Definition of the custom section header
	        background: {
	            type: "items",
	            label: "Hintergrund Textbox",
	            items: {
	                // hintergrundBild: hintergrundBild,
	            	hintergrundColor: hintergrundColor
	            }
	        },
	        text: {
	        	type: "items",
	        	label: "Formatierung Kennzahl",
	        	items: {
	        		//verticalAlign: textVerticalAlign,
	        		horizontalAlign: textHorizontalAlign,
	        		textSize: textSize,
	        		textColor: textColor,
	        		textWeight: textWeight,
	        		textItalic: textItalic,
	        		textOrientation: textOrientation,
	        		textOrientationLR
	        	}
	        }
		}
	};

	// *****************************************************************************
	// Main properties panel definition
	// Only what is defined here is returned from properties.js
	// *****************************************************************************
	return {
		type: "items",
		component: "accordion",
		items: {
			measures: measures,
			appearance: appearanceSection
		}
	};
});
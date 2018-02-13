// Define what our properties panel look like
define( [
        // Load properties.js using requireJS
        // Note: if you load .js files, omit the file extension
        // otherwise requireJS will not load it correctly 
        'jquery', 
        './properties',
        'text!./css/ch-QlikBlog-TextBox.css'
    ],
    function ( $,  props, cssContent ) {
        'use strict';
        // Let's inject the CSS declarations into the header of the current document
        $( '<style>' ).html(cssContent).appendTo( 'head' );

        return {
            definition: props,

            //Paint resp.Rendering logic
            paint: function ( $element, layout ) {

                console.log( 'Element erstellen' );
                
                //console.log(layout);

                // alles löschen
                $element.empty();

                // Div erstellen
                var $msg = $( document.createElement( 'div' ) );
                
                $msg.addClass('qv-object-ch-qlikblog-textbox');

                //variable holding the output
                // var html = '<div class="qv-object-ch-qlikblog-text">' + layout.qHyperCube.qGrandTotalRow[0].qText + '</div>';

                var html = '<div class="qv-object-ch-qlikblog-text"><p>' + layout.qHyperCube.qGrandTotalRow[0].qText + '</p></div>'

                $msg.css("background-color", layout.props.backgroundColor);
                $msg.css("text-align", layout.props.horizontalAlign);
                $msg.css("font-size", layout.props.textSize);
                $msg.css("color", layout.props.textColor);

                /* Textorientation bei Vertikal das andere Property löschen */
                $msg.css("text-orientation", layout.props.textOrientation);
                if(layout.props.textOrientation == 'initial'   ) {
                    $msg.css("writing-mode","");
                } else {
                    $msg.css("writing-mode", layout.props.textOrientationLR);
                }

                // Fett
                if(layout.props.textWeight) {
                    $msg.css("font-weight", "bolder");    
                } else {
                    $msg.css("font-weight", "");
                }

                // Kursiv
                if(layout.props.textItalic) {
                    $msg.css("font-style", "italic");    
                } else {
                    $msg.css("font-style", "");
                }
                
                //assign the variable to the output container
                $msg.html( html );
                
                //add the output container to the current element
                $element.append( $msg );
            }
        };
    } 
);


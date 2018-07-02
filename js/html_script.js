/* REQUIREMENTS:
- make definitions dragable
- if defintion matches the element allow it to land
- show message of correct
- increment score by 1
- else
- else send the element back to it's original position
- increase attempts by 1
- when all are placed end the quiz
- reflect the final score
*/

let dragClass = "";
let dropClass = "";
let text = "";
let score = 0;

$( function() {

    /* -------------- draggables ----------------------*/
    $( "#draggable1" ).draggable({
        cursor: 'move',
        stop: handleDragStop
    });

  $( "#droppable1" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        //.html( "Incorrect. Try again." );
        dropClass = event.target.className.slice(0, 3);
    }
  });

   $( "#draggable2" ).draggable({
     cursor: 'move',
     stop: handleDragStop
   });

 $( "#droppable2" ).droppable({
     drop: function( event, ui ) {
         $( this )
         .addClass( "ui-state-highlight" )
         .find( "p" )
         dropClass = event.target.className.slice(0, 3);
 }
});

  $( "#droppable3" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        //.html( "Incorrect. Try again." );
        dropClass = event.target.className.slice(0, 3);
    }
  });

   $( "#draggable3" ).draggable({
     cursor: 'move',
     stop: handleDragStop
   });

     $( "#droppable4" ).droppable({
       drop: function( event, ui ) {
         $( this )
           .addClass( "ui-state-highlight" )
           .find( "p" )
           //.html( "Incorrect. Try again." );
           dropClass = event.target.className.slice(0, 3);
       }
     });

      $( "#draggable4" ).draggable({
        cursor: 'move',
        stop: handleDragStop
      });

        $( "#droppable5" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
              //.html( "Incorrect. Try again." );
              dropClass = event.target.className.slice(0, 3);
          }
        });

         $( "#draggable5" ).draggable({
           cursor: 'move',
           stop: handleDragStop
         });

           $( "#droppable6" ).droppable({
             drop: function( event, ui ) {
               $( this )
                 .addClass( "ui-state-highlight" )
                 .find( "p" )
                 //.html( "Incorrect. Try again." );
                 dropClass = event.target.className.slice(0, 3);
             }
           });

            $( "#draggable6" ).draggable({
              cursor: 'move',
              stop: handleDragStop
            });

              $( "#droppable7" ).droppable({
                drop: function( event, ui ) {
                  $( this )
                    .addClass( "ui-state-highlight" )
                    .find( "p" )
                    //.html( "Incorrect. Try again." );
                    dropClass = event.target.className.slice(0, 3);
                }
              });

               $( "#draggable7" ).draggable({
                 cursor: 'move',
                 stop: handleDragStop
               });

                 $( "#droppable8" ).droppable({
                   drop: function( event, ui ) {
                     $( this )
                       .addClass( "ui-state-highlight" )
                       .find( "p" )
                       //.html( "Incorrect. Try again." );
                       dropClass = event.target.className.slice(0, 3);
                   }
                 });

                  $( "#draggable8" ).draggable({
                    cursor: 'move',
                    stop: handleDragStop
                  });



    function handleDragStop( event, ui ) {
        $(".status").html("");
        text = event.target.innerHTML;
        dragClass = event.target.className.slice(0, 3);
        testCorrect()
      }

    function testCorrect() {
        if (dragClass === dropClass) {
            score++
            $(".score").html(score);
            $(".status").html("Correct");
            $("."+dragClass+1).hide();
            $("."+dragClass+2).css({"background":"white","font-weight":"normal", "color": "black", "padding": "0.3em", "border": "none"}).html(text);
            text = "";
            if (score === 8) {
                $('.score-title').append(`
                    <div style="margin-top: 2em;">
                        <p>Congratulation!</p>
                        <p>You finished!</p>
                        <a href="index.html"><i class="fas fa-angle-double-left"></i> Return to start</a>
                    </div>
                `)
            }


        }
    }

} );

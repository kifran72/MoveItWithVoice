if (annyang) {
    let num = 5;
    move = (direction, side) => {
            var d = document.getElementById('skitt-ui');
            side ? num = num - 5 : num = num + 5;
            $('#skitt-ui').css(direction, num + "rem");
        }
        // Add our commands to annyang
    annyang.addCommands({
        'left': function() { move("left", 1); },
        'right': function() { move("left"); },
        'down': function() { move("top"); },
        'top': function() { move("top", 1); },
        'center': () => { location.reload(); }

    });

    // Tell KITT to use annyang
    SpeechKITT.annyang();
    SpeechKITT.displayRecognizedSentence();

    // Define a stylesheet for KITT to use
    SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');

    // Render KITT's interface
    SpeechKITT.vroom();
}
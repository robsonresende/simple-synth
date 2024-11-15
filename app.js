// Octave

// Wave

// Detune 

function play(x, wav) {
    
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    const master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(ctx.destination);

    const osc = ctx.createOscillator();
    osc.frequency.value = wav;

    osc.type = "triangle";

    osc.connect(master);

    // Access the button
    const mybutton = document.getElementById(x);


    // pointerdown to on the button
    mybutton.addEventListener('pointerdown', () => {
      osc.start();
    });

    // pointerup to off the button
    mybutton.addEventListener('pointerup', () => {
      osc.stop();
      mybutton.blur();
      return 0;
    });

    // pointerleave in case the user leave the button
    mybutton.addEventListener('pointerleave', () => {
      osc.stop();
      mybutton.blur();
      return 0;
    });

}


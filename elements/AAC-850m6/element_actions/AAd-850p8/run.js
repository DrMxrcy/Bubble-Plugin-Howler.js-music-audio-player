function(instance, properties, context) {
    if (instance.data.sound) {
        let currentVolume = instance.data.sound.volume();
        let newVolume = Math.max(currentVolume - 0.01, 0.0); 
        instance.data.sound.volume(newVolume);
        console.log("Volume decreased to: " + newVolume);
    }
}
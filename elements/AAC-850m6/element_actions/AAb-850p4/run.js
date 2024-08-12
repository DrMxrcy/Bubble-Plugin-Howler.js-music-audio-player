function(instance, properties, context) {
    if (instance.data.sound) {
        let currentVolume = instance.data.sound.volume();
        let newVolume = Math.min(currentVolume + 0.1, 1.0);
        instance.data.sound.volume(newVolume);
        console.log("Volume increased to: " + newVolume);
    }
}
function(instance, properties, context) {
    if (instance.data.sound) {
        instance.data.sound.stop();
        instance.data.sound.unload();
        console.log("Howler stopped and unloaded");
    }
}
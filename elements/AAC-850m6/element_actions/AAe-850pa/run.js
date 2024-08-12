function(instance, properties, context) {
    if (instance.data.sound) {
        let sliderValue = properties.slider_value;
        instance.data.sound.volume(sliderValue);
        console.log("Volume set by slider to: " + sliderValue);
    }
}
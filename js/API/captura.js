 
//captura
function tomarFoto(){
  navigator.device.capture.captureImage(function(mediaFiles) {
        path = mediaFiles[0].fullPath;
	$('#regFoto').append('<img src="'+path+'" width="100%" />').attr('rel', path);
    }, function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
}, {limit:2});
}
//<input type="file" name="archivo1" />

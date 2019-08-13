
function importImagesToNewLayerBaru(namePhotoFile){
//function importImagesToNewLayerBaru() {
// =======================================================
var idPlc = charIDToTypeID( "Plc " );
    var desc25 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc25.putPath( idnull, new File( "C:\\Users\\yuri\\Desktop\\copyFileImageFromMagentoFolder\\photo_temp13\\" + namePhotoFile));
	//desc25.putPath( idnull, new File( "C:\\Users\\yuri\\Desktop\\copyFileImageFromMagentoFolder\\photo_temp7\\Logo trusco.jpg"));
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc25.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
        var desc26 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc26.putUnitDouble( idHrzn, idPxl, 0.000000 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc26.putUnitDouble( idVrtc, idPxl, 0.000000 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc25.putObject( idOfst, idOfst, desc26 );
executeAction( idPlc, desc25, DialogModes.NO );
}
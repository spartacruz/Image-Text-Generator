
function delete2Layer() {
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc230 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref72 = new ActionReference();
        var idmoveTool = stringIDToTypeID( "moveTool" );
        ref72.putClass( idmoveTool );
    desc230.putReference( idnull, ref72 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc230.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc230.putBoolean( idforceNotify, true );
executeAction( idslct, desc230, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
    var desc231 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref73 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref73.putEnumerated( idLyr, idOrdn, idTrgt );
    desc231.putReference( idnull, ref73 );
executeAction( idDlt, desc231, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
    var desc232 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref74 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref74.putEnumerated( idLyr, idOrdn, idTrgt );
    desc232.putReference( idnull, ref74 );
executeAction( idDlt, desc232, DialogModes.NO );
}
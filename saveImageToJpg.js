
function saveImageToJpg(nameFile) {
// =======================================================

var nameFileLocal = nameFile

var idsave = charIDToTypeID( "save" );
    var desc88 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc89 = new ActionDescriptor();
        var idEQlt = charIDToTypeID( "EQlt" );
        desc89.putInteger( idEQlt, nameFileLocal.length ); //tadinya 12
        var idOptm = charIDToTypeID( "Optm" );
        desc89.putBoolean( idOptm, true );
        var idMttC = charIDToTypeID( "MttC" );
        var idMttC = charIDToTypeID( "MttC" );
        var idNone = charIDToTypeID( "None" );
        desc89.putEnumerated( idMttC, idMttC, idNone );
    var idJPEG = charIDToTypeID( "JPEG" );
    desc88.putObject( idAs, idJPEG, desc89 );
    var idIn = charIDToTypeID( "In  " );
    desc88.putPath( idIn, new File( "C:\\Users\\yuri\\Desktop\\brandModelNumber\\" + nameFileLocal ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc88.putInteger( idDocI, 1184 );
    var idCpy = charIDToTypeID( "Cpy " );
    desc88.putBoolean( idCpy, true );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveBegin = stringIDToTypeID( "saveBegin" );
    desc88.putEnumerated( idsaveStage, idsaveStageType, idsaveBegin );
executeAction( idsave, desc88, DialogModes.NO );

// =======================================================
var idsave = charIDToTypeID( "save" );
    var desc90 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc91 = new ActionDescriptor();
        var idEQlt = charIDToTypeID( "EQlt" );
        desc91.putInteger( idEQlt, nameFileLocal.length ); //tadinya 12
        var idOptm = charIDToTypeID( "Optm" );
        desc91.putBoolean( idOptm, true );
        var idMttC = charIDToTypeID( "MttC" );
        var idMttC = charIDToTypeID( "MttC" );
        var idNone = charIDToTypeID( "None" );
        desc91.putEnumerated( idMttC, idMttC, idNone );
    var idJPEG = charIDToTypeID( "JPEG" );
    desc90.putObject( idAs, idJPEG, desc91 );
    var idIn = charIDToTypeID( "In  " );
    desc90.putPath( idIn, new File( "C:\\Users\\yuri\\Desktop\\brandModelNumber\\" + nameFileLocal ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc90.putInteger( idDocI, 1184 );
    var idCpy = charIDToTypeID( "Cpy " );
    desc90.putBoolean( idCpy, true );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc90.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
executeAction( idsave, desc90, DialogModes.NO );

// =======================================================
}
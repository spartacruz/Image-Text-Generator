function createTextLayer(textToWrite, lenModelNumber) {
// =======================================================

var textToWriteLocal = textToWrite;
var lenModelNumberLocal = 0;
lenModelNumberLocal = lenModelNumber;
var ukuranFont = 0;

//if (lenModelNumberLocal <= 22) {
//	ukuranFont = 24.000000;
//} else {
//	if (lenModelNumberLocal <= 26) {
//		ukuranFont = 19.000000;
//	} else {
//		if (lenModelNumberLocal <= 32) {
//		ukuranFont = 14.000000;
//		} else {
//			ukuranFont = 12.000000;
//		}
//	}	
//} 

if (lenModelNumberLocal <= 22) {
	ukuranFont = 20.000000;
} else {
	if (lenModelNumberLocal <= 26) {
		ukuranFont = 17.000000;
	} else {
		if (lenModelNumberLocal <= 32) {
		ukuranFont = 14.000000;
		} else {
			ukuranFont = 12.000000;
		}
	}	
} 

var idMk = charIDToTypeID( "Mk  " );
    var desc198 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref60 = new ActionReference();
        var idTxLr = charIDToTypeID( "TxLr" );
        ref60.putClass( idTxLr );
    desc198.putReference( idnull, ref60 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc199 = new ActionDescriptor();
        var idTxt = charIDToTypeID( "Txt " );
        desc199.putString( idTxt, textToWriteLocal ); //replace this word
        var idwarp = stringIDToTypeID( "warp" );
            var desc200 = new ActionDescriptor();
            var idwarpStyle = stringIDToTypeID( "warpStyle" );
            var idwarpStyle = stringIDToTypeID( "warpStyle" );
            var idwarpNone = stringIDToTypeID( "warpNone" );
            desc200.putEnumerated( idwarpStyle, idwarpStyle, idwarpNone );
            var idwarpValue = stringIDToTypeID( "warpValue" );
            desc200.putDouble( idwarpValue, 0.000000 );
            var idwarpPerspective = stringIDToTypeID( "warpPerspective" );
            desc200.putDouble( idwarpPerspective, 0.000000 );
            var idwarpPerspectiveOther = stringIDToTypeID( "warpPerspectiveOther" );
            desc200.putDouble( idwarpPerspectiveOther, 0.000000 );
            var idwarpRotate = stringIDToTypeID( "warpRotate" );
            var idOrnt = charIDToTypeID( "Ornt" );
            var idHrzn = charIDToTypeID( "Hrzn" );
            desc200.putEnumerated( idwarpRotate, idOrnt, idHrzn );
        var idwarp = stringIDToTypeID( "warp" );
        desc199.putObject( idwarp, idwarp, desc200 );
        var idTxtC = charIDToTypeID( "TxtC" );
            var desc201 = new ActionDescriptor();
            var idHrzn = charIDToTypeID( "Hrzn" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc201.putUnitDouble( idHrzn, idPrc, 0.000000 );
            var idVrtc = charIDToTypeID( "Vrtc" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc201.putUnitDouble( idVrtc, idPrc, 88.155922 );
        var idPnt = charIDToTypeID( "Pnt " );
        desc199.putObject( idTxtC, idPnt, desc201 );
        var idtextGridding = stringIDToTypeID( "textGridding" );
        var idtextGridding = stringIDToTypeID( "textGridding" );
        var idNone = charIDToTypeID( "None" );
        desc199.putEnumerated( idtextGridding, idtextGridding, idNone );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc199.putEnumerated( idOrnt, idOrnt, idHrzn );
        var idAntA = charIDToTypeID( "AntA" );
        var idAnnt = charIDToTypeID( "Annt" );
        var idAnSt = charIDToTypeID( "AnSt" );
        desc199.putEnumerated( idAntA, idAnnt, idAnSt );
        var idtextShape = stringIDToTypeID( "textShape" );
            var list32 = new ActionList();
                var desc202 = new ActionDescriptor();
                var idTEXT = charIDToTypeID( "TEXT" );
                var idTEXT = charIDToTypeID( "TEXT" );
                var idbox = stringIDToTypeID( "box" );
                desc202.putEnumerated( idTEXT, idTEXT, idbox );
                var idOrnt = charIDToTypeID( "Ornt" );
                var idOrnt = charIDToTypeID( "Ornt" );
                var idHrzn = charIDToTypeID( "Hrzn" );
                desc202.putEnumerated( idOrnt, idOrnt, idHrzn );
                var idTrnf = charIDToTypeID( "Trnf" );
                    var desc203 = new ActionDescriptor();
                    var idxx = stringIDToTypeID( "xx" );
                    desc203.putDouble( idxx, 1.000000 );
                    var idxy = stringIDToTypeID( "xy" );
                    desc203.putDouble( idxy, 0.000000 );
                    var idyx = stringIDToTypeID( "yx" );
                    desc203.putDouble( idyx, 0.000000 );
                    var idyy = stringIDToTypeID( "yy" );
                    desc203.putDouble( idyy, 1.000000 );
                    var idtx = stringIDToTypeID( "tx" );
                    desc203.putDouble( idtx, 0.000000 );
                    var idty = stringIDToTypeID( "ty" );
                    desc203.putDouble( idty, 0.000000 );
                var idTrnf = charIDToTypeID( "Trnf" );
                desc202.putObject( idTrnf, idTrnf, desc203 );
                var idrowCount = stringIDToTypeID( "rowCount" );
                desc202.putInteger( idrowCount, 1 );
                var idcolumnCount = stringIDToTypeID( "columnCount" );
                desc202.putInteger( idcolumnCount, 1 );
                var idrowMajorOrder = stringIDToTypeID( "rowMajorOrder" );
                desc202.putBoolean( idrowMajorOrder, true );
                var idrowGutter = stringIDToTypeID( "rowGutter" );
                var idPnt = charIDToTypeID( "#Pnt" );
                desc202.putUnitDouble( idrowGutter, idPnt, 0.000000 );
                var idcolumnGutter = stringIDToTypeID( "columnGutter" );
                var idPnt = charIDToTypeID( "#Pnt" );
                desc202.putUnitDouble( idcolumnGutter, idPnt, 0.000000 );
                var idSpcn = charIDToTypeID( "Spcn" );
                var idPnt = charIDToTypeID( "#Pnt" );
                desc202.putUnitDouble( idSpcn, idPnt, 0.000000 );
                var idframeBaselineAlignment = stringIDToTypeID( "frameBaselineAlignment" );
                var idframeBaselineAlignment = stringIDToTypeID( "frameBaselineAlignment" );
                var idalignByAscent = stringIDToTypeID( "alignByAscent" );
                desc202.putEnumerated( idframeBaselineAlignment, idframeBaselineAlignment, idalignByAscent );
                var idfirstBaselineMinimum = stringIDToTypeID( "firstBaselineMinimum" );
                var idPnt = charIDToTypeID( "#Pnt" );
                desc202.putUnitDouble( idfirstBaselineMinimum, idPnt, 0.000000 );
                var idbounds = stringIDToTypeID( "bounds" );
                    var desc204 = new ActionDescriptor();
                    var idTop = charIDToTypeID( "Top " );
                    desc204.putDouble( idTop, 0.000000 );
                    var idLeft = charIDToTypeID( "Left" );
                    desc204.putDouble( idLeft, 0.000000 );
                    var idBtom = charIDToTypeID( "Btom" );
                    desc204.putDouble( idBtom, 28.425787 );
                    var idRght = charIDToTypeID( "Rght" );
                    desc204.putDouble( idRght, 240.000000 );
                var idRctn = charIDToTypeID( "Rctn" );
                desc202.putObject( idbounds, idRctn, desc204 );
            var idtextShape = stringIDToTypeID( "textShape" );
            list32.putObject( idtextShape, desc202 );
        desc199.putList( idtextShape, list32 );
        var idTxtt = charIDToTypeID( "Txtt" );
            var list33 = new ActionList();
                var desc205 = new ActionDescriptor();
                var idFrom = charIDToTypeID( "From" );
                desc205.putInteger( idFrom, 0 );
                var idT = charIDToTypeID( "T   " );
                desc205.putInteger( idT, textToWriteLocal.length ); //length text
                var idTxtS = charIDToTypeID( "TxtS" );
                    var desc206 = new ActionDescriptor();
                    var idstyleSheetHasParent = stringIDToTypeID( "styleSheetHasParent" );
                    desc206.putBoolean( idstyleSheetHasParent, true );
                    var idfontPostScriptName = stringIDToTypeID( "fontPostScriptName" );
                    desc206.putString( idfontPostScriptName, """Calibri""" );
                    var idFntN = charIDToTypeID( "FntN" );
                    desc206.putString( idFntN, """Calibri""" );
                    var idFntS = charIDToTypeID( "FntS" );
                    desc206.putString( idFntS, """Regular""" );
                    var idScrp = charIDToTypeID( "Scrp" );
                    desc206.putInteger( idScrp, 0 );
                    var idFntT = charIDToTypeID( "FntT" );
                    desc206.putInteger( idFntT, 1 );
                    var idSz = charIDToTypeID( "Sz  " );
                    var idPnt = charIDToTypeID( "#Pnt" );
                    desc206.putUnitDouble( idSz, idPnt, ukuranFont ); //Ubah font size disini
                    var iddigitSet = stringIDToTypeID( "digitSet" );
                    var iddigitSet = stringIDToTypeID( "digitSet" );
                    var iddefaultDigits = stringIDToTypeID( "defaultDigits" );
                    desc206.putEnumerated( iddigitSet, iddigitSet, iddefaultDigits );
                    var idmarkYDistFromBaseline = stringIDToTypeID( "markYDistFromBaseline" );
                    var idPnt = charIDToTypeID( "#Pnt" );
                    desc206.putUnitDouble( idmarkYDistFromBaseline, idPnt, 5.760000 );
                    var idtextLanguage = stringIDToTypeID( "textLanguage" );
                    var idtextLanguage = stringIDToTypeID( "textLanguage" );
                    var idenglishLanguage = stringIDToTypeID( "englishLanguage" );
                    desc206.putEnumerated( idtextLanguage, idtextLanguage, idenglishLanguage );
                var idTxtS = charIDToTypeID( "TxtS" );
                desc205.putObject( idTxtS, idTxtS, desc206 );
            var idTxtt = charIDToTypeID( "Txtt" );
            list33.putObject( idTxtt, desc205 );
        desc199.putList( idTxtt, list33 );
        var idparagraphStyleRange = stringIDToTypeID( "paragraphStyleRange" );
            var list34 = new ActionList();
                var desc207 = new ActionDescriptor();
                var idFrom = charIDToTypeID( "From" );
                desc207.putInteger( idFrom, 0 );
                var idT = charIDToTypeID( "T   " );
                desc207.putInteger( idT, textToWriteLocal.length ); //length text
                var idparagraphStyle = stringIDToTypeID( "paragraphStyle" );
                    var desc208 = new ActionDescriptor();
                    var idstyleSheetHasParent = stringIDToTypeID( "styleSheetHasParent" );
                    desc208.putBoolean( idstyleSheetHasParent, true );
                    var idAlgn = charIDToTypeID( "Algn" );
                    var idAlg = charIDToTypeID( "Alg " );
                    var idCntr = charIDToTypeID( "Cntr" );
                    desc208.putEnumerated( idAlgn, idAlg, idCntr );
                    var idburasagari = stringIDToTypeID( "burasagari" );
                    var idburasagari = stringIDToTypeID( "burasagari" );
                    var idburasagariStandard = stringIDToTypeID( "burasagariStandard" );
                    desc208.putEnumerated( idburasagari, idburasagari, idburasagariStandard );
                    var idtextEveryLineComposer = stringIDToTypeID( "textEveryLineComposer" );
                    desc208.putBoolean( idtextEveryLineComposer, true );
                var idparagraphStyle = stringIDToTypeID( "paragraphStyle" );
                desc207.putObject( idparagraphStyle, idparagraphStyle, desc208 );
            var idparagraphStyleRange = stringIDToTypeID( "paragraphStyleRange" );
            list34.putObject( idparagraphStyleRange, desc207 );
        desc199.putList( idparagraphStyleRange, list34 );
        var idkerningRange = stringIDToTypeID( "kerningRange" );
            var list35 = new ActionList();
        desc199.putList( idkerningRange, list35 );
    var idTxLr = charIDToTypeID( "TxLr" );
    desc198.putObject( idUsng, idTxLr, desc199 );
executeAction( idMk, desc198, DialogModes.NO );

// =======================================================
}
// Includes an external .js file

// @include 'importImagesToNewLayerBaru.js'
// @include 'createTextLayer.js'
// @include 'saveImageToJpg.js'
// @include 'delete2Layer.js'

var textFile = new File(Folder.desktop+ '/model-number2.txt');
var listModelNumber = readText(textFile).split('\n');

var textFile = new File(Folder.desktop+ '/logoFile2.txt');
var listLogoFile = readText(textFile).split('\n');

var textFile = new File(Folder.desktop+ '/fileSave1.txt');
var listSaveFile = readText(textFile).split('\n');

if (listModelNumber.length == listLogoFile.length || listModelNumber.length == listSaveFile.length) {
	for (i in listModelNumber) {
	
	importImagesToNewLayerBaru(listLogoFile[i]);
	var panjangCharModelNumber = listModelNumber[i].length;
	createTextLayer(listModelNumber[i], panjangCharModelNumber);
	//var extensi = ".jpg";
	//var jumlahKarakter = listLogoFile[i].length;
	//var namaLama = listLogoFile[i];
	
	//var newNameNih = namaLama.slice(0, jumlahKarakter - 4);
	//newNameNih = newNameNih + "_edit";
	//saveImageToJpg(newNameNih);
	//saveImageToJpg(listLogoFile[i]);
	saveImageToJpg(listSaveFile[i]);
	delete2Layer();
	}
	alert("DONE!\n\n" + "Banyak logo yang diexport: " + listLogoFile.length)
	
	} else {
		alert("Tolong check lagi listnya.\n\nJumlah baris model number dan logo file tidak sama " + listLogoFile.length + " " + listModelNumber.length)
	}


function readText(file){  
     if (textFile.exists) {  
    textFile.encoding = "UTF8";  
    textFile.lineFeed = "unix";  
    textFile.open("r", "TEXT", "????");  
    var str = textFile.read();  
    textFile.close();  
    return str;  
    }  
}  
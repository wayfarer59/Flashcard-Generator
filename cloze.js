exports.ClozeCard = function(text,cloze){

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');


}
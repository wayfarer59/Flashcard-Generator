exports.BasicCard = function(front,back){
	this.front=front;
	this.back=back;
	this.partial = front.replace(back, '...');
}


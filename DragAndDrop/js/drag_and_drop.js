function hundleDragStart(el) {
	this.style.opacity = '0.3';

	dragSrcEl = this;

	el.dataTransfer.effectAllowed = 'move';
	el.dataTransfer.setData('text/html', this.innerHTML);
};

function handleDragOver(el) {
	if (el.preventDefault) {
		el.preventDefault();
	}

	el.dataTransfer.dropEffect = 'move';

	return false;
};

function hundleDragEnter(el) {
	this.classList.add('over');
};

function hundleDragLeave(el) {
	this.classList.remove('over');
};

function handleDrop(el) {	
	if (el.stopPropagation) {
		el.stopPropagation();
	}

	if (dragSrcEl != this) {
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = el.dataTransfer.getData('text/html');
	}

	return false;
};

function hundleDragEnd(el) {
	this.style.opacity = '1';

	[].forEach.call(cols, function (col) {
		col.classList.remove('over');
	});
};

var cols = document.querySelectorAll('.columns .column');

[].forEach.call(cols, function(col) {
	col.addEventListener('dragstart', hundleDragStart, false);
	col.addEventListener('dragenter', hundleDragEnter, false);
	col.addEventListener('dragover', handleDragOver, false);
	col.addEventListener('dragleave', hundleDragLeave, false);
	col.addEventListener('drop', handleDrop, false);
	col.addEventListener('dragend', hundleDragEnd, false);
});
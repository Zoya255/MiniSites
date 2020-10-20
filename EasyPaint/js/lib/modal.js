/* ------------------------------- modal ------------------------------- */

/* -------------------- manipulate modal window -------------------- */

function openModal(id) {
	$(id).addClass('modal-open').removeClass('modal-close')
}

$('.script__modal-close').click(function() { closeModal(this) })

function closeModal(el) {
	$(el).parent().parent().parent().addClass('modal-close').removeClass('modal-open');
}

let preveiwContainer = document.querySelector('.cards-preview');
let preveiwBox=preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.cards-container .note').forEach(note => {
    note.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = note.getAttribute('data-name');
        preveiwBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

preveiwBox = preveiwContainer.querySelectorAll('.preview');

preveiwBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});
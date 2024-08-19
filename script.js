document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        if (card.classList.contains('flip')) {
            card.classList.remove('flip', 'full-screen');
            document.querySelectorAll('.card').forEach(c => {
                c.classList.remove('hidden');
            });
        } else {
            document.querySelectorAll('.card').forEach(c => {
                if (c !== card) {
                    c.classList.add('hidden');
                }
            });
            card.classList.add('flip', 'full-screen');
        }
    });
    
});

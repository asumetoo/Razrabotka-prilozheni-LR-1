const borderSelect = document.getElementById('border-color');
const bg = document.querySelector('.background');

borderSelect.addEventListener('change', function() {
  bg.className = bg.className.replace(/border-\w+/, ''); // удаляем старый класс
  bg.classList.add('border-' + this.value);
});

// Если нужно установить начальный цвет по умолчанию (например, синий)
bg.classList.add('border-blue');
borderSelect.value = 'blue';
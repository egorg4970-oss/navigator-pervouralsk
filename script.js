// Функция, которая срабатывает при нажатии на кнопку карточки
function showInfo(sectionName) {
    alert("Вы выбрали секцию: " + sectionName + ".\n\nЗдесь можно добавить более подробную информацию, расписание или форму записи!");
}

// Пример: плавный скролл к секциям при клике на меню (необязательно, но приятно)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
function toggleLanguage(language) {
    const contentEnglish = document.getElementById('content-english');
    const contentPunjabi = document.getElementById('content-punjabi');
    const englishButton = document.getElementById('btn-english');
    const punjabiButton = document.getElementById('btn-punjabi');

    if (language === 'english') {
        contentEnglish.style.display = 'block';
        contentPunjabi.style.display = 'none';
        englishButton.classList.add('active');
        punjabiButton.classList.remove('active');
    } else {
        contentEnglish.style.display = 'none';
        contentPunjabi.style.display = 'block';
        englishButton.classList.remove('active');
        punjabiButton.classList.add('active');
    }
}
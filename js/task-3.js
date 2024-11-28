function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content); // Витягуємо число зі строки
    const paddingWidth = parseFloat(padding) * 2; // Подвійний padding (зліва і справа)
    const borderWidth = parseFloat(border) * 2; // Подвійний border (зліва і справа)
    return contentWidth + paddingWidth + borderWidth;
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

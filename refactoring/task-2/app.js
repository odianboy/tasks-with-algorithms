function drawRating(vote) {
    if ((vote < 0) || (vote > 100)) {
        alert('Вы ввели некорректные данные');
    };

    let stars =  Math.ceil( vote / 20 );
    
    stars = (stars === 0) ? 1 : stars;
    
    return stars;
}
    // Проверка работы результата
    console.log( drawRating(0) ); // ★☆☆☆☆
    console.log( drawRating(1) ) ; // ★☆☆☆☆
    console.log( drawRating(50) ); // ★★★☆☆
    console.log( drawRating(99) ); // ★★★★★
    
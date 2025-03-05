for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;

    console.log(`%cMàu sắc đã được thay đổi`, `color: ${color}; font-weight: bold;`);
}
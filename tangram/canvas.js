const point = [
    { p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }], color: "#caff67" },
    { p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }], color: "#67becf" },
    { p: [{ x: 800, y: 0 }, { x: 800, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 200 }], color: "#ef3d61" },
    { p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }], color: "#f9f51a" },
    { p: [{ x: 400, y: 400 }, { x: 600, y: 600 }, { x: 400, y: 800 }, { x: 200, y: 600 }], color: "#a54c09" },
    { p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }], color: "#fa8ccc" },
    { p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }], color: "#f6ca29" }
];
window.onload = () => {
    const canvas = document.querySelector('#canvas');
    canvas.width = 800;
    canvas.height = 800;
    const context = canvas.getContext("2d");
    for (let i = 0; i < point.length; i++) {
        draw(point[i], context);
    }
}

draw = (po, con) => {
    con.beginPath();
    con.moveTo(po.p[0].x, po.p[0].y);
    for (let j = 1; j < po.p.length; j++) {
        con.lineTo(po.p[j].x, po.p[j].y);
    }
    con.closePath();
    con.fillStyle = po.color;
    con.fill();
}


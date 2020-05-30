import { VirtualContainer } from "virtual-container";

window.addEventListener('load', () => {
    var virtualContainer = new VirtualContainer(document.querySelector('#container'), {
        rowCount: 5000,
        colCount: 5000,
        rowHeight: 30,
        colWidth: 80,
        width: (document.querySelector('#container') as HTMLDivElement).offsetWidth,
        height: (document.querySelector('#container') as HTMLDivElement).offsetHeight
    });

    virtualContainer.addEventListener('update', function (s, e) {
        e.cellList.forEach(c => {
            c.element.innerHTML = getData(c.rowIndex, c.columnIndex);
        });
    });

    virtualContainer.init();

    function getData(rowIndex, columnIndex) {
        return `(${rowIndex + 1},${columnIndex + 1})`;
    }

    document.getElementById('btn1').addEventListener('click', function () {
        virtualContainer.resizeRow(3, 80);
    });
    document.getElementById('btn2').addEventListener('click', function () {
        virtualContainer.resizeColumn(4, 300);
    });
    document.getElementById('btn3').addEventListener('click', function () {
        virtualContainer.scroll('vertical', 200);
    });
    document.getElementById('btn4').addEventListener('click', function () {
        virtualContainer.scroll('horizontal', 800);
    });
});
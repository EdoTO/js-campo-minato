const playButton = document.getElementById('start')
const selectElement = document.getElementById('mode')
const gridElement = document.querySelector('.grid')


    const startGame = () => {

        console.log('inizia il gioco')

        console.log(selectElement.value)

        const mode = selectElement.value
        
        let rows;
        let columns;
        let cellSize;

        switch (mode) {
            case "1":
                rows = 10;
                columns = 10;
            break;
            case "2":
                rows = 9;
                columns = 9;
            break;
            case "3":
                rows = 7;
                columns = 7;
            break;
            default:
                rows = 10;
                columns = 10;

        }

        const cellNumber = rows * columns;
        cellSize = 'calc( 100% / ${ columns } )';
        for( let i = 1; i < cellNumber; i++) {
            const cell = document.createElement('div');
            cell.append (i + 1);
            cell.classList.add('cell');
            gridElement.append(cell);
        }


    }



    playButton.addEventListener('click', startGame); 
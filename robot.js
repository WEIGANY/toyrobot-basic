class Game {
    constructor(mapSize, initPosition, icon) {
        this.state = {
            robotPosition: initPosition,
            mapSize: mapSize,
            icon: icon
        };
    }

    availablePosition(newPosition, mapSize) {
        if (newPosition >= 0 && newPosition < mapSize) {
            return true;
        } else {
            return false;
        }
    }
    
    move(newPosition) {
        if (this.availablePosition(newPosition, this.state.mapSize)) {
            this.state.robotPosition = newPosition;
            this.render();
            return true;
        } else {
            return false;
        }
    }
    
    render() {
        var mapCells = document.querySelectorAll('.map-cell');
        var that = this;
        mapCells.forEach(function(aCell, index) {
            if (index === that.state.robotPosition) {
                aCell.innerHTML = that.state.icon;
            } else {
                aCell.innerHTML = '';
            }
        })
        /*mapCells.forEach((aCell, index) => {
            if (index === that.state.robotPosition) {
                aCell.innerHTML = that.state.icon;
            } else {
                aCell.innerHTML = '';
            }
        })*/


    }
    
    onCommandRight() {
        this.move(this.state.robotPosition + 1);
    }    
}


var game = new Game(5, 2, 'R');
game.render();

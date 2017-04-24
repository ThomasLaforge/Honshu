/* 
    Binary array
     _ _ _ _ _ _
    |_|_|_|X|_|_|
    |X|X|_|_|_|X|
    |_|X|X|X|_|_|
    |_|_|_|_|_|_|
    |_|_|_|_|_|X|

*/

export class Grid {

    private _grid: boolean[][];
    private gridCopy: boolean[][];
    
    constructor(grid: boolean[][]){
        this._grid = grid;
    }

    // TODO
    static isOk_GridIntegrity(grid: boolean[][]){
        return true;
    }

    nbRow(){
        return this.grid.length;
    }
    nbCol(){
        return this.grid[0].length;
    }

    isFull(){
        let cpt = 0; let i = 0; let j = 0;
        while(i < this.nbRow() && cpt % this.nbCol() === 0){
            j = 0;

            while(j < this.nbCol() && this.grid[i][j]){
                cpt++;
                j++;
            }
            i++;
        }

        return cpt === this.nbCol() * this.nbRow();
    }
    isNotFull(){
        return !this.isFull();
    }

    // https://fr.wikipedia.org/wiki/Algorithme_de_remplissage_par_diffusion#En_balayant_les_lignes
    longestChain(){
        let longestChain = 0;
        this.gridCopy = this.grid;

        for (let row = 0; row < this.nbRow() - 1; row++) {
            for (let col = 0; col < this.nbCol() -1; col++) {
                longestChain = Math.max(longestChain, this.areasize(row, col));
            }
        }

        return longestChain;
    }
    
    areasize(row: number, col: number): number {
        if (row < 0 || col < 0 || row > this.nbRow() - 1 || col > this.nbCol() - 1 || !this.gridCopy[row][col])
            return 0;

       this.gridCopy[row][col] = false;

        return 1
            + this.areasize(row + 1, col)
            + this.areasize(row - 1, col)
            + this.areasize(row, col + 1)
            + this.areasize(row, col - 1);
    }

    getHowManyOccurence(){
        return this.grid.map( line => {
            return line.filter( tile => { return tile}).length
        }).reduce((a, b) => a + b, 0);
    }

// Getters / Setters
	public get grid(): boolean[][] {
		return this._grid;
	}
	public set grid(value: boolean[][]) {
		this._grid = value;
	}
    
}
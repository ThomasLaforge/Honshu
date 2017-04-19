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
    
    constructor(grid: boolean[][]){
        this._grid = grid;
    }

    // TODO
    static isOk_GridIntegrity(grid: boolean[][]){
        return true;
    }

    nbLine(){
        return this.grid.length;
    }
    nbCol(){
        return this.grid[0].length;
    }

    isFull(){
        let cpt = 0; let i = 0; let j = 0;
        while(i < this.nbLine() && cpt % this.nbCol() === 0){
            j = 0;

            while(j < this.nbCol() && this.grid[i][j]){
                cpt++;
                j++;
            }
            i++;
        }

        return cpt === this.nbCol() * this.nbLine();
    }
    isNotFull(){
        return !this.isFull();
    }

    // https://fr.wikipedia.org/wiki/Algorithme_de_remplissage_par_diffusion#En_balayant_les_lignes
    longestChain(){

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
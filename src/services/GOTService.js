export default class GOTService {
    constructor() {
        this._apiBase = `https://www.anapioficeandfire.com/api`;
    }
    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }
        return await result.json();
    }

    async getAllCharacters() {
        const result = await this.getResource(`/characters?page=5&pageSize=10`);
        return result.map(this._transformCharacter);
    }

    async getCharacter(id) {
        return this._transformCharacter(await this.getResource(`/characters/${id}`))
    }

    async getAllHouses() {
        const result = await this.getResource(`/houses?page=5&pageSize=10`);
        return result.map(this._transformHouse);
    }

    async getHouse(id) {
        return this._transformHouse(await this.getResource(`/houses/${id}`));
    }

    async getAllBooks() {
        const result = await this.getResource(`/books?page=5&pageSize=10`);
        return result.map(this._transformBook);
    }

    async getBook(id) {
        return this._transformBook(await this.getResource(`/books/${id}`));
    }

    _transformCharacter(char) {
        return {
            name: char.name || `Not data...`,
            gender: char.gender || `Not data...`,
            born: char.born || `Not data...`,
            died: char.died || `Not data...`,
            culture: char.culture || `Not data...`
        }
    }

    _transformHouse(house) {
        return {
            name: house.name || `Not data...`,
            region: house.region || `Not data...`,
            words: house.words || `Not data...`,
            titles: house.titles || `Not data...`,
            overlord: house.overlord || `Not data...`,
            ancestralWeapons: house.ancestralWeapons || `Not data...`
        }
    }

    _transformBook(book) {
        return {
            name: book.name || `Not data...`,
            numberOfPages: book.numberOfPages || `Not data...`,
            publisher: book.publisher || `Not data...`,
            released: book.released || `Not data...`
        }
    }
}
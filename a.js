class Heroi {
    constructor(nome, experiencia) {
        this.nome = nome;
        this.experiencia = experiencia;
    }

    classificarNivel() {
        if (this.experiencia < 1000) {
            return "Ferro";
        } else if (this.experiencia <= 2000) {
            return "Bronze";
        } else if (this.experiencia <= 5000) {
            return "Prata";
        } else if (this.experiencia <= 7000) {
            return "Ouro";
        } else if (this.experiencia <= 8000) {
            return "Platina";
        } else if (this.experiencia <= 9000) {
            return "Ascendente";
        } else if (this.experiencia <= 10000) {
            return "Imortal";
        } else {
            return "Radiante";
        }
    }

    mostrarNivel() {
        const nivel = this.classificarNivel();
        console.log(`O Herói de nome ${this.nome} está no nível de ${nivel}`);
    }
}
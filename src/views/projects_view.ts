import Project from '../models/Project';

export default {
    render(project: Project) {
        return {
            numeroRomaneio: project.numeroRomaneio,
            nomeProduto: project.nomeProduto,
            numeroCorte: project.numeroCorte,
            dataEntrega: project.dataEntrega,
            observacoes: project.observacoes,
            numeroPecas: project.numeroPecas,
            numeroSobras: project.numeroSobras,
            numeroPecasLavanderia: project.numeroPecasLavanderia,
            numeroPecasPiloto: project.numeroPecasPiloto,
            totalPecasPorNumeracao: project.totalPecasPorNumeracao,
            numeroGrades: project.numeroGrades,
            pecasSemDefeito: project.pecasSemDefeito,
            clienteTONON: project.clienteTONON,
            numeroPecasRelave: project.numeroPecasRelave,
            numeroPecasDefeito: project.numeroPecasDefeito,
            numeroPecasZiperQuebrado: project.numeroPecasZiperQuebrado,
            numeroPecasFaltaPassantes: project.numeroPecasFaltaPassantes,
            pecasComProblema: project.pecasComProblema,
            totalPecas: project.totalPecas,
        };
    },

    renderMany(projects: Project []) {
        return projects.map(project => {
            return{
                id: project.id,
                numeroRomaneio: project.numeroRomaneio
            }
        })
    }
};
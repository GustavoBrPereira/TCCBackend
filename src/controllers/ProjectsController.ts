import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Project from '../models/Project';
import projects_view from '../views/projects_view';

interface BodyRequest {
    numeroRomaneio: string;
    nomeProduto: string;
    numeroCorte: string;
    dataEntrega: string;
    observacoes: string;
    numeroPecas: string[];
    numeroSobras: string[];
    numeroPecasLavanderia: string[];
    numeroPecasPiloto: string[];
    totalPecasPorNumeracao: number[];
    numeroGrades: string[];
    pecasSemDefeito: number;
    clienteTONON: string;
    numeroPecasRelave: string;
    numeroPecasDefeito: string;
    numeroPecasZiperQuebrado: string;
    numeroPecasFaltaPassantes: string;
    pecasComProblema: number;
    totalPecas: number;
    user_id: number;
}

export default {
    async index(request: Request, response: Response) {
        const projectsRepository = getRepository(Project);

        const projects = await projectsRepository.find();

        return response.json(projects_view.renderMany(projects));

    },

    async create(request: Request, response: Response) {
        const {
            numeroRomaneio,
            nomeProduto,
            numeroCorte,
            dataEntrega,
            observacoes,
            numeroPecas,
            numeroSobras,
            numeroPecasLavanderia,
            numeroPecasPiloto,
            // totalPecasPorNumeracao,
            numeroGrades,
            // pecasSemDefeito,
            clienteTONON,
            numeroPecasRelave,
            numeroPecasDefeito,
            numeroPecasZiperQuebrado,
            numeroPecasFaltaPassantes,
            // pecasComProblema,
            // totalPecas,
            user_id
        } = request.body as BodyRequest;

        const totalPecasPorNumeracao = [
        parseInt(numeroPecas[0]) + parseInt(numeroSobras[0]) + parseInt(numeroPecasLavanderia[0]) + parseInt(numeroPecasPiloto[0]),
        parseInt(numeroPecas[1]) + parseInt(numeroSobras[1]) + parseInt(numeroPecasLavanderia[1]) + parseInt(numeroPecasPiloto[1]),
        parseInt(numeroPecas[2]) + parseInt(numeroSobras[2]) + parseInt(numeroPecasLavanderia[2]) + parseInt(numeroPecasPiloto[2]),
        parseInt(numeroPecas[3]) + parseInt(numeroSobras[3]) + parseInt(numeroPecasLavanderia[3]) + parseInt(numeroPecasPiloto[3]),
        parseInt(numeroPecas[4]) + parseInt(numeroSobras[4]) + parseInt(numeroPecasLavanderia[4]) + parseInt(numeroPecasPiloto[4]),
        parseInt(numeroPecas[5]) + parseInt(numeroSobras[5]) + parseInt(numeroPecasLavanderia[5]) + parseInt(numeroPecasPiloto[5])
        ];

        let pecasSemDefeito = 0;
        for (let i=0; i<6; i++) {
        pecasSemDefeito += totalPecasPorNumeracao[i];
        }

        const pecasComProblema = 
            parseInt(clienteTONON) + parseInt(numeroPecasRelave) + 
            parseInt(numeroPecasDefeito) + parseInt(numeroPecasZiperQuebrado) +
            parseInt(numeroPecasFaltaPassantes);
        
        const totalPecas = pecasSemDefeito + pecasComProblema;

        const projectsRepository = getRepository(Project);


        const data = {
            numeroRomaneio,
            nomeProduto,
            numeroCorte,
            dataEntrega,
            observacoes,
            numeroPecas,
            numeroSobras,
            numeroPecasLavanderia,
            numeroPecasPiloto,
            totalPecasPorNumeracao,
            numeroGrades,
            pecasSemDefeito,
            clienteTONON,
            numeroPecasRelave,
            numeroPecasDefeito,
            numeroPecasZiperQuebrado,
            numeroPecasFaltaPassantes,
            pecasComProblema,
            totalPecas,
            user_id
        };

        const schema = Yup.object().shape({
            numeroRomaneio: Yup.string().required(),
            nomeProduto: Yup.string().required(),
            numeroCorte: Yup.string().required(),
            dataEntrega: Yup.string().required(),
            observacoes: Yup.string().required(),

            numeroPecas: Yup.array()
            .of(Yup.string().min(0))
            .required(),
            numeroSobras: Yup.array()
            .of(Yup.string().min(0))
            .required(),
            numeroPecasLavanderia: Yup.array()
            .of(Yup.string().min(0))
            .required(),
            numeroPecasPiloto: Yup.array()
            .of(Yup.string().min(0))
            .required(),
            // totalPecasPorNumeracao: Yup.array()
            // .of(Yup.number().min(0))
            // .required(),
            numeroGrades: Yup.array()
            .of(Yup.string().min(0))
            .required(),

            // pecasSemDefeito: Yup.number().required(),
            clienteTONON: Yup.string().required(),
            numeroPecasRelave: Yup.string().required(),
            numeroPecasDefeito: Yup.string().required(),
            numeroPecasZiperQuebrado: Yup.string().required(),
            numeroPecasFaltaPassantes: Yup.string().required(),
            // pecasComProblema: Yup.number().required(),
            // totalPecas: Yup.number().required(),
            // user_id: Yup.number().required()
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const project = projectsRepository.create(data);

        await projectsRepository.save(project);

        response.status(201).json(project);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const projectsRepository = getRepository(Project);

        const project = await projectsRepository.findOneOrFail(id);

        return response.json(projects_view.render(project));

    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const projectsRepository = getRepository(Project);

        const project = await projectsRepository.findOneOrFail(id);

        await projectsRepository.remove(project).then(
            () => {
                return response.json({ message: "Projeto deletado" })
            }
        )

        // return response.json(project);

    },
};
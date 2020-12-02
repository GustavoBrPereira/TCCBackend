import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('projects')
export default class Project {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    numeroRomaneio: string;
    
    @Column()
    nomeProduto: string;
    
    @Column()
    numeroCorte: string;
    
    @Column()
    dataEntrega: string;
    
    @Column()
    observacoes: string;
    
    @Column('simple-array')
    numeroPecas: string[];
    
    @Column('simple-array')
    numeroSobras: string[];
    
    @Column('simple-array')
    numeroPecasLavanderia: string[];
    
    @Column('simple-array')
    numeroPecasPiloto: string[];
    
    @Column('simple-array')
    totalPecasPorNumeracao: number[];
    
    @Column('simple-array')
    numeroGrades: string[];
    
    @Column()
    pecasSemDefeito: number;
    
    @Column()
    clienteTONON: string;
    
    @Column()
    numeroPecasRelave: string;
    
    @Column()
    numeroPecasDefeito: string;
    
    @Column()
    numeroPecasZiperQuebrado: string;
    
    @Column()
    numeroPecasFaltaPassantes: string;
    
    @Column()
    pecasComProblema: number;
    
    @Column()
    totalPecas: number;

    @Column()
    user_id: number;
}
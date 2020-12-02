import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    emailAccount: string;
    
    @Column()
    passwordAccount: string;
    
    @Column()
    projectName: string;

    @Column()
    customerName: string;

    @Column()
    customerData: string;

    @Column()
    customerAddress: string;

    @Column()
    customerCNPJ: string;

    @Column()
    customerEmail: string;

    @Column()
    providerCompanyName: string;

    @Column()
    providerOwnerName: string;

    @Column()
    providerAddress: string;

    @Column()
    providerCNPJ: string;

    @Column()
    providerEmail: string;

    @Column()
    bank: string;

    @Column()
    bankAgency: string;

    @Column()
    operation: string;

    @Column()
    savingsAccount: string;

    @Column()
    phoneContact: string;

    @Column()
    pathImage: string;

}
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../models/User';
import userView from '../views/users_view';


export default {
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(id);

        return response.json(userView.render(user));
    },

    async create(request: Request, response: Response) {
        const {
        emailAccount,
        passwordAccount,
        projectName,
        customerName,
        customerData,
        customerAddress,
        customerCNPJ,
        customerEmail,
        providerCompanyName,
        providerOwnerName,
        providerAddress,
        providerCNPJ,
        providerEmail,
        bank,
        bankAgency,
        operation,
        savingsAccount,
        phoneContact
    } = request.body;

    const usersRepository = getRepository(User);

    const requestImage = request.file ;

    let pathImage = 'no_image'

    if (requestImage) {
        pathImage = requestImage.filename ;
    }

    const data = {
        emailAccount,
        passwordAccount,
        projectName,
        customerName,
        customerData,
        customerAddress,
        customerCNPJ,
        customerEmail,
        providerCompanyName,
        providerOwnerName,
        providerAddress,
        providerCNPJ,
        providerEmail,
        bank,
        bankAgency,
        operation,
        savingsAccount,
        phoneContact,
        pathImage
    };

    console.log(pathImage)

    const schema = Yup.object().shape({
        emailAccount: Yup.string().required(),
        passwordAccount: Yup.string().required(),
        projectName: Yup.string().required(),
        customerName:  Yup.string().required(),
        customerData:  Yup.string().required(),
        customerAddress:  Yup.string().required(),
        customerCNPJ:  Yup.string().required(),
        customerEmail:  Yup.string().required(),
        providerCompanyName:  Yup.string().required(),
        providerOwnerName:  Yup.string().required(),
        providerAddress:  Yup.string().required(),
        providerCNPJ:  Yup.string().required(),
        providerEmail:  Yup.string().required(),
        bank:  Yup.string().required(),
        bankAgency:  Yup.string().required(),
        operation:  Yup.string().required(),
        savingsAccount:  Yup.string().required(),
        phoneContact:  Yup.string().required(),
        pathImage:  Yup.string()
    });

    await schema.validate(data, {
        abortEarly: false,
    });
    
    const user = usersRepository.create(data);

    await usersRepository.save(user);

    return response.status(201).json(user);
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(id);

        await usersRepository.remove(user).then(
            () => {
                return response.json({ message: "Usuário deletado" })
            }
        )

    },
};
import User from '../models/User';

export default {
    render(user: User) {
        return {
            id: user.id,
            emailAccount: user.emailAccount,
            projectName: user.projectName,
            customerName: user.customerName,
            customerData: user.customerData,
            customerAddress: user.customerAddress,
            customerCNPJ: user.customerCNPJ,
            customerEmail: user.customerEmail,
            providerCompanyName: user.providerCompanyName,
            providerOwnerName: user.providerOwnerName,
            providerAddress: user.providerAddress,
            providerCNPJ: user.providerCNPJ,
            providerEmail: user.providerEmail,
            bank: user.bank,
            bankAgency: user.bankAgency,
            operation: user.operation,
            savingsAccount: user.savingsAccount,
            phoneContact: user.phoneContact,
            pathImage: `http://192.168.0.111:3333/uploads/${user.pathImage}`
        };
    }
};
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // O id existe?
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionsRepository.findOne(id);

    // Se não, retornar erro
    if (!transaction) {
      throw new AppError('The transaction does not exist');
    }

    // Se sim, deletar
    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;

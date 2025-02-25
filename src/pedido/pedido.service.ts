import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOneBy({ id_pedido: id });
    if (!pedido) {
      throw new Error(`Pedido with id ${id} not found`);
    }
    return pedido;
  }

  create(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.save(pedido);
  }

  async update(id: number, pedido: Pedido): Promise<void> {
    await this.pedidoRepository.update(id, pedido);
  }

  async remove(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
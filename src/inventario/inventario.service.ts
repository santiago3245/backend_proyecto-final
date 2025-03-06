import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from './inventario.entity';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private readonly inventarioRepository: Repository<Inventario>,
  ) {}

  findAll(): Promise<Inventario[]> {
    return this.inventarioRepository.find({ relations: ['id_empresa'] });
  }

  async findOne(id: number): Promise<Inventario> {
    const inventario = await this.inventarioRepository.findOne({ where: { id_inventario: id }, relations: ['id_empresa'] });
    if (!inventario) {
      throw new Error(`Inventario with id ${id} not found`);
    }
    return inventario;
  }

  create(inventario: Inventario): Promise<Inventario> {
    return this.inventarioRepository.save(inventario);
  }

  async update(id: number, inventario: Inventario): Promise<void> {
    await this.inventarioRepository.update(id, inventario);
  }

  async remove(id: number): Promise<void> {
    await this.inventarioRepository.delete(id);
  }
}
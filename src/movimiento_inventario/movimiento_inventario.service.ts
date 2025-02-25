import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoInventario } from './movimiento_inventario.entity';

@Injectable()
export class MovimientoInventarioService {
  constructor(
    @InjectRepository(MovimientoInventario)
    private readonly movimientoInventarioRepository: Repository<MovimientoInventario>,
  ) {}

  findAll(): Promise<MovimientoInventario[]> {
    return this.movimientoInventarioRepository.find();
  }

  async findOne(id: number): Promise<MovimientoInventario> {
    const movimientoInventario = await this.movimientoInventarioRepository.findOneBy({ id_movimiento: id });
    if (!movimientoInventario) {
      throw new Error(`MovimientoInventario with id ${id} not found`);
    }
    return movimientoInventario;
  }

  create(movimientoInventario: MovimientoInventario): Promise<MovimientoInventario> {
    return this.movimientoInventarioRepository.save(movimientoInventario);
  }

  async update(id: number, movimientoInventario: MovimientoInventario): Promise<void> {
    await this.movimientoInventarioRepository.update(id, movimientoInventario);
  }

  async remove(id: number): Promise<void> {
    await this.movimientoInventarioRepository.delete(id);
  }
}
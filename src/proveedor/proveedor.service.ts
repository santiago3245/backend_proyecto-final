import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>,
  ) {}

  findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.find();
  }

  async findOne(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findOne({ where: { id_proveedor: id } });
    if (!proveedor) {
      throw new Error(`Proveedor with id ${id} not found`);
    }
    return proveedor;
  }

  create(proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorRepository.save(proveedor);
  }

  async update(id: number, proveedor: Proveedor): Promise<void> {
    await this.proveedorRepository.update(id, proveedor);
  }

  async remove(id: number): Promise<void> {
    await this.proveedorRepository.delete(id);
  }
}
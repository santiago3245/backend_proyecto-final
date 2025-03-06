import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productoRepository.find({ relations: ['id_categoria', 'id_empresa', 'id_proveedor'] });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({ where: { id_producto: id }, relations: ['id_categoria', 'id_empresa', 'id_proveedor'] });
    if (!producto) {
      throw new Error(`Producto with id ${id} not found`);
    }
    return producto;
  }

  create(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  async update(id: number, producto: Producto): Promise<void> {
    await this.productoRepository.update(id, producto);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}
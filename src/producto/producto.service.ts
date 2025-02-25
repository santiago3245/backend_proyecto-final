// producto.service.ts
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

  // Cargar relaciones: id_categoria, id_empresa, id_proveedor
  findAll(): Promise<Producto[]> {
    return this.productoRepository.find({
      relations: ['id_categoria', 'id_empresa', 'id_proveedor'],  // Agregar relaciones
    });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({
      where: { id_producto: id },
      relations: ['id_categoria', 'id_empresa', 'id_proveedor'],  // Cargar relaciones al buscar un producto individual
    });
    if (!producto) {
      throw new Error(`Producto with id ${id} not found`);
    }
    return producto;
  }

  async create(producto: Producto): Promise<Producto> {
    const now = new Date();

    const newProducto = this.productoRepository.create({
      ...producto,
      id_categoria: producto.id_categoria,
      id_empresa: producto.id_empresa,
      id_proveedor: producto.id_proveedor,
      fecha_creacion: now,
      ultima_actualizacion: now,
    });

    return this.productoRepository.save(newProducto);
  }

  async update(id: number, producto: Producto): Promise<void> {
    const now = new Date();

    await this.productoRepository.update(id, {
      ...producto,
      id_categoria: producto.id_categoria,
      id_empresa: producto.id_empresa,
      id_proveedor: producto.id_proveedor,
      ultima_actualizacion: now,
    });
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}

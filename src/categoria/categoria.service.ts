import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id_categoria: id });
    if (!categoria) {
      throw new Error(`Categoria with id ${id} not found`);
    }
    return categoria;
  }

  create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async update(id: number, categoria: Categoria): Promise<void> {
    await this.categoriaRepository.update(id, categoria);
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
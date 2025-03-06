import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  async findOne(id: number): Promise<Empresa> {
    const empresa = await this.empresaRepository.findOneBy({ id_empresa: id });
    if (!empresa) {
      throw new Error(`Empresa with id ${id} not found`);
    }
    return empresa;
  }

  create(empresa: Empresa): Promise<Empresa> {
    return this.empresaRepository.save(empresa);
  }

  async update(id: number, empresa: Empresa): Promise<void> {
    await this.empresaRepository.update(id, empresa);
  }

  async remove(id: number): Promise<void> {
    await this.empresaRepository.delete(id);
  }
}
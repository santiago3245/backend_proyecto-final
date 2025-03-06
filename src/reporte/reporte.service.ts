import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reporte } from './reporte.entity';

@Injectable()
export class ReporteService {
  constructor(
    @InjectRepository(Reporte)
    private readonly reporteRepository: Repository<Reporte>,
  ) {}

  findAll(): Promise<Reporte[]> {
    return this.reporteRepository.find({ relations: ['id_empresa', 'id_usuario'] });
  }

  async findOne(id: number): Promise<Reporte> {
    const reporte = await this.reporteRepository.findOne({ where: { id_reporte: id }, relations: ['id_empresa', 'id_usuario'] });
    if (!reporte) {
      throw new Error(`Reporte with id ${id} not found`);
    }
    return reporte;
  }

  create(reporte: Reporte): Promise<Reporte> {
    return this.reporteRepository.save(reporte);
  }

  async update(id: number, reporte: Reporte): Promise<void> {
    await this.reporteRepository.update(id, reporte);
  }

  async remove(id: number): Promise<void> {
    await this.reporteRepository.delete(id);
  }
}
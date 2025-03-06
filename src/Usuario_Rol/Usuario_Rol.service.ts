import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioRol } from './Usuario_Rol.entity';

@Injectable()
export class UsuarioRolService {
  constructor(
    @InjectRepository(UsuarioRol)
    private readonly usuarioRolRepository: Repository<UsuarioRol>,
  ) {}

  findAll(): Promise<UsuarioRol[]> {
    return this.usuarioRolRepository.find({ relations: ['id_usuario', 'id_rol'] });
  }

  async findOne(id: number): Promise<UsuarioRol> {
    const usuarioRol = await this.usuarioRolRepository.findOne({ where: { id_usuario_rol: id }, relations: ['id_usuario', 'id_rol'] });
    if (!usuarioRol) {
      throw new Error(`UsuarioRol with id ${id} not found`);
    }
    return usuarioRol;
  }

  create(usuarioRol: UsuarioRol): Promise<UsuarioRol> {
    return this.usuarioRolRepository.save(usuarioRol);
  }

  async update(id: number, usuarioRol: UsuarioRol): Promise<void> {
    await this.usuarioRolRepository.update(id, usuarioRol);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRolRepository.delete(id);
  }
}
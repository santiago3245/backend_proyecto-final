import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Rol } from '../rol/rol.entity';

@Entity()
export class UsuarioRol {
  @PrimaryGeneratedColumn()
  id_usuario_rol: number;

  @ManyToOne(() => Usuario, usuario => usuario.id_usuario)
  id_usuario: Usuario;

  @ManyToOne(() => Rol, rol => rol.id_rol)
  id_rol: Rol;

  @CreateDateColumn()
  fecha_asignacion: Date;

  @UpdateDateColumn()
  fecha_actualizacion: Date;
}
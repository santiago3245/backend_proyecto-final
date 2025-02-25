import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Rol } from '../rol/rol.entity';

@Entity()
export class UsuarioRol {
  @PrimaryGeneratedColumn()
  id_usuario_rol: number;

  @ManyToOne(() => Usuario, usuario => usuario.usuarioRoles, { eager: true })
  id_usuario: Usuario;
  
  @ManyToOne(() => Rol, rol => rol.usuarioRoles, { eager: true })
  id_rol: Rol;

  @CreateDateColumn()
  fecha_asignacion: Date;
}
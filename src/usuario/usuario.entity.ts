import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { MovimientoInventario } from '../movimiento_inventario/movimiento_inventario.entity';
import { Reporte } from 'src/reporte/reporte.entity';
import { UsuarioRol } from 'src/Usuario_Rol/Usuario_Rol.entity';


@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre_completo: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  estado: string;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  ultima_conexion: Date;

  @Column()
  password_hash: string;

  @ManyToOne(() => Empresa, empresa => empresa.usuarios)
  id_empresa: Empresa;

  @OneToMany(() => MovimientoInventario, movimiento_inventario => movimiento_inventario.id_usuario)
  movimientos: MovimientoInventario[];

  @OneToMany(()=>Reporte, reporte=>reporte.id_usuario)
  reportes: Reporte[];

  @OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.id_usuario)
  usuarioRoles: UsuarioRol[];
  

}
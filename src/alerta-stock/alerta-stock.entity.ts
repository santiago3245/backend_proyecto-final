import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Producto } from '../producto/producto.entity';

@Entity('alerta_stock')
export class AlertaStock {
  @PrimaryGeneratedColumn()
  id_alerta: number;

  @ManyToOne(() => Producto, producto => producto.alertas)
  id_producto: Producto;

  @Column()
  nivel_minimo: number;

  @Column()
  estado: string;

  @CreateDateColumn()
  fecha_creacion: Date;
}
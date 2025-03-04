// filepath: /c:/Users/santi/Downloads/Proyecto (1)/proyecto-final/src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolModule } from './rol/rol.module';
import { AlertaStock } from './alerta-stock/alerta-stock.entity';
import { Categoria } from './categoria/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { AlertaStockModule } from './alerta-stock/alerta-stock.module';
import { EmpresaModule } from './empresa/empresa.module';
import { Inventario } from './inventario/inventario.entity';
import { InventarioModule } from './inventario/inventario.module';
import { MovimientoInventarioModule } from './movimiento_inventario/movimiento_inventario.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProductoModule } from './producto/producto.module';
import { Proveedor } from './proveedor/proveedor.entity';
import { ReporteModule } from './reporte/reporte.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRolModule } from './Usuario_Rol/Usuario_Rol.module';
import { Detalle_PedidoModule } from './Detalle_Pedido/detalle_pedido.module';
import { ProveedorModule } from './proveedor/proveedor.module';

import * as dotenv from 'dotenv';
dotenv.config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_DATABASE:', process.env.DB_DATABASE);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432', 10),  // Asegurarse que DB_PORT es un número
      username: process.env.DB_USERNAME,
      password: String(process.env.DB_PASSWORD),  // Asegurarse de que es una cadena
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolModule,
    AlertaStockModule,
    CategoriaModule,
    EmpresaModule,
    InventarioModule,
    MovimientoInventarioModule,
    PedidoModule,
    ProductoModule,
    ProveedorModule,
    ReporteModule,
    UsuarioModule,
    UsuarioRolModule,
    Detalle_PedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
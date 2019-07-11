import { Socket } from 'socket.io';

export const desconectar = (cliente: Socket)=>{
   cliente.on('disconnect',()=>{
      console.log('Cliente desconectado');
   });
}

export const mensaje =(cliente :Socket, io:SocketIO.Server)=>{
   cliente.on('mensaje',(payload:{de:string, cuerpo:string}) =>{
      console.log('Mensaje recibido',payload);
      io.emit('mensaje-nuevo',payload);
   });
}

export const post =(cliente :Socket, io:SocketIO.Server)=>{
   cliente.on('mensaje',(payload:{de:string, cuerpo:string, nombre:string, ap_pat:string, ap_mat:string}) =>{
      console.log('Mensaje recibido',payload);
      io.emit('mensaje-nuevo',payload);
   });
}
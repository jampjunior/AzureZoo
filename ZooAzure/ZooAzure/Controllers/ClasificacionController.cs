﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ZooAzure.Controllers
{
    public class ClasificacionController : ApiController
    {
        // GET: api/Clasificacion
        public RespuestaApi Get()
        {
            RespuestaApi resultado = new RespuestaApi();
            List<Clasificacion> clasificacion = new List<Clasificacion>();
            try
            {
                Db.Conectar();
                if (Db.EstaLaConexionAbierta())
                {
                    clasificacion = Db.ClasificacionDeAnimales();
                }
                resultado.Error = "";
                Db.Desconectar();

            }
            catch (Exception)
            {
                resultado.Error = "Te estoy petando Bro!";
            }
            resultado.TotalElemento = clasificacion.Count;
            resultado.clasificacion = clasificacion;
            return resultado;
        }

        // GET: api/Clasificacion/5
        public RespuestaApi Get(long id)
        {
            RespuestaApi resultado = new RespuestaApi();
            List<Clasificacion> tipo = new List<Clasificacion>();
            try
            {
                Db.Conectar();
                if (Db.EstaLaConexionAbierta())
                {
                    tipo = Db.ClasificacionPorId(id);

                }
                resultado.Error = "";
                Db.Desconectar();
            }
            catch (Exception ex)
            {
                resultado.Error = "Te estoy petando Bro!";
            }
            resultado.TotalElemento = tipo.Count;
            resultado.clasificacion = tipo;
            return resultado;
        }

        // POST: api/Clasificacion
        [HttpPost]
        public RespuestaApi Post([FromBody]Clasificacion clasificacion)
        {
            RespuestaApi respuesta = new RespuestaApi();
            respuesta.Error = "";
            int filasAfectadas = 0;
            try
            {
                Db.Conectar();
                if (Db.EstaLaConexionAbierta())
                {
                    filasAfectadas = Db.Agregarclasificar(clasificacion);

                }
                respuesta.TotalElemento = filasAfectadas;
                Db.Desconectar();
            }
            catch (Exception ex)
            {
                respuesta.TotalElemento = 0;
                respuesta.Error = "Te estoy petando Bro!";
            }

            return (respuesta);

        }

        // PUT: api/Clasificacion/5
        [HttpPut]
        public RespuestaApi Put(int id, [FromBody]Clasificacion clasificacion)
        {
            RespuestaApi respuesta = new RespuestaApi();
            respuesta.Error = "";
            int filasAfectadas = 0;
            try
            {
                Db.Conectar();
                if (Db.EstaLaConexionAbierta())
                {
                    filasAfectadas = Db.ActualizarClasi(id, clasificacion);

                }
                respuesta.TotalElemento = filasAfectadas;
                Db.Desconectar();
            }
            catch (Exception ex)
            {

                respuesta.TotalElemento = 0;
                respuesta.Error = "error al actualizar la marca";
            }

            return (respuesta);



        }

        // DELETE: api/Clasificacion/5
        [HttpDelete]
        public RespuestaApi Delete(int id)
        {
            RespuestaApi respuesta = new RespuestaApi();
            respuesta.Error = "";
            int filasAfectadas = 0;
            try
            {
                Db.Conectar();
                if (Db.EstaLaConexionAbierta())
                {
                    filasAfectadas = Db.Eliminarclasi(id);
                }
                respuesta.TotalElemento = filasAfectadas;
            }
            catch (Exception ex)
            {

                respuesta.TotalElemento = 0;
                respuesta.Error = "Te estoy pentando men";
            }
            return (respuesta);
        }
    }
}

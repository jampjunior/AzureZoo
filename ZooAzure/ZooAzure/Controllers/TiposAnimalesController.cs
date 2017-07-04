using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ZooAzure.Controllers
{
    public class TiposAnimalesController : ApiController
    {
        // GET: api/TiposAnimales
        public RespuestaApi Get()
        {
            RespuestaApi resultado = new RespuestaApi();
            List<TiposAnimales> TiposAnimales = new List<TiposAnimales>();
            try
            {
                Db.Conectar();
                if (Db.EstaLaConexionAbierta())
                {
                    TiposAnimales = Db.MostrarLosTiposDeAnimales();
                }
                resultado.Error = "";
                Db.Desconectar();

            }
            catch (Exception)
            {
                resultado.Error = "Te estoy petando Bro!";
            }
            resultado.TotalElemento = TiposAnimales.Count;
            resultado.TiposAnimales = TiposAnimales;
            return resultado;
        }

        // GET: api/TiposAnimales/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TiposAnimales
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TiposAnimales/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TiposAnimales/5
        public void Delete(int id)
        {
        }
    }
}

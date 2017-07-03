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
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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

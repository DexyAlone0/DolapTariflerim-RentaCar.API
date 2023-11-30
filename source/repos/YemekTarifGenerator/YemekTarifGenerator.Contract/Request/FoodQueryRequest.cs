using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Contract.Request
{
    public class FoodQueryRequest
    {
        public string Name { get; set; }
        public string Recipe { get; set; }
    }
}

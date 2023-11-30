using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YemekTarifiContext.Domain.Entities
{
    public class Food
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Recipe { get; set; }
        public virtual List<Material> Materials { get; set; }
    }

    public class Material
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}

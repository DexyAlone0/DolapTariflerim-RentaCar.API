using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BerkayRentaCar.Contract.Response.CarResponse
{
    public class CarQuantityResponse
    {
        public List<CarQuantityItem> CarQuantities { get; set; } = new List<CarQuantityItem>();

    }
    public class CarQuantityItem
    {
        public string ModelName { get; set; }
        public int Year { get; set; }
        public int Count { get; set; }
    }

}

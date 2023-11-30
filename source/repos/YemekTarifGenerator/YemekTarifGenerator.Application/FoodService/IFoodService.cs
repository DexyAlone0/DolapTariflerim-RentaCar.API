using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YemekTarifGenerator.Contract.Response;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Application.FoodService
{
    public interface IFoodService
    {
        Task<IReadOnlyList<Food>> GetAllFoodAsync(FoodQueryRequest request);
    }
}

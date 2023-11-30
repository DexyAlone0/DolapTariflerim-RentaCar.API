using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YemekTarifGenerator.Contract.Response;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Data.Repositories.Abstract;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Application.FoodService
{
    public class FoodService : IFoodService
    {
        private readonly IFoodRepository foodRepository;
        public FoodService(IFoodRepository foodRepository)
        {
            this.foodRepository = foodRepository;
        }
        public async Task<IReadOnlyList<Food>> GetAllFoodAsync(FoodQueryRequest request)
        {
            return await this.foodRepository.GetAllFoodAsync(request);
        }
    }
}

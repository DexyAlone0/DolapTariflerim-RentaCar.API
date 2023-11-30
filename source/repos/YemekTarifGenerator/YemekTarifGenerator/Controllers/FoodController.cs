using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using YemekTarifGenerator.Contract.Response;
using YemekTarifiContext.Application.FoodService;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Controllers
{
    public class FoodController : ControllerBase
    {
        private readonly IFoodService foodService;
        public FoodController(IFoodService foodService)
        {
                this.foodService = foodService;
        }

        [Route("getAllFood")]
        [HttpGet]

        public async Task<IReadOnlyList<Food>> GetAllFoodAsync(FoodQueryRequest request)
        {
           return await this.foodService.GetAllFoodAsync(request);
        }



    }
}

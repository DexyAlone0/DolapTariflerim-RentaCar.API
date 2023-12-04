using Microsoft.AspNetCore.Mvc;
using YemekTarifGenerator.Domain.Entities;
using YemekTarifiContext.Application.FoodService;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Data.Context;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Controllers
{
    public class FoodController : ControllerBase
    {
        private readonly IFoodService foodService;
        private readonly YemekTarifiGeneratorContext yemekTarifiGeneratorContext;

        public FoodController(IFoodService foodService, YemekTarifiGeneratorContext yemekTarifiGeneratorContext)
        {
            this.foodService = foodService;
            this.yemekTarifiGeneratorContext = yemekTarifiGeneratorContext;
        }
        [Route("getAllFood")]
        [HttpGet]
        public List<Food> GetAllFood()
        {
            return this.foodService.GetAllFood();
        }
        [Route("api/[controller]")]
        [HttpPost]
        public RepositoryResult CreateFoodWithMaterials(FoodCreationModelRequest request)
        {
            return this.foodService.CreateFoodWithMaterials(request);
        }





    }
}

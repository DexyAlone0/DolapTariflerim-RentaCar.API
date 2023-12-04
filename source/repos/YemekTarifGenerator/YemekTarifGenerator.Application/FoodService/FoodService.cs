using YemekTarifGenerator.Domain.Entities;
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

        public RepositoryResult CreateFoodWithMaterials(FoodCreationModelRequest request)
        {
            return this.foodRepository.CreateFoodWithMaterials(request);
        }

        public List<Food> GetAllFood()
        {
            return this.foodRepository.GetAllFood();
        }
    }
}

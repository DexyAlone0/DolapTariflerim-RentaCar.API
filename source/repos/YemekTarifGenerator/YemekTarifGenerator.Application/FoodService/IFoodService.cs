using YemekTarifGenerator.Domain.Entities;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Application.FoodService
{
    public interface IFoodService
    {
        List<Food> GetAllFood();
        public RepositoryResult CreateFoodWithMaterials(FoodCreationModelRequest request);

    }
}

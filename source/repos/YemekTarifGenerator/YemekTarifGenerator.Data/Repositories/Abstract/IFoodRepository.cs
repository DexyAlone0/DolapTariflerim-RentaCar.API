using YemekTarifGenerator.Domain.Entities;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Data.Repositories.Abstract
{
    public interface IFoodRepository
    {
       List<Food> GetAllFood();
        public RepositoryResult CreateFoodWithMaterials(FoodCreationModelRequest request);

    }
}

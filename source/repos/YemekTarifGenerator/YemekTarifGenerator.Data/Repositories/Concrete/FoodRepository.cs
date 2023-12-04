using TnActivationCore.Repository.Mssql.GenericRepository;
using YemekTarifGenerator.Domain.Entities;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Data.Context;
using YemekTarifiContext.Data.Repositories.Abstract;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Data.Repositories.Concrete
{
    public class FoodRepository : IFoodRepository
    {
        private readonly IGenericRepository genericRepository;
        private readonly YemekTarifiGeneratorContext dbContext;


        public FoodRepository(IGenericRepository genericRepository, YemekTarifiGeneratorContext dbContext)
        {
            this.genericRepository = genericRepository;
            this.dbContext = dbContext;
        }

        public RepositoryResult CreateFoodWithMaterials(FoodCreationModelRequest request)
        {
            var result = new RepositoryResult();


            using (var transaction = dbContext.Database.BeginTransaction())
            {
                try
                {
                    var omelette = new Food { FoodName = request.FoodName , FoodRecipe = request.Recipe};

                    omelette.FoodMaterials = request.Materials.Select(material =>
                        new FoodMaterial { Material = new Material { MaterialName = material } }).ToList();

                    dbContext.Foods.Add(omelette);
                    dbContext.SaveChanges();

                    transaction.Commit();

                    result.IsSuccess = true;
                    return result;
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    result.ErrorMessage = $"Hata oluştu: {ex.Message}";
                    return result;
                }
            }
        }

        public List<Food> GetAllFood()
        {
            this.dbContext.FoodMaterials.ToList();
            return dbContext.Foods.ToList();
            
        }
        


    }
}

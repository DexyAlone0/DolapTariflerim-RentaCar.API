using BerkayRentaCar.Contract.Request.ModelRequest;
using BerkayRentaCar.Data.Repositories.Abstract;
using BerkayRentaCar.Domain.Entities;
using System.Runtime.InteropServices;
using TnActivationCore.Repository.Mssql.GenericRepository;

namespace BerkayRentaCar.Data.Repositories.Concrete
{
    public class ModelRepository : IModelRepository
    {
        private readonly IGenericRepository genericRepository;
        private readonly List<Model> models;
        
        public ModelRepository(IGenericRepository genericRepository)
        {
            this.genericRepository = genericRepository;
            
        }

        public async Task<IReadOnlyList<Model>> GetAllAsync()
        {
            return await this.genericRepository.GetListAsync<Model>();
        }

        public async Task<IReadOnlyList<Model>> GetByBrandIdAsync(ModelQueryRequest request)
        {
            return await this.genericRepository.GetListAsync<Model>(x => x.BrandId == request.BrandId);
        }
        public async Task CreateModelAsync(CreateModelCommandRequest request, int fileId)
        {
            var model = new Model
            {
                Name = request.Name,
                BrandId = request.BrandId,
                FuelTypeId = request.FuelTypeId,
                GearTypeId = request.GearTypeId,
                CountOfSeats = request.CountOfSeats,
                CaseTypeId = request.CaseTypeId,
                FileId = fileId
            };
            await this.genericRepository.AddAsync(model);
            await this.genericRepository.SaveChangesAsync();


        }

        public async Task UpdateModelAsync(ModelUpdateRequest model)
        {
            var carUpdate = models.FirstOrDefault(x => x.Id == model.Id);
            carUpdate.Name = model.Name;
            carUpdate.BrandId = model.BrandId;
            carUpdate.CaseTypeId = model.CaseTypeId;
            carUpdate.GearTypeId = model.GearTypeId;
            carUpdate.FuelTypeId = model.FuelTypeId;
            carUpdate.CountOfSeats = model.CountOfSeats;

            await this.genericRepository.AddAsync(model);
            await this.genericRepository.SaveChangesAsync();


        }
    }


}


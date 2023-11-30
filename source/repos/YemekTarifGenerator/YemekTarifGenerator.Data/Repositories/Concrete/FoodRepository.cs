using Microsoft.EntityFrameworkCore.Query;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

using TnActivationCore.Repository.Mssql.GenericRepository;
using YemekTarifGenerator.Contract.Response;
using YemekTarifiContext.Contract.Request;
using YemekTarifiContext.Data.Repositories.Abstract;
using YemekTarifiContext.Domain.Entities;
using YemekTarifiContext.Data.Context;

namespace YemekTarifiContext.Data.Repositories.Concrete
{
    public class FoodRepository : IFoodRepository
    {
        private readonly IGenericRepository genericRepository;
        private readonly YemekTarifiGeneratorContext dbContext;


        public FoodRepository(IGenericRepository genericRepository , YemekTarifiGeneratorContext dbContext)
        {
            this.genericRepository = genericRepository;
            this.dbContext = dbContext;
        }

        

        public async Task<IReadOnlyList<FoodQueryRequest>> IFoodRepository.GetAllFoodAsync(FoodQueryRequest request)
        {
            Expression<Func<Food, bool>> expression = LinqExpressionBuilder.New<Food>(x => x.IsActive);
        }
    }
}

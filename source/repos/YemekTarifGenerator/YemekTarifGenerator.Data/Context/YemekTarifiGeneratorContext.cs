using Microsoft.EntityFrameworkCore;
using YemekTarifiContext.Domain.Entities;

namespace YemekTarifiContext.Data.Context
{
    public class YemekTarifiGeneratorContext : DbContext
    {
        public YemekTarifiGeneratorContext(DbContextOptions<YemekTarifiGeneratorContext> options) :base(options)
        {
        }
        public DbSet<Food> Foods { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<FoodMaterial> FoodMaterials { get; set; }

       

    }
}

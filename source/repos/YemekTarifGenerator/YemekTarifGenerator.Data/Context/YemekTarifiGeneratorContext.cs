using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using YemekTarifiContext.Domain.Entities;
using System.Threading.Tasks;


namespace YemekTarifiContext.Data.Context
{
    public class YemekTarifiGeneratorContext : DbContext
    {
        public YemekTarifiGeneratorContext(DbContextOptions<YemekTarifiGeneratorContext> options) :base(options)
        {
            
        }
        public DbSet<Food> Foods { get; set; }
        public DbSet<Material> Materials { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Food>()
                .HasMany(f => f.Materials)
                .WithOne()
                .HasForeignKey(m => m.Id);
        }
    }

}

using Microsoft.EntityFrameworkCore;
using YemekTarifiContext.Data.Context;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<YemekTarifiGeneratorContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("YemekTarifiGeneratorContext")));


// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
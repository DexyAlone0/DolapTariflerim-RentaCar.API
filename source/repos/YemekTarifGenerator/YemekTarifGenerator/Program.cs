using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.EntityFrameworkCore;
using TnActivationCore.Repository.Mssql.GenericRepository;
using TnActivationCore.Repository.Mssql;
using YemekTarifiContext.Data.Context;
using YemekTarifGenerator.Extensions;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<KestrelServerOptions>(options => options.AllowSynchronousIO = true);
builder.Services.AddControllers();
var env = builder.Environment;
var connectionString = builder.Configuration.GetConnectionString("YemekTarifiGeneratorContext");
builder.Services.AddGenericRepository<YemekTarifiGeneratorContext>();
builder.Services.AddQueryRepository<YemekTarifiGeneratorContext>();
builder.Services.AddApplicationServices();
builder.Services.AddDbContext<YemekTarifiGeneratorContext>(option => option.UseSqlServer(connectionString));
builder.Services.AddSwaggerGen();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();


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
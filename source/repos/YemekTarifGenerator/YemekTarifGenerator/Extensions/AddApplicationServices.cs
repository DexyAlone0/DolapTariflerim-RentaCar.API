
using YemekTarifiContext.Application.FoodService;
using YemekTarifiContext.Application.UserService;
using YemekTarifiContext.Data.Repositories.Abstract;
using YemekTarifiContext.Data.Repositories.Concrete;


namespace YemekTarifGenerator.Extensions;

public static class ApplicationServicesExtension
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddScoped<IFoodService, FoodService>();
        services.AddScoped<IFoodRepository, FoodRepository>();
        
        services.AddScoped<IUserService, UserService>();


        return services;
    }


}
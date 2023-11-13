using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Azure.Core;
using BerkayRentaCar.Application.UserService;
using BerkayRentaCar.Contract.Request.UserRequest;
using BerkayRentaCar.Contract.Response.User;
using BerkayRentaCar.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace BerkayRentaCar.Controllers;

public class UserController : ControllerBase
{
    private readonly IUserService userService;

    public UserController(IUserService userService)
    {
        this.userService = userService;
    }
    string signingKey = "BuBenimSigningKey";

    [Route("Auth")]
    [HttpGet]
    public string AuthUser(string Name , string Password)
    {
        var claims = new[]
       {
            new Claim(ClaimTypes.Name,Name),
            new Claim(JwtRegisteredClaimNames.Email,Name),
        };
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKey));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);



        var jwtSecurityToken = new JwtSecurityToken(

            issuer: "http://localhost.com",
            audience: "BuBenimKullandigimAudienceDegeri",
            claims: claims,
            expires: DateTime.Now.AddDays(15),
            notBefore: DateTime.Now,
            signingCredentials: credentials


            );

        var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
        return token;
    }
    [HttpGet("ValidateToken")]
    public bool ValidateToken (string token)
    {
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKey));
        try
        {
            JwtSecurityTokenHandler handler = new();
            handler.ValidateToken(token, new TokenValidationParameters()
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = securityKey,
                ValidateLifetime = true,
                ValidateAudience = false,
                ValidateIssuer = false,
            }, out SecurityToken validatedToken);
            var jwtToken = (JwtSecurityToken)validatedToken;
            var claims = jwtToken.Claims.ToList();
            return true;
        }
        catch(SystemException)
        {
            return false;
        }
    }

    [Route("CreateUser")]
    [HttpPost]
    public async Task CreateUser([FromBody] CreateUserCommandRequest request)
    {
        await this.userService.CreateUserAsync(request);
    }
    
    [Route("LoginUser")]
    [HttpGet]
    public async Task<bool> LoginUser(UserQueryRequest request)
    {
        var claims = new[]
       {
            new Claim(ClaimTypes.Name,request.Name),
            new Claim(JwtRegisteredClaimNames.Email,request.Name),
        };
        var signinKey = "BuBenimSigningKey";
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signinKey));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);



        var jwtSecurityToken = new JwtSecurityToken(

            issuer: "http://localhost.com",
            audience: "BuBenimKullandigimAudienceDegeri",
            claims: claims,
            expires: DateTime.Now.AddDays(15),
            notBefore: DateTime.Now,
            signingCredentials: credentials


            );

        var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
        return await this.userService.UserLoginAsync(request , token);

    }
}
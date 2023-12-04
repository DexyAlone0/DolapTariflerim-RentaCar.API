namespace YemekTarifiContext.Domain.Entities
{
    // Food sınıfı
    // Food.cs
    public class Food
    {
        public int FoodID { get; set; }
        public string FoodName { get; set; }
        public string FoodRecipe { get; set; }
        public List<FoodMaterial> FoodMaterials { get; set; }
    }

    // Material.cs
    public class Material
    {
        public int MaterialID { get; set; }
        public string MaterialName { get; set; }
        public ICollection<FoodMaterial> FoodMaterials { get; set; }
    }

    // FoodMaterial.cs
    public class FoodMaterial
    {
        public int FoodMaterialID { get; set; }
        public int FoodID { get; set; }
        public Food Food { get; set; }
        public int MaterialID { get; set; }
        public Material Material { get; set; }
    }

}


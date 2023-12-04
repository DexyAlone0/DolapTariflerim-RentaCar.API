namespace YemekTarifiContext.Contract.Request
{
    public class FoodCreationModelRequest
    {
        public string FoodName { get; set; }
        public string Recipe { get; set; }
        public List<string> Materials { get; set; }
    }
}

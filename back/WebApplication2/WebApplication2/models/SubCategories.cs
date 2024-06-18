using System.ComponentModel.DataAnnotations;

namespace WebApplication2.models
{
    public class SubCategories
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public int id_category { get; set; }
    }

}

using System.ComponentModel.DataAnnotations;

namespace WebApplication2.models
{
    public class Category
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string section_id { get; set; }

    }

}

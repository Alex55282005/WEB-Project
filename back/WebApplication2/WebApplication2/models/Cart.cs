using System.ComponentModel.DataAnnotations;

namespace WebApplication2.models
{
    public class Cart
    {
        [Key]
        public int id { get; set; }
        public int user_id { get; set; }
        public string articules { get; set; }
    }

}

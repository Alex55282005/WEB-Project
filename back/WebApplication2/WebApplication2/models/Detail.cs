using System.ComponentModel.DataAnnotations;

namespace WebApplication2.models
{
    public class Detail
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string articul { get; set; }
        public string brand { get; set; }
        public int price { get; set; }
        public int quantaty { get; set; }
        public string image { get; set; }
        public int id_sub_category { get; set; }
    }

}

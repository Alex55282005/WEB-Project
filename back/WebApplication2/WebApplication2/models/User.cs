using System.ComponentModel.DataAnnotations;

namespace WebApplication2.models
{
    public class User
    {
        [Key]
        public int user_id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public int cart { get; set; } = 0; // Default value
        public string messages { get; set; } = string.Empty; // Default value
        public string token { get; set; } = Guid.NewGuid().ToString(); // Auto-generate value
    }
}

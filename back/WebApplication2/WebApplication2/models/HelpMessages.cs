using System.ComponentModel.DataAnnotations;

namespace WebApplication2.models
{
    public class HelpMessages
    {
        [Key]
        public int id { get; set; }
        public int user_id { get; set; }
        public string help_text { get; set; }
    }

}

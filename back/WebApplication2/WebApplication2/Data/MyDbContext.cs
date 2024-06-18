using Microsoft.EntityFrameworkCore;
using WebApplication2.models;


namespace WebApplication2.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        public DbSet<Cart> Carts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Detail> Details { get; set; }
        public DbSet<HelpMessages> HelpMessages { get; set; }
        public DbSet<SubCategories> SubCategories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserMessages> UserMessages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cart>().ToTable("cart");
            modelBuilder.Entity<Category>().ToTable("category");
            modelBuilder.Entity<Detail>().ToTable("detail");
            modelBuilder.Entity<HelpMessages>().ToTable("help_messages");
            modelBuilder.Entity<SubCategories>().ToTable("sub-categories");
            modelBuilder.Entity<User>().ToTable("user");
            modelBuilder.Entity<UserMessages>().ToTable("user_messages");
        }
    }
}

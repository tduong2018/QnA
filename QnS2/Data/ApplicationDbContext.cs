using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QnS2.Models.Entities;


namespace QnS2.Data
{
    public class ApplicationDbContext:IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }
        public virtual DbSet<Answer> Answers { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<Topic> Topic { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<AppUser>().ToTable("Users").Property(p => p.Id).HasColumnName("Id");
            modelBuilder.Entity<IdentityRole>().ToTable("Roles").HasKey(p => p.Id);
            modelBuilder.Entity<IdentityUserRole<string>>().ToTable("UserRoles");
            modelBuilder.Entity<Question>()
                .HasMany(e => e.Answers)
                .WithOne(e => e.Question);

            modelBuilder.Entity<AppUser>()
                .HasMany(e => e.Answers)
                .WithOne(e => e.User);

            modelBuilder.Entity<AppUser>()
                .HasMany(e => e.Questions)
                .WithOne(e => e.User);
        }
    }
}

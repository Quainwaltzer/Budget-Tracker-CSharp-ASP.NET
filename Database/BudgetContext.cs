using BudgetTracker.Schemas;
using Microsoft.EntityFrameworkCore;


namespace BudgetTracker.Database
{
    public class BudgetContext : DbContext
    {
        public BudgetContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<BudgetDatabase> Budgets { get; set; }
    }
}
